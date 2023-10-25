import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import MyJoinInfo from "./MyJoinInfo";
import prevIcon from "../../../../assets/icon/insuJoinPrevIcon.png";

const MyPage = () => {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const type = location.state.type
  const pageState =  location.state;
  useEffect(() => {
    console.log(pageState)
  }, []);

  return (
    <MyPageWrap>
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
      {/* <div className="notFind">
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
      </div> */}
    </MyPageWrap>
  );
}
 
export default MyPage;

const MyPageWrap = styled.div`
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
    border-bottom: 1px solid #333333;
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
`;



