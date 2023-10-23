import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import ApplyHeader from "../ApplyHeader";
import InsuInfo from "./Step1/InsuInfo";
import InsuCalc from "../InsuCalc";
import RadioInput from "../../Input/RadioInput";
import InsuJoin from "../InsuJoin";
import TravelPageContext from "../../../../context/travelPageContext";
import CheckInput from "../../Input/CheckInput";
import privacy from "../../PolicyData/PrivacyData";
import PolicyButton from "../../Input/PolicyButton";
import Button from "../Button";

const Local= () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const step = searchParams.get("step");
  const join = searchParams.get("join");

  const { state, actions } = useContext(TravelPageContext);
  const { watch, formState: { isValid, isDirty } } = useFormContext();
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyId, setPolicyId] = useState(1);

  const pepelSelect = [
    {
      id: 1,
      value: '1',
      title: '1인 가입'
    },
    // {
    //   id: 2,
    //   value: '2',
    //   title: '2인 이상 가입'
    // },
  ];
  const paySelect = [
    {
      id: 1,
      value: '1',
      title: '아니요'
    },
    {
      id: 2,
      value: '2',
      title: '위 내용 확인 후 결제하기'
    },
  ];

  const onClickCalc = (step) => {
    switch (step) {
      case 'step1-1' :
        if (
          watch('localStart') &&
          watch('localEnd') &&
          watch('birthRep') &&
          watch('genderRep')
        ) {
          actions.setOpen(true);
          window.scrollTo({top: 700, left: 0, behavior: 'smooth'})

        } else {
          alert('입력값을 확인하세요.');
        }
        break;
        case 'step1-2' :
        navigate(`/insuroboTravel/apply?type=local&step=2&join=1`);
        actions.setOpen(false);

        break;
      default: break;
    }
  }
  return (
    <>
      <Wrap info={step === '1' && ! state.open}>
        <ApplyHeader type='local' />
        <ReqContent>
          {step === '1' ? (
            <InsuInfo onClickCalc={() => onClickCalc('step1-1')} />
          ) : step === '2' ? (
            // 신청 - 확인 - 결제 첫번째 화면 
            <InsuJoin type='local' />
          ) : '마이페이지'} 
        </ReqContent>
      </Wrap>
      {state.open && step === '1' (
        <>
          <Wrap>
            <ResContent>
              <InsuCalc type='local' />
            </ResContent>
          </Wrap>
          <NextStepButton>
            <RadioInput
              tep
              name='personType'
              data={pepelSelect}
              defaultValue='1'
              onClick={() => onClickCalc('step1-2')}
            /> 
          </NextStepButton>
        </>
      )}
      {/* 보험가입 -> 확인 화면 2번째 박스 */}
      {step === '2' && join === '2' && (
        <form>
          <Wrap>
            <NoticeWrap>
              <div>
                <ul>
                  <li><span>기왕증[보기]</span>&nbsp;및 현장작업 중 발생된 사고는 보상되지 않습니다.</li>
                  <li>외국인은 가입대상이 아닙니다.</li>
                </ul>
                <CheckInput
                  id='notice1'
                  name='notice'
                  defaultChecked
                />
              </div>
              <div>
                <p>보험가입을 위해 <span onClick={() => setPolicyOpen(!policyOpen)}>개인정보수집 등</span>에 동의합니다.</p>
                <CheckInput
                  id='notice2'
                  name='policyAllAgree'
                />
              </div>
            </NoticeWrap>
            <PolicyWrap>
              <ul>
                {privacy.map((dt) => (
                  <li key={dt.id}>
                    <PolicyButton
                      name={`policy${dt.id}`}
                      value={dt.title}
                      readOnly
                      onClick={() => setPolicyId(dt.id)}
                      active={dt.id === policyId}
                    />
                  </li>
                ))}
                <li>
                  <Button 
                    type='terms'
                    title='보험약관'
                  />
                </li>
              </ul>
              <div dangerouslySetInnerHTML={{
                __html: privacy.find((cur) => cur.id === policyId).textData
                }} 
              />
            </PolicyWrap>
          </Wrap>
          <ButtonWrap>
            <Button
              title='확인'
              disabled={!isDirty || !isValid}
              onClick={() => 
                navigate(`/insuroboTravel/apply?type=local&step=2&join=3`)
              }
            />
          </ButtonWrap>
        </form>
      )}
    

      {/* {step === '2' && join === '3' (
        <RadioInput
          name='goPay'
          data={paySelect}
          defaultValue='2'
          onClick={() => onClickCalc('step1-2')}
        />
      )} */}
    </>
  );
}

export default Local;

const Wrap = styled.div`
  position: relative;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;
  ${props => props.info && css`
    margin-bottom: 50px;
  `}
`;

const ReqContent = styled.div`
  padding: 40px 80px 50px;
`;

const ResContent = styled.div`
  padding: 0 80px;
`;

const NextStepButton = styled.div`
  margin-bottom: 20px;
`;

const NoticeWrap = styled.div`
  > div:first-child {
    border-bottom: 1px solid #F0F0F0;
  }
  > div {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;
    margin: 0 40px;
    > ul { 
      > li {
        font-size: 20px;
        line-height: 1;
        color: #333333;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        ::before {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          margin: 0 10px;
          background-color: #333333;
        }
        
      }
      > li:last-child {
        margin-bottom: 0;
      }
    }
    > p {
      font-size: 20px;
      line-height: 40px;
      color: #333333;
    }
    span {
      color: #2EA5FF;
      border-bottom: 1px solid #2EA5FF;
    }
  }
`;

const PolicyWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 50px;
  > ul {
    width: 535px;
    > li {
      margin-bottom: 10px;
    }
    > li:last-child {
      margin-bottom: 0;
    }
  }
  > div {
    width: 535px;
    height: 370px;
    overflow-y: scroll;
    background-color: #F4FAFF;
    border-radius: 10px;
    border: 1.5px solid #CECECE;
    font-size: 20px;
    padding: 20px 28px;
    color: #333333;
    ul {
      > li {
        position: relative;
        padding-left: 15px;
        ::before {
          content: '';
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #333333;
          position: absolute;
          top: 12.5px;
          left: 0;
        }
      }
    }
  }
`;

const ButtonWrap = styled.div`
  margin-bottom: 20px;
  > button {
     width: 100%;
  }
  
`;

