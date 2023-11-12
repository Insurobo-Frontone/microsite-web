import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormContext, useWatch } from "react-hook-form";
import useWindowSize from "../../../../hooks/useWindowSize";
import ApplyHeader from "../ApplyHeader";
import InsuInfo from "./Step1/InsuInfo";
import InsuCalc from "../Step1/InsuCalc";
import InsuJoin from "../Step2/InsuJoin";
import TravelPageContext from "../../../../context/travelPageContext";
import CheckInput from "../../Input/CheckInput";
import privacy from "../../TravelData/PrivacyData";
import PolicyButton from "../../Input/PolicyButton";
import Button from "../Button";
import MyPage from "../Step3/MyPage";
import Qna from "../Step4/Qna";
import Popup from "../Popup";
import { onClickPayment } from "../onClickPayment";
import { postTourSave } from "../../../../api/TravelAPI";

const Local= ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowSize();
  const pageState = location.state;
  const { state, actions } = useContext(TravelPageContext);
  const [close, setClose] = useState(true);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyId, setPolicyId] = useState(1);
  const { control, watch } = useFormContext();
  const join2Valid = useWatch({
    control,
    name: ['list1', 'list2', 'list3', 'notice', 'policyAllAgree'],
  });

  const tourSaveNext = () => {
    postTourSave({
      juminFront: '', //	주민등록번호 앞자리
      juminBack: '', // 주민등록번호 뒷자리
      phoneNum: '', // 핸드폰번호
      email: '', // 이메일
      age: '', // 나이
      sex: '', // 성별 (M, F)
      period: '', // 여행기간
      gubun: '', //보험 구분(1: 든든, 3: 안심)
      startDate: '', //	여행 시작일
      endDate: '', // 여행 마감일
      diseasesThreeYearsAgreement: '', // 3년간 특정 질병 유무(Y, N)
      dangerLeisureSportsAgreement: '', // 위험한 레포츠 취미 유무(Y, N)
      foreignerYn: '', // 외국인 여부(Y, N)
      travelPurpose: '', // 여행 목적
      privacyInfoAgreement: '', // 개인정보수집 동의 여부(Y, N)
      beforePayment: '', //	결제전 여부(Y, N)
      deleteYn: '' // 삭제 여부(Y, N)
    }).then((res) => {

    })
    navigate(`/insuroboTravel/apply?step=2&join=3`, {
      state: {
        type: type,
        step: '2',
        join: '3'
      }
    })
  }
  const onClickNext = (step) => {
    switch (step) {
      // 간편계산 1인가입버튼 클릭
        case 'step1' :
        navigate(`/insuroboTravel/apply?step=2&join=1`, {
          state: {
            type: type,
            step: '2',
            join: '1'
          }
        });
        // actions.setOpen(false);
        break;
         
        // 보험가입 위 내용 확인 후 결제하기 버튼 클릭
        // case 'step2-3' :
        //   if (watch('goPay') === '2') {
        //     navigate(`/insuroboTravel/apply/payment`);
        //   }

      default: break;
    }
  }
  return (
    <>
      <Wrap info={pageState.step === '1' && !state.open}>
        <ApplyHeader type={type} />
        <ReqContent scroll={pageState.step === '4' ? true : false}>
          {pageState.step === '1' ? (
            //간편계산
            <InsuInfo />
            //보험가입
          ) : pageState.step === '2' ? (
            <InsuJoin type={type} />
            //마이페이지
          ) : pageState.step === '3' ? (
            <MyPage />
            // Q&A
          ) : pageState.step === '4' && (
            <Qna type={type} />
          )} 
        </ReqContent>
      </Wrap>
      {/* 2번째 박스 있는 경우 */}
      {/* 보험료 확인 */}
      {state.open && pageState.step === '1' && (
        <>
          <Wrap>
            <ResContent>
              <InsuCalc type={type} />
            </ResContent>
          </Wrap>
          <ButtonWrap>
            {/* 1인 가입 */}
            <Button
              type='border'
              title='1인 가입'
              onClick={() => onClickNext('step1')}
            />
          </ButtonWrap>
        </>
      )}
      {/* 보험가입 -> 2번째 단계 2번째 박스 */}
      {pageState.step === '2' && pageState.join === '2' && (
        <>
          <Wrap>
            <NoticeWrap border={policyOpen}>
              <div>
                <ul>
                  <li><span onClick={() => setClose(false)}>기왕증[보기]</span>&nbsp;및 현장작업 중 발생된 사고는 보상되지 않습니다.</li>
                  <li>외국인은 가입대상이 아닙니다.</li>
                </ul>
                <CheckInput
                  id='notice1'
                  name='notice'
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
            {policyOpen && (
              <PolicyWrap border={policyOpen}>
                <ul>
                  {privacy.map((dt) => (
                    <li key={dt.id}>
                      <PolicyButton
                        title={dt.title}
                        onClick={() => setPolicyId(dt.id)}
                        active={dt.id === policyId}
                      />
                      {width < 767.98 && dt.id === policyId && (
                        <div
                          className={dt.id === policyId ? 'view active' : 'view'}
                          dangerouslySetInnerHTML={{
                            __html: privacy.find((cur) => cur.id === policyId).textData
                          }} 
                        />
                      )}
                    </li>
                  ))}
                  <li>
                    <Button 
                      type='border'
                      title='보험약관'
                    />
                  </li>
                </ul>
                {width > 767.98 && (
                  <div dangerouslySetInnerHTML={{
                      __html: privacy.find((cur) => cur.id === policyId).textData
                    }} 
                  />  
                )}
              </PolicyWrap>
            )}
          </Wrap>
          {!close && (
            <Popup type='info' close={() => setClose(true)}>
              <h2>기왕증</h2>
              <div>
                과거의 질병이나 부상이 완치되지 않아 현재까지도 치료, 관리가 필요한 질병, 상해를 말하며, 충치, 습관성 탈구 등도 이에 해당합니다
              </div>
            </Popup>
          )}
          <ButtonWrap>
            <Button
              title='확인'
              disabled={
                join2Valid[0] === 'no' &&
                join2Valid[1] === 'no' &&
                join2Valid[2] !== '' &&
                join2Valid[3] === true &&
                join2Valid[4] === true ? false : true
              }
              onClick={tourSaveNext}
            />
          </ButtonWrap>
        </>
      )}
      {pageState.step === '2' && pageState.join === '3' && (
        <ButtonWrap className="couple-button-wrap">
          <Button
            title='아니요'
            type='border'
          />
          <Button
            title={width > 767.98 ? '위 내용 확인 후 결제하기' : '확인 후 결제'}
            onClick={onClickPayment}
          />
        </ButtonWrap>
      )}
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

  ${(props) => props.theme.window.mobile} {
    box-shadow: none;
    border-radius: 0;
    width: 100%;
    margin-bottom: 0;
    background-color: transparent;
  }
`;

const ReqContent = styled.div`
  padding: 40px 80px 50px;

  ${props => props.scroll && css`
    padding: 0;
  `}

 ${(props) => props.theme.window.mobile} {
    padding: 24px 24px 20px;
  }
`;

const ResContent = styled.div`
  padding: 0 80px;
  ${(props) => props.theme.window.mobile} {
    padding: 0 24px;
  }
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
        color: #393939;
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
          background-color: #393939;
        }
        
      }
      > li:last-child {
        margin-bottom: 0;
      }
    }
    > p {
      font-size: 20px;
      line-height: 40px;
      color: #393939;
    }
    span {
      color: #2EA5FF;
      border-bottom: 1px solid #2EA5FF;
      line-height: 1;
    }
  }

  ${(props) => props.theme.window.mobile} {
    > div:first-child {
      border-top: 1px solid #F0F0F0;
    }
    > div:last-child {
      border-bottom: 1px solid #F0F0F0;
    }
    ${props => props.border && css`
      > div:last-child {
        border-bottom: none;
      }
    `}
    
    > div {
      display: block;
      padding: 24px 0;
      margin: 0 24px;
      position: relative;
      > ul { 
        > li {
          font-size: 14px;
          margin-bottom: 7px;
          padding-left: 10px;
          line-height: 24px;
          display: block;
          position: relative;
          ::before {
            position: absolute;
            left: 0;
            top: 10px;
            width: 4px;
            height: 4px;
            margin: 0;
          }
        }
      }
      > p {
        font-size: 14px;
        line-height: 24px;
      }
      > div {
        position: absolute;
        right: 0;
        bottom: 24px;
      }
      span {
        display: inline-block;
      }
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
    ::-webkit-scrollbar, ::-webkit-scrollbar-track {
      width: 13px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #D9D9D9;
      border-radius: 30px;
      width: 13px;
      height: 79px;
      background-clip: padding-box;
      border: 4px solid transparent;
    }
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
  ${(props) => props.theme.window.mobile} {
    padding: 10px 0 24px;
    margin: 0 24px;
    ${props => props.border && css`
      border-bottom: 1px solid #F0F0F0;
    `}
    > ul {
      width: 100%;
      > li {
        .view {
          height: 0;
          padding: 10px;
          font-size: 14px;
          overflow-y: scroll;
          background-color: #F4FAFF;
          border-radius: 5px;
          ::-webkit-scrollbar, ::-webkit-scrollbar-track {
            width: 13px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: #D9D9D9;
            border-radius: 30px;
            width: 13px;
            height: 79px;
            background-clip: padding-box;
            border: 4px solid transparent;
          }
          color: #393939;
          &.active {
            height: 191px;
          }
        }
      }
    }
  }

`;

const ButtonWrap = styled.div`
  margin-bottom: 20px;
  &.couple-button-wrap {
    display: flex;
    justify-content: space-between;
    > button {
      width: 49.56896551724138%;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin: 20px 24px;
    &.couple-button-wrap {
      margin-top: 0;
      > button {
        width: 48.3974358974359%;
      }
    }
  }
`;

