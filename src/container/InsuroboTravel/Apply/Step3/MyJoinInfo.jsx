import React from "react";
import { useFormContext } from "react-hook-form";
import styled, { css } from "styled-components";
import TravelTerm from "../TravelTerm";
import dbLogo from '../../../../assets/img/insuroboTravel/payMentDBLogo.png';
import ApplyInfo from "../ApplyInfo";
import RadioInput from "../../Input/RadioInput";
import Button from "../Button";

const MyJoinInfo = ({ open, close, onClick, type, status }) => {
  const { watch } = useFormContext();
  const readyButtonData = [
    {
      id: '1',
      title: '신청취소',
      value: 'cancel'
    },
    {
      id: '2',
      title: '결제하기',
      value: 'payment'
    }
  ];
  const finishButtonData = [
    {
      id: '1',
      title: '가입증명서 재발행',
      onClick: ''
    },
    {
      id: '2',
      title: '보험청구서 이메일로 받기',
      onClick: ''
    }
  ];

  return (
    <>
      <BoxWrap open={open} close={close}>
        <div>
          <div>
            <div>
              {open && <img src={dbLogo} alt='db손해보험' />}
              <h2>{type === 'local' ? '국내 여행자 보험' : '해외 여행자 보험'}<span>({watch('target')})</span></h2>
            </div>
            <div>
              <TravelTerm type2 />
              <span onClick={onClick}>{open ? '보장내용 확인' : '자세히보기'}</span>
            </div>
            {open && (
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
      <ButtonWrap>
        {status === 'finish' ? 
          finishButtonData.map((dt) => (
            <div key={dt.id}>
              <Button
                title={dt.title}
              />
            </div>
          )) : 
          <RadioInput
            myPage
            data={readyButtonData}
            name='paymentReady'
            defaultValue='payment'
          />
        }
      </ButtonWrap>
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
    height: 453px;
  `}
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
`;

const ButtonWrap = styled.div`
  padding: 20px 0;
  display: flex;

  justify-content: space-between;
  > div {
    width: 100%;
  }
  button {
    width: 495px;
  }
`;


