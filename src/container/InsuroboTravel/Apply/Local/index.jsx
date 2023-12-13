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
import { deleteTourList, postPaymentCom, postPaymentPre, postTourSave } from "../../../../api/TravelAPI";
import { insuAge, toStringByFormatting, travelPeriod } from "../TravelDateFomat";
import pdf from '../../../../assets/pdf/프로미_국내여행보험Ⅱ_보험약관.pdf';

const Local= ({ type }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { width } = useWindowSize();
  const pageState = location.state;
  const { state } = useContext(TravelPageContext);
  const [popupOpen, setPopupOpen] = useState({
    state: false,
    type: ''
  });
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyId, setPolicyId] = useState(1);
  const [infoId, setInfoId] = useState(0);
  const { control, watch, reset } = useFormContext();
  const join2Valid = useWatch({
    control,
    name: ['list1', 'list2', 'list3', 'notice', 'policyAllAgree'],
  });
  const email = watch('emailRep') +'@'+ (watch('emailRep2') === 'myself' ? watch('emailRep2Change') : watch('emailRep2'));
  // 보험 저장
  const tourSaveNext = () => {
    const date = travelPeriod(watch('localEnd'), watch('localStart'));
    const age = insuAge(watch('localStart'), watch('birthRep'));
    postTourSave({
      userName: watch('nameRep'),
      juminFront: watch('birthRep'), //	주민등록번호 앞자리
      juminBack: watch('LastRegRep'), // 주민등록번호 뒷자리
      phoneNum: watch('mobileRep').replace(/-/g, ""), // 핸드폰번호
      email: email, // 이메일
      age: age, // 나이
      sex: watch('genderRep'), // 성별 (M, F)
      period: date, // 여행기간
      gubun: watch('calcPlan'), //보험 구분
      startDate: toStringByFormatting(watch('localStart')), //	여행 시작일
      endDate: toStringByFormatting(watch('localEnd')), // 여행 마감일
      diseasesThreeYearsAgreement: watch('list1'), // 3년간 특정 질병 유무(Y, N)
      dangerLeisureSportsAgreement: watch('list2'), // 위험한 레포츠 취미 유무(Y, N)
      foreignerYn: watch('notice') ? 'N' : 'Y', // 외국인 여부(Y, N)
      travelPurpose: watch('list3'), // 여행 목적
      privacyInfoAgreement: watch('policyAllAgree') ? 'Y' : 'N', // 개인정보수집 동의 여부(Y, N)
      fee: watch('calcPlanFee') // 보험료
    }).then((res) => {
      setInfoId(res.data.data);
      postPaymentPre({
        merchant_uid: res.data.data,
        amount: watch('calcPlanFee')
      })
      navigate(`/insuroboTravel/apply?step=2&join=3`, {
        state: {
          type: type,
          step: '2',
          join: '3'
        }
      });
    }).catch((e) => {
      console.log(e);
    })
  }

  const tourRemove = () => {
    deleteTourList(infoId)
    .then((res) => {
      console.log(res)
      setPopupOpen((prevState) => ({
        ...prevState,
        state: false,
        type: ''
      }))
      reset();
      navigate(`/insuroboTravel/apply?step=2&join=1`, {
        state: {
          type: type,
          step: '1',
        }
      });
    })
  }
  const NextinsuJoin = (totalNum) => {
    switch (totalNum) {
      // 간편계산 1인 가입버튼 클릭
        case '1' :
        navigate(`/insuroboTravel/apply?step=2&join=1`, {
          state: {
            type: type,
            step: '2',
            join: '1'
          }
        });
        break;
      default: break;
    }
  }

  const callback = (response) => {
    const { success, imp_uid, merchant_uid, paid_amount, buyer_email, error_msg
    } = response;
    console.log(response)
    console.log(merchant_uid)
    if (success) {
      postPaymentCom({
        imp_uid: imp_uid,
        merchant_uid: merchant_uid,
        amount: paid_amount,
        email: buyer_email,
        dt_id: merchant_uid
      }).then((res) => {
        if (res.status === 200) {
          setPopupOpen((prevState) => ({
            ...prevState,
            state: true,
            type: 'alert'
          }))
        }
      }).catch((e) => {
        console.log(e)
      })
    } else {
      console.log(error_msg)
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
      {/* 2번째 Wrap 있는 경우 */}
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
              onClick={() => NextinsuJoin('1')}
            />
          </ButtonWrap>
        </>
      )}
      {/* 보험가입 -> 2번째 단계 2번째 wrap */}
      {pageState.step === '2' && pageState.join === '2' && (
        <>
          <Wrap>
            <NoticeWrap border={policyOpen}>
              <div>
                <ul>
                  <li>
                    <span onClick={() => setPopupOpen((prevState) => ({
                        ...prevState,
                        state: true,
                        type: 'info'
                      }))}
                    >
                      기왕증[보기]</span>&nbsp;및 현장작업 중 발생된 사고는 보상되지 않습니다.
                  </li>
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
                      onClick={() => window.open(pdf, '_blank')}
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
          {popupOpen.type === 'info' && popupOpen.state && (
            <Popup type='info' close={() => setPopupOpen((prevState) => ({
              ...prevState,
              state: false,
              type: ''
            }))}>
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
                join2Valid[0] === 'N' &&
                join2Valid[1] === 'N' &&
                join2Valid[2] !== '' &&
                join2Valid[3] === true &&
                join2Valid[4] === true ? false : true
              }
              onClick={tourSaveNext}
            />
          </ButtonWrap>
        </>
      )}
      {/* 보험가입 -> 3번째 단계 버튼 wrap */}
      {pageState.step === '2' && pageState.join === '3' && (
        <>
          <ButtonWrap className="couple-button-wrap">
            <Button
              title='아니요'
              type='border'
              onClick={() => setPopupOpen((prevState) => ({
                ...prevState,
                state: true,
                type: 'select'
              }))}
            />
            <Button
              title={width > 767.98 ? '위 내용 확인 후 결제하기' : '확인 후 결제'}
              onClick={() => onClickPayment({
                id: infoId,
                amount: watch('calcPlanFee'),
                buyer_name: watch('nameRep'),
                buyer_tel: watch('mobileRep').replace(/-/g, ""),
                buyer_email: email,
                m_redirect_url: process.env.REACT_APP_PAYMENT_REDIRECT
              }, callback)}
            />
          </ButtonWrap>
          {popupOpen.type === 'select' && popupOpen.state && (
            <Popup type='select' onClickYse={tourRemove} close={() => setPopupOpen((prevState) => ({
              ...prevState,
              state: false,
              type: ''
            }))}>
              <p>
                이동 시 입력하신 정보가 초기화 됩니다.<br />
                간편계산으로 이동하시겠습니까?
              </p>
            </Popup>
          )}
          {popupOpen.type === 'alert' && popupOpen.state && (
            <Popup 
              type='alert' 
              close={() => {
                setPopupOpen((prevState) => ({
                  ...prevState,
                  state: false,
                  type: ''
                }))
                navigate(`/insuroboTravel/apply/myPage`, {
                  state: {
                    type: type,
                    step: '3',
                  }
                })
              }}
            >
              <p>결제가 완료되었습니다.</p>
            </Popup>
          )}
        </>
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

