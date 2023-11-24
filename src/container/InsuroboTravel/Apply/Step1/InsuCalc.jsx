import React, { useEffect, useContext, useState, useRef } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import SelectPlan from "./SelectPlan";
import TargetPlanResult from "../Local/TargetPlanResult";
import TravelPageContext from "../../../../context/travelPageContext";
import { getCalc } from "../../../../api/TravelAPI";
import { insuAge, travelPeriod } from "../TravelDateFomat";

const InsuCalc = () => {
  const root = useRef();
  const { watch } = useFormContext();
  const { actions } = useContext(TravelPageContext);
  const [data, setData] = useState([]);
  const date = travelPeriod(watch('localEnd'), watch('localStart'));
  const age = insuAge(watch('localStart'), watch('birthRep'));
  const insuInfodata = [
    {
      id: 1,
      title: '보험기간',
      data: `${date}일`
    },
    {
      id: 2,
      title: '보험나이',
      data: `${age}세`
    },
    {
      id: 3,
      title: '성별',
      data: `${watch('genderRep') === 'M' ? '남자' : '여자'}`
    },
  ];

  
  useEffect(() => {
    getCalc({
      age: age,
      sex: watch('genderRep'),
      period: date
    }).then((res) => {
      setData(res.data.data);
      console.log(res.data.data)
      root.current?.scrollIntoView({ behavior: 'smooth' });
    }).catch((e) => console.log(e));
    
    return () => {
      actions.setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('birthRep'), watch('genderRep'), date]);


  return (
    <>
      <InsuInfoLabelWrap ref={root}>
        {insuInfodata.map((dt) => (
          <li key={dt.id}>
            {dt.title}&nbsp;<span>{dt.data}</span>
          </li>
        ))}
      </InsuInfoLabelWrap>
      <InsuPlanTypelWrap>
        <SelectPlan data={data} />
      </InsuPlanTypelWrap>
      <TargetPlanResult data={data} />
    </>
  );
}
export default InsuCalc;

const InsuInfoLabelWrap = styled.ul`
  display: flex;
  justify-content: center;
  padding-top: 74px;
  > li {
    background-color: #2EA5FF;
    color: #FFFFFF;
    border-radius: 100px;
    padding: 16px 32px;
    margin-right: 30px;
    font-size: 20px;
    :last-child {
      margin-right: 0;
    }
    > span {
      color: #FFFFFF;
      font-weight: 700;
    }
  }

  ${(props) => props.theme.window.mobile} {
    padding-top: 25px;
    border-top: 1px solid #F0F0F0;
    > li {
      padding: 6px 10px;
      font-size: 14px;
      margin-right: 13px;
    }
  }
`;

const InsuPlanTypelWrap = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  ${(props) => props.theme.window.mobile} {
    padding-top: 24px;
  }
`;

