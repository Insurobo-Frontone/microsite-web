import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import SelectPlan from "./SelectPlan";
import TargetPlanResult from "./Local/Step1/TargetPlanResult";

const InsuCalc = ({ type }) => {
  const { watch } = useFormContext();
  const gap = watch('localEnd') - watch('localStart');
  const date = Math.ceil(gap / (1000 * 60 * 60 * 24) + 1);
  // const today = new Date();
  // const birthDate = new Date(2000, 7, 10)
  const insuInfodata = [
    {
      id: 1,
      title: '보험기간',
      data: `${date}일`
    },
    {
      id: 2,
      title: '보험나이',
      data: '31세'
    },
    {
      id: 1,
      title: '성별',
      data: `${watch('genderRep') === 'M' ? '남자' : '여자'}`
    },
  ]
  return (
    <>
      <InsuInfoLabelWrap>
        {insuInfodata.map((dt) => (
          <li>
            {dt.title}&nbsp;&nbsp;<span>{dt.data}</span>
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
`;

const InsuPlanTypelWrap = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
`;