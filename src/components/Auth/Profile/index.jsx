import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const MyPageNav = styled.div`
  width: 148px;
  position: absolute;
  background-color: #FFFFFF;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  z-index: 1000;
  top: 96px;
  > p, a {
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2D2D2D;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
  > p:first-child {
    border-bottom: 1px solid #F0F0F0;
  }

  ${(props) => props.theme.window.mobile} {
    left: 0;
    top: 61px;
    box-shadow: none;
    width: 100%;
    > p {
      padding: 0 24px;
    }
    > p , a {
      justify-content: flex-start;
      font-size: 14px;
      font-weight: 300;
      height: 60px;
    }
    > p:first-child {
      border-bottom: none;
      border-top: 1px solid #F0F0F0;
    }
    > p:last-child {
      border-bottom: 1px solid #F0F0F0;
    }
  }
`;

const Profile = ({ onClick }) => {
  return (
    <MyPageNav>
      <p><Link to='/myProfile'>프로필 수정</Link></p>
      <p onClick={onClick}>로그아웃</p>
    </MyPageNav>
  )
}

export default Profile;