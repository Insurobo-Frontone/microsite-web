import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import RadioInput from "../../Input/RadioInput";
import SelectButton from "./SelectButton";
import Popup from "../Popup";

const InsuJoinStep2 = () => {
  const methods = useFormContext();
  const [close, setClose] = useState(true);
  const [id, setId] = useState(null);
  const { watch, setValue } = methods;

  useEffect(() => {
    if (watch('list1') === 'Y') {
      setValue('list1', '');
      setClose(false);
    } else if (watch('list2') === 'Y') {
      setValue('list2', '');
      setClose(false);
    }
  }, [watch('list1'), watch('list2')]);

  const list1 = [
    {
      id: 'list1_yes',
      title: '예',
      value: 'Y'
    },
    {
      id: 'list1_no',
      title: '아니요',
      value: 'N'
    },
  ];

  const list2 = [
    {
      id: 'list2_yes',
      title: '예',
      value: 'Y'
    },
    {
      id: 'list2_no',
      title: '아니요',
      value: 'N'
    },
  ];
  return (
    <>
      <CheckList>
        <li>
          <p>최근 3년 내에&nbsp; 
            <span onClick={() => {
              setId(1)
              setClose(false)
            }}
            >특정질병[보기]</span>으로 입원 또는 수술을 받은 적이 있나요?
          </p>
          <RadioInput
            list={true}
            name='list1'
            data={list1}
          />
        </li>
        <li>
          <p>여행기간 중 직업 또는 동호회 활동 목적으로&nbsp; 
            <span onClick={() => {
              setId(2)
              setClose(false)
            }}
            >위험한 레포츠[보기]</span>를 하시나요?
          </p>
          <RadioInput
            list={true}
            name='list2'
            data={list2}
          />
        </li>
        <li>
          <p>여행목적</p>
          {/* name 바뀌면 SelectPopup에서 setValue바꿔줘야함 */}
          <SelectButton name='list3' />
        </li>
      </CheckList>
      {!close && (
        <Popup type={id === 1 || id === 2 ? 'info' : 'alert'} 
          close={() => {
            setClose(true)
            setId(null)}
          }
        >
          {id === 1 ? ( 
            <>
              <h2>특정질병</h2>
              <div>
                암, 백혈병, 협심증, 심근경색, 심장판막증, 간경화증, 뇌졸중증(뇌출혈, 뇌경색), 당뇨병, 에이즈 및 HIV 보균
              </div>
            </>
          ) : id === 2 ? (
            <>
              <h2>위험한 레포츠</h2>
              <div>
                스쿠버다이빙, 행글라이딩/패러글라이딩, 스카이다이빙, 수상스키, 자동차/오토바이경주, 번지점프, 빙벽/암벽등반, 제트스키, 래프팅, 이와 비슷한 위험도가 높은 활동
              </div>
            </>
          ) : (
            <p>보험가입대상이 아닙니다.</p>
            )
          }
        </Popup>
      )}
    </>
  )
}
export default InsuJoinStep2;

const CheckList = styled.ul`
  counter-reset: number 0;
  > li {
    width: 100%;
    margin-bottom: 40px;
    :last-child {
      margin-bottom: 0;
    }
    > p {
      margin-bottom: 20px;
      font-size: 20px;
      color: #393939;
      padding-left: 25px;
      position: relative;
      ::before {
        content: counter(number)'.';
        display: block;
        position: absolute;
        left: 0;
        counter-increment: number 1;
        font-size: 20px;
      }
      > span {
        color: #2EA5FF;
        border-bottom: 1px solid #2EA5FF;
        cursor: pointer;
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    padding-top: 27px;
    > li {
      margin-bottom: 24px;
      > p {
        margin-bottom: 24px;
        padding-left: 20px;
        font-size: 16px;
        ::before {
          font-size: 16px;
        }
      }
    }
  }
`;




