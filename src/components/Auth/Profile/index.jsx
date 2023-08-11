import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import myPageIcon from '../../../assets/img/myPageIcon.png';
import { Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";

const MyPageNav = styled.ul`
  position: absolute;
  width: 23.45vw;
  height: 18.8vw;
  background-color: #FFFFFF;
  top: 100%;
  right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    position: relative;
    margin: 0 25px;
    border-bottom: 1px solid #F5F5F5;
    :last-child {
      border: none;
    }
    > p {
      font-size: 1.2vw;
    }
    > img {
      position: absolute;
      left: 0;
      width: 4.2vw;
    }
  }

  ${(props) => props.theme.window.mobile} {
    top: 160px;
    width: 100%;
    height: 100%;
    > li {
      height: 80px;
      border: 0;
      width: 120px;
      margin: 0 auto;
      justify-content: center;
      > p {
        font-size: 17px;
      }
      > img {
        width: 40px;
        height: 40px;
        position: static;
        margin-right: 14px;
      }
    }
  }  
`;
const Profile = ({onClick, userName}) => {
  return (
    <MyPageNav>
      <li>
        <img src={myPageIcon} alt='프로필'/>
          <p>{userName}</p>
      </li>
      <li>
        <p><Link to='/myProfile'>프로필 수정</Link></p>
      </li>
      <li>
        <p onClick={onClick}>로그아웃</p>
      </li>
    </MyPageNav>
  )
}

export default Profile;