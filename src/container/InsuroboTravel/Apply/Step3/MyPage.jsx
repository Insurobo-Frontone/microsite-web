import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import MyJoinInfo from "./MyJoinInfo";
import prevIcon from "../../../../assets/icon/insuJoinPrevIcon.png";
import Button from "../Button";
import { getTourList } from "../../../../api/TravelAPI";

const MyPage = () => {
  const [close, setClose] = useState(true);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();
  const type = location.state.type;

  useEffect(() => {
    getTourList().then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
      
    }).catch((e) => {
      console.log(e)
    });


  }, [open, close]);
  
  const logout = () => {
    localStorage.clear()
    navigate('/');
  }
  return (
    <MyPageWrap close={close}>
      <MyPageNav close={close}>
        {close && !open ? 
          (<span onClick={logout}>로그아웃</span>) :
         !close && open ?(
          <PrevButton onClick={() => {
            setClose(true)
            setOpen(false)
          }}>
            <span />이전
          </PrevButton>
        ) : ''}
      </MyPageNav>
      {data.length !== 0 ? (
        <MyJoinInfo 
          type={type} 
          open={open} 
          close={close}
          data={data}
          onClick={() => {
            setOpen(true)
            setClose(false)
          }}
          myPageState={() => {
            setClose(true)
            setOpen(false)
          }}
        />  
      ) : (
        <div className="notFind">
          <p>가입 내역이 없습니다.</p>
          <Button
            title='보험료 간편계산'
            onClick={() => navigate(`/insuroboTravel/apply?step=1`, {
              state: {
                type: type,
                step: '1',
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
    min-height: 625px;
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
      min-height: 526px;
    `}
  }


`;

const MyPageNav = styled.div`
  display: flex;
  height: 40px;
  justify-content: ${props => props.close ? 'flex-end' : 'flex-start'};
  align-items: center;
  margin-bottom: 50px;
  > span {
    display: inline-block;
    line-height: 1;
    font-size: 20px;
    color: #333333;
    border-bottom: 1px solid #333333;
    cursor: pointer;
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
    height: 23px;
    > span {
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
      background-size: 36.79166666666667%;
    }
  }
`;



