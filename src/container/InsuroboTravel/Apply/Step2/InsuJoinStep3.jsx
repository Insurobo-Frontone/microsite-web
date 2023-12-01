import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from 'react-hook-form';
import ApplyInfo from "../ApplyInfo";
import dbLogo from '../../../../assets/img/insuroboTravel/payMentDBLogo.png';
import useWindowSize from "../../../../hooks/useWindowSize";
import { toStringByFormatting, travelPeriod } from "../TravelDateFomat";
import { clearGetTravelMenu } from "../../../Storage/InsuTravel";
import { useContext } from "react";
import TravelPageContext from "../../../../context/travelPageContext";

const InsuJoinStep3 = ({ type }) => {
  const { watch } = useFormContext();
  const { width }  = useWindowSize();
  const { actions } = useContext(TravelPageContext)
  useEffect(() => {
    return () => {
      clearGetTravelMenu();
      actions.setOpen(false);
    }
  })
  return (
    <Wrap>
      <Board>
        <div>
          <img src={dbLogo} alt='db손해보험' />
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
          </h2>
        </div>
        <div>
          <p>결제금액</p>
          <h2>{watch('calcPlanFee')?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</h2>
        </div>
      </Board>
      <ul>
        <li>
          <h2>보험기간<p>{`(${toStringByFormatting(watch('localStart'), '.')} 부터 ~${toStringByFormatting(watch('localEnd'), '.')} 까지)`}</p></h2>
          <p>{`${travelPeriod(watch('localEnd'), watch('localStart'))}일`}</p>
        </li>
        <li>
          <h2>가입인원</h2>
          <p>1명</p>
        </li>
        <li>
          <h2>보험료</h2>
          <p>{watch('calcPlanFee')?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</p>
        </li>
      </ul>
      <ul>
        <li><ApplyInfo /></li>
      </ul>
    </Wrap>
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
    > ul {
      padding: 24px 0;
      > li {
        align-items: flex-start;
        > h2 {
          font-size: 16px;
          flex-direction: column;
          align-items: flex-start;
          > p {
            margin-left: 0;
            
          }
        }
        > p {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
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

  ${(props) => props.theme.window.mobile} {
    height: 73px;
    padding: 18px 20px;
    > div {
      flex-direction: column;
      align-items: flex-start;
      > img {
        margin: 0;
        width: 53px;
      }
      > h2 {
        font-size: 14px;
      }
      > p {
        font-size: 14px;
        margin-right: 10px;
      }
    }
    > div:last-child {
      flex-direction: row;
      align-items: center;
      > h2 {
        font-size: 18px;
      }
    }
  }
`;



