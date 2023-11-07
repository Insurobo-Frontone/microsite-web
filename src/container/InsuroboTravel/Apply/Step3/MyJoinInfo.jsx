import React from "react";
import { useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";
import TravelTerm from "../TravelTerm";
import dbLogo from '../../../../assets/img/insuroboTravel/payMentDBLogo.png';
import ApplyInfo from "../ApplyInfo";
import Button from "../Button";
import useWindowSize from "../../../../hooks/useWindowSize";
import nextIcon from "../../../../assets/icon/insuJoinNextIcon.png";
import { useState } from "react";
import Popup from "../Popup";
import TargetPlanResult from "../Local/Step1/TargetPlanResult";

const MyJoinInfo = ({ open, close, onClick, type, status }) => {
  const { watch } = useFormContext();
  const { width } = useWindowSize(); 
  const [popupOpen, setPopupOpen] = useState(false);
  const [planPopup, setPlanPopup] = useState(false);

  return (
    <>
      <BoxWrap open={open} close={close}>
        <div>
          <div>
            <div>
              {open && <img src={dbLogo} alt='db손해보험' />}
              <h2>
                {width > 767.98 ? (
                  <>
                    {type === 'local' ?  "국내 여행자 보험" : '해외 여행자 보험'}
                  </>
                ) : (
                  <>
                    {type === 'local' ?  "국내여행자보험" : '해외여행자보험'}
                  </>
                )}
                <span>({watch('target')})</span>
              </h2>
            </div>
            <div>
              <TravelTerm type2 />
              <span onClick={open ? () => setPlanPopup(true) : onClick}>{open ? '보장내용 확인' : '자세히보기'}</span>
            </div>
            {open && width > 767.98 && (
              <div>
                <p>{watch('calcPlan') === 'planA' ? '5,420' : '1,280'}원</p>
              </div>
            )}
          </div>
          <PaymentStatus status={status}>
            {status === 'finish' ? '가입완료' : '결제전'}
          </PaymentStatus>
        </div>
        {open && (
          <div>
            <ApplyInfo type={type} joinUserInfo />
            <div>
              <p>결제금액</p>
              <h2>{watch('calcPlan') === 'planA' ? '5,420' : '1,280'}원</h2>
            </div>
          </div>
        )}
      </BoxWrap>
      {open && (
        <ButtonWrap>
          {status === 'finish' ? (
            <> 
              <Button
                title={width > 767.98 ? '가입증명서 재발행' : '가입증명서 발행'}
              />
              <Button
                title={width > 767.98 ? '보험금청구서류 이메일로 받기' : '보험금청구 서류'}
              />
            </>
          ) : (
            <> 
              <Button
                type='cancel'
                title='신청취소'
                onClick={() => setPopupOpen(true)}
              />
              <Button
                title='결제하기'
              />
            </>
          )}
        </ButtonWrap>
      )}
      {popupOpen && (
        <Popup type='select' close={() => setPopupOpen(false)}>
          <p>신청내역을 취소하시겠습니까?</p>
        </Popup>
      )}
      {planPopup && (
        <Popup type='info' close={() => setPlanPopup(false)}>
          <h2 className="close-header">든든플랜 <span onClick={() => setPlanPopup(false)}/></h2>
          <TargetPlanResult type='popup' />
        </Popup>
      )}
    </>
  )
}

export default MyJoinInfo;

const BoxWrap = styled.div`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  > div:first-child {
    display: flex;
    justify-content: space-between;
    padding: 40px 40px 50px;
    > div {
      > div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        :last-child {
          margin-bottom: 0;
        }
        > span {
          display: inline-block;
          color: #176FFF;
          line-height: 1;
          font-size: 20px;
          font-weight: 300;
          margin-left: 24px;
          border-bottom: 1px solid #176FFF;
        }
        > img {
          width: 129px;
          margin-right: 20px;
        }
        > p {
          font-size: 20px;
          color: #333333;
        }
      }
    }
  }
  > div:nth-child(2) {
    padding: 50px 40px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-top: 1px solid #F0F0F0;
    > div:last-child {
      display: flex;
      align-items: center;
      > p {
        color: #333333;
        font-weight: 700;
        margin-right: 20px;
        font-size: 20px;
      }
      > h2 {
        color: #2EA5FF;
        font-size: 28px;
      }
    }
  }
  ${props => props.close && css`
    height: 164px;
  `}
  ${props => props.open && css`
    height: auto;

  `}

  ${(props) => props.theme.window.mobile} {
    > div:first-child {
      padding: 16px 20px 16px;
      > div {
        > div {
          margin-bottom: 4px;
          > span {
            font-size: 14px;
            margin-left: 0;
          }
          > h2 {
            font-size: 16px;
          }
          > img {
            display: none;
          }
          > p {
            font-size: 14px;
          }
        }
      }
    }
    ${props => props.close && css`
      height: 113px;
      > div:first-child {
        flex-direction: column;
        > div:first-child {
          order: 1;
        }
        > div {
          position: relative;
          > div:first-child {
            padding-top: 10px;
          }
          > div {
            justify-content: space-between;
            > span {
              width: 24px;
              height: 24px;
              color: transparent;
              overflow: hidden;
              border: none;
              background-image: url(${nextIcon});
              background-repeat: no-repeat;
              background-position: center;
              position: absolute;
              top: 4px;
              right: 0;
            }
          }
        }
      }
    `}
    ${props => props.open && css`
      height: auto;
      border-radius: 0;
      box-shadow: none ;
      > div:first-child {
        padding: 0 0 24px 0;
        > div {
          > div:nth-child(2) {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 54px;
          }
          > div {
            > span {
              padding-top: 10px;
            }
            > h2 {
              font-size: 16px;
            }
            > img {
              display: none;
            }
            > p {
              font-size: 14px;
            }
          }
        }
      }
      > div:nth-child(2) { 
        padding: 24px 0;
        position: relative;
        > div:last-child {
          display: flex;
          align-items: center;
          position: absolute;
          top: -50px;
          > p {
            margin-right: 10px;
            font-size: 14px;
          }
          > h2 {
            font-size: 18px;
          }
        }
      }
    `}
  }
`;

const PaymentStatus = styled.div`
  width: 98px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  ${props => props.status === 'ready' && css`
    border: 1px solid #FF2C2C;
    color: #FF2C2C;
  `}

  ${props => props.status === 'finish' && css`
    background-color: #E9F6FF;
    color: #2EA5FF;
  `}

  ${(props) => props.theme.window.mobile} {
    width: 50px;
    height: 24px;
    font-size: 12px;
    border-radius: 5px;
    line-height: 24px;
  }
`;

const ButtonWrap = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  > button {
    width: 49.29718875502008%;
  }
  ${(props) => props.theme.window.mobile} {
    padding: 0;
    > button {
      width: 48.3974358974359%;
    }
  }
`;


