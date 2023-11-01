import React from "react";
import styled from "styled-components";
import { useFormContext } from 'react-hook-form';
import ApplyInfo from "../ApplyInfo";
import dbLogo from '../../../../assets/img/insuroboTravel/payMentDBLogo.png';
import TravelTerm from "../TravelTerm";

const InsuJoinStep3 = ({ type }) => {
  const { watch } = useFormContext();

  return (
    <>
      <Wrap>
        <Board>
          <div>
            <img src={dbLogo} alt='db손해보험' />
            <h2>{type === 'local' ? '국내 여행자 보험' : '해외 여행자 보험'}</h2>
          </div>
          <div>
            <p>결제금액</p>
            <h2>{watch('calcPlan') === 'planA' ? '5,420' : '1,280'}원</h2>
          </div>
        </Board>
        <ul>
          <li>
            <h2>보험기간<TravelTerm type1 /></h2>
            <TravelTerm type3 />
          </li>
          <li>
            <h2>가입인원</h2>
            <p>{watch('personType')}명</p>
          </li>
          <li>
            <h2>보험료</h2>
            <p>{watch('calcPlan') === 'planA' ? '5,420' : '1,280'}원</p>
          </li>
        </ul>
        <ul>
          <li><ApplyInfo type={type} joinUserInfo /></li>
        </ul>
      </Wrap>
    </>
  )
}

export default InsuJoinStep3;


const Wrap = styled.div`
  padding-top: 54px;
  > ul {
    padding: 50px 40px;
    border-bottom: 1px solid #F0F0F0;
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      :last-child {
        margin-bottom: 0;
      }
      > h2 {
        display: flex;
        align-items: center;
        > p {
          margin-left: 10px;
        }
      }
      > p {
        font-size: 20px;
        color: #333333;
        font-weight: 300;
      }
    }
  }
  > ul:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  ${(props) => props.theme.window.mobile} {
    padding-top: 24px;
  }
`;

const Board = styled.div`
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
    
    > img, p {
     margin-right: 20px;
    }
    > p {
      color: #333333;
      font-weight: 700;
      font-size: 20px;
    }
  }
  > div:last-child {
    > h2 {
      color: #2EA5FF;
      font-size: 28px;
    }
  }
`;



