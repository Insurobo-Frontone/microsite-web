import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import SelectPlan from "./SelectPlan";
import TargetPlanResult from "../Local/Step1/TargetPlanResult";

const InsuCalc = ({ type }) => {
  const { watch } = useFormContext();
  
  const gap = watch('localEnd') - watch('localStart');
  const date = Math.ceil(gap / (1000 * 60 * 60 * 24) + 1);
  const conDay = watch('localStart');
  const conDayYear = conDay.getFullYear();
  const conDayMonth =  conDay.getMonth() + 1 < 10 ? '0' + (conDay.getMonth() + 1) : conDay.getMonth() + 1;
  const conDayDate =  conDay.getDate() < 10 ? '0' + conDay.getDate() : conDay.getDate();
  const birth = watch('birthRep').substring(0, 2);
  const birthMonth = watch('birthRep').substring(2, 4);
  const birthDay = watch('birthRep').substring(4, 6);
  const birthYear = birth > 23 ? 19 + birth : 20 + birth;
  const korAge = conDayMonth < Number(birthMonth) + 6 ? 0 : conDayDate < Number(birthDay) ? 0 : 1;
  const insuAge = (conDayYear - birthYear) + korAge;

  const insuInfodata = [
    {
      id: 1,
      title: '보험기간',
      data: `${date}일`
    },
    {
      id: 2,
      title: '보험나이',
      data: `${insuAge}세`
    },
    {
      id: 3,
      title: '성별',
      data: `${watch('genderRep') === 'M' ? '남자' : '여자'}`
    },
  ];
  
  return (
    <>
      <InsuInfoLabelWrap>
        {insuInfodata.map((dt) => (
          <li key={dt.id}>
            {dt.title}&nbsp;<span>{dt.data}</span>
          </li>
        ))}
      </InsuInfoLabelWrap>
      <InsuPlanTypelWrap>
        <SelectPlan />
      </InsuPlanTypelWrap>
      {type === 'local' ? (<TargetPlanResult />) : ''}
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

