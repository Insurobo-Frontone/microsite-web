import React, { useState, useContext, useEffect,  } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';
import logo from '../assets/img/mainLogo.png';
import myPageIcon from '../assets/img/myPageIcon.png';
import toggleBtn from '../assets/img/toggleBtn.png';
import closeBtn from '../assets/img/closeBtn.png';
import WindStormModal from '../components/Modal/WindStormModal';
import { CommonAPI } from '../api/CommonAPI';
import useWindowSize from '../hooks/useWindowSize';
import Profile from '../components/Auth/Profile';
import UserContext from '../container/user';


const Wrap = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.2% 0;
  background-color: #FFFFFF;
  
  
  ${(props) => props.theme.window.mobile} {
    height: 80px;
  } 
`;

const Nav = styled.nav`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

 ${(props) => props.theme.window.mobile} {
    width: 85.33333333333333%;
 } 
`;

const LogoBox = styled.button`
  width: 150px;
  display: flex;
  align-items: center;
  
  ${(props) => props.theme.window.mobile} {
    width: 113px;

  }
`;

const Menu = styled.ul`
  display: flex;
  /* width: 50%; */
  justify-content: flex-end;
  align-items: center;
  position: relative;
  > li {
    margin-right: 45px;
    font-size: 1.25vw;
    cursor: pointer;
    :first-child {
      border: 1px solid #393939;
      padding: 12px 18px;
    }
    :last-child {
      margin-right: 0;
      border: none;
    }
  }
  ${(props) => props.theme.window.mobile} {
    position: relative;
    display: none;
    ${props => props.isOpen && css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 80px;
      left: 0;
      z-index : 99;
      background-color: #FFFFFF;

      > li {
        width: 85.33333333333333%;
        margin-right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #F5F5F5;
        font-size: 1.133333333333333rem;

        :first-child {
          height: 50px;
          margin: 15px 0;
        }
      }
    `}
  }
`;

const ToggleBtn = styled.div`
  width: 28px;
  height: ${props => props.isOpen ?  '30px' : '20px'};
  background-image: ${props => props.isOpen ? `url(${closeBtn})` : `url(${toggleBtn})`};
  display: none;
  background-size: contain;
  
  ${(props) => props.theme.window.mobile} {
    display: block;
    
  }
`;

const MyPage = styled.div`
  background-image: url(${myPageIcon});
  width: 80px;
  height: 80px;

  ${(props) => props.theme.window.mobile} {
    display: none;
    
  } 
`;

function Header() {
  const { width } = useWindowSize();
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [myPageOpne, setMyPageOpen] = useState(false);
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("@access-Token");

    navigate('/')

    window.location.reload()
  }
  const auth = localStorage.getItem("@access-Token");



  let navigate = useNavigate();

  function goToMainPage(link) {
    navigate(link);
    window.location.reload()
  }
  const handleClick = () => {
    setIsOpen(!isOpen);
    
  }

  return (
    <>
        <Wrap>
          <Nav>
            <LogoBox onClick={() => goToMainPage('/')}>
              <img src={logo} alt='비즈로보' />
            </LogoBox>
            <Menu isOpen={isOpen}>
              <li onClick={() => setShowPopup(true)}>
                <span>풍수해보험 가입확인</span>
              </li>
              {auth ? 
                <>
                  <li>
                    <MyPage onClick={() => setMyPageOpen(!myPageOpne)} />
                    {width > 768 ? (
                       <>
                        {myPageOpne && (
                          <Profile onClick={logout}/>
                      )}
                       </>
                    ) : (
                      <Profile onClick={logout}/>
                    )}
                   
                  </li>
                </>
              :
                <>
                  <li><Link to='/login'>로그인</Link></li>
                  <li><Link to='/register'>회원가입</Link></li>
                </>
              }
            </Menu>
            <ToggleBtn onClick={handleClick} isOpen={isOpen} />
            
          </Nav>
          
        </Wrap>
        {showPopup && (
          <WindStormModal onClick={() => setShowPopup(false)} />
        )}
  
    </>
  )
}

export default Header