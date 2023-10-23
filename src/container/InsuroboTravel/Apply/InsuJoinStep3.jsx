import React from "react";
import styled from "styled-components";
import dbLogo from '../../../assets/img/insuroboTravel/payMentDBLogo.png';

const InsuJoinStep3 = ({ type }) => {
  

  return (
    <PaymentInfo>
      <InfoMainBox>
        <div>
          <img src={dbLogo} alt='db손해보험' />
          <h2>국내 여행자 보험</h2>
        </div>
        <div>
          <p>결제금액</p><span>5,420원</span>
        </div>

      </InfoMainBox>
    </PaymentInfo>
  )
}

export default InsuJoinStep3;


const PaymentInfo = styled.div`
  padding-top: 54px;
`;

const InfoMainBox = styled.div`
  width: 100%;
  height: 114px;
  border-radius: 15px;
  padding: 30px 40px;
  box-shadow:0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    > h2 {
      
    }
  }
`;



