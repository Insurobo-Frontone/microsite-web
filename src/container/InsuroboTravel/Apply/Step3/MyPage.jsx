import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MyJoinInfo from "./MyJoinInfo";
import prevIcon from "../../../../assets/icon/insuJoinPrevIcon.png";
import Button from "../Button";
import { getTravelMenu } from "../../../Storage/InsuTravel";

const MyPage = () => {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state.type;
  const pageInfo =  getTravelMenu();

  return (
    <MyPageWrap close={close}>
      <MyPageNav close={close}>
        {close && !open ? 
          (<Link to='#'>로그아웃</Link>) :
         !close && open ?(
          <PrevButton onClick={() => {
            setClose(true)
            setOpen(false)
          }}>
            <span />이전
          </PrevButton>
        ) : ''}
      </MyPageNav>
      {/* 백앤드 연결후 로그인 user 불러오기 */}
      {pageInfo.getLocation.state?.join === '3' ? (
        <MyJoinInfo 
          type={type} 
          open={open} 
          close={close}
          onClick={() => {
            setOpen(true)
            setClose(false)
          }}
          status='ready'
        /> 
      ) : (
        <div className="notFind">
          <p>가입 내역이 없습니다.</p>
          <Button
            title='보험료 간편계산'
            onClick={() => navigate(`/insuroboTravel/apply?step=1`, {
              state: {
                type: type,
                step: 1,
                join: ''
              }
            })}
          />
        </div>
      )}
    </MyPageWrap>
  );
}
 
export default MyPage;

const MyPageWrap = styled.div`
  /* 가입내역 없을경우 */
  > .notFind {
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
      padding: 157px 0 287px;
      font-size: 20px;
      font-weight: 300;
    }
    > button {
      width: 495px;
    }
  }
  ${props => props.close && css`
    height: 625px;
  `}

  ${(props) => props.theme.window.mobile} {
    > .notFind {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      > p {
        padding: 151px 0 246px;
        font-size: 16px;
        font-weight: 400;
      }
      > button {
        width: 100%;
      }
    }

    ${props => props.close && css`
      height: 526px;
    `}


  }


`;

const MyPageNav = styled.div`
  display: flex;
  height: 40px;
  justify-content: ${props => props.close ? 'flex-end' : 'flex-start'};
  align-items: center;
  margin-bottom: 50px;
  > a {
    display: inline-block;
    line-height: 1;
    font-size: 20px;
    color: #333333;
    border-bottom: 1px solid #333333;
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
    > a {
      font-size: 16px;
    }
  }
`;

const PrevButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #333333;
  > span {
    display: inline-block;
    width: 36px;
    height: 36px;
    background-image: url(${prevIcon});
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 4px;
  }

  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    > span {
      width: 24px;
      height: 24px;
    }
  }
`;



