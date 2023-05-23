import React from "react";
import styled from "styled-components";
import myPageIcon from '../../../assets/img/myPageIcon.png';
import { Link } from "react-router-dom";

// const Wrap = styled.div`
//   position: fixed;
//   position: fixed;
//    top: 0;
//    left: 0;
//    right: 0;
//    bottom: 0;
//    background: rgba(0,0,0,0.3);
//    z-index: 9;
// `;

const MyPageNav = styled.ul`
  position: absolute;
  width: 450px;
  height: 360px;
  background-color: #FFFFFF;
  top: 100%;
  left: 0%;
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
      font-size: 1.15rem;
    }
    > img {
      position: absolute;
      left: 0;
    }
  }

  ${(props) => props.theme.window.mobile} {
    top: 80px;
    width: 100%;
    > li {
      height: 80px;
      > p {
      
      }
      > img {
        width: 40px;
        height: 40px;
        left: 23%;
      }
    }
  }  
`;
const Profile = ({onClick, userName}) => {
  // const { state } = useContext(UserContext)
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