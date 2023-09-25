import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const MyPageNav = styled.ul`
  width: 148px;
  position: absolute;
  background-color: #FFFFFF;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  > li {
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2D2D2D;
    font-size: 16px;
    font-weight: 500;
  }
  > li:first-child {
    border-bottom: 1px solid #F0F0F0;
    
  }
`;

const Profile = ({ onClick }) => {
  return (
    <MyPageNav>
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