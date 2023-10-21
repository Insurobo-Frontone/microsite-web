import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormContext, useFieldArray } from "react-hook-form";
import SelectInput from "../Input/SelectInput";
import RadioInput from "../Input/RadioInput";
import SelectButton from "../Input/SelectButton";

const InsuJoinStep2 = ({ type }) => {
  const navigate = useNavigate();
  const methods = useFormContext();
  const { register, control, setValue, formState: { isValid, isDirty } } = methods;
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: "checkGroup"
  });
  
  const checkList = [
    {
      id: 1,
      title: `1.최근 3년 내에 <span>특정질병[보기]</span>으로 입원 또는 수술을 받은 적이 있나요?`
    },
    {
      id: 2,
      title: `2.여행기간 중 직업 또는 동호회 활동 목적으로 <span>위험한 레포츠[보기]</span>를 하시나요?`
    },
    {
      id: 3,
      title: `3.여행목적`
    },
  ];

  const radioData = [
    {
      id: 1,
      title: '예',
      value: 'yes'
    },
    {
      id: 2,
      title: '아니요',
      value: 'no'
    },
  ];

  return (
    <CheckList>
      {checkList.map((list) => (
        <li key={list.id}>
          <p dangerouslySetInnerHTML={{
             __html: list.title
            }} 
          />
          {list.id === 3 ? (
            <SelectButton name={`checkGroup.${list.id}.list`} />
          ) : (
            <RadioInput
              list
              name={`checkGroup.${list.id}.list`}
              data={radioData}
              defaultValue={list.id == 1 ? 'no' : ''}
            />
          )}
        </li>
      ))}
    </CheckList>
  )
}

export default InsuJoinStep2;


const CheckList = styled.ul`
  > li {
    width: 100%;
    margin-bottom: 40px;
    :last-child {
      margin-bottom: 0;
    }
    > p {
      margin-bottom: 20px;
      font-size: 20px;
      > span {
        color: #2EA5FF;
        border-bottom: 1px solid #2EA5FF;
      }
    }
  }
`;




