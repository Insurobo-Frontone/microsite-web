import React, { useState } from "react";
import styled from "styled-components";
import { useFormContext, useFieldArray } from "react-hook-form";
import RadioInput from "../../Input/RadioInput";
import SelectButton from "./SelectButton";
import Popup from "../Popup";
import { id } from "date-fns/locale";

const InsuJoinStep2 = () => {
  const methods = useFormContext();
  const [close, setClose] = useState(true);
  const [id, setId] = useState(null);

  const { control, formState: { isValid, isDirty } } = methods;
  useFieldArray({
    control,
    name: "checkGroup"
  });
  
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
    <>
      <CheckList>
        <li>
          <p>1.최근 3년 내에 
            <span onClick={() => {
              setId(1)
              setClose(false)
            }}
            >특정질병[보기]</span>으로 입원 또는 수술을 받은 적이 있나요?
          </p>
          <RadioInput
            list
            name={`checkGroup.1.list`}
            data={radioData}
            defaultValue={'no'}
          />
        </li>
        <li>
          <p>2.여행기간 중 직업 또는 동호회 활동 목적으로 
            <span onClick={() => {
              setId(2)
              setClose(false)
            }}
            >
              위험한 레포츠[보기]</span>를 하시나요?
          </p>
          <RadioInput
            list
            name={`checkGroup.2.list`}
            data={radioData}
            defaultValue={'no'}
          />
        </li>
        <li>
          <p>3.여행목적</p>
          <SelectButton name={`checkGroup.3.list`} />
        </li>
      </CheckList>
    {!close && (
      <Popup type='info' close={() => setClose(true)}>
        {id === 1 && (
          <>
            <h2>특정질병</h2>
            <div>
              암, 백혈병, 협심증, 심근경색, 심장판막증, 간경화증, 뇌졸중증(뇌출혈, 뇌경색), 당뇨병, 에이즈 및 HIV 보균
            </div>
          </>
        )}
        {id === 2 && (
          <>
            <h2>위험한 레포츠</h2>
            <div>
              스쿠버다이빙, 행글라이딩/패러글라이딩, 스카이다이빙, 수상스키, 자동차/오토바이경주, 번지점프, 빙벽/암벽등반, 제트스키, 래프팅, 이와 비슷한 위험도가 높은 활동
            </div>
          </>
        )}
      </Popup>
    )}
    </>
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
        cursor: pointer;
      }
    }
  }
`;




