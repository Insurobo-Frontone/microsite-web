import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';
import WindStormModal from '../components/Modal/WindStormModal';
import Profile from '../components/Auth/Profile';
import ModalOutLayer from '../components/ModalOutLayer';
import useWindowSize from '../hooks/useWindowSize';
import ContentInner from './ContentInner';

import myPageIcon from '../assets/icon/myPageIcon.png';
import myPageIconMb from '../assets/icon/myPageIconMb.png';
import logo from '../assets/img/mainLogo.png';
import logoMb from '../assets/img/mainLogoMb.png';
import openToggle from '../assets/icon/toggleBtn.png';
import closeToggle from '../assets/icon/close_toggleBtn.png';
import icon1 from '../assets/icon/menuIcon1.png';
import icon2 from '../assets/icon/menuIcon2.png';
import icon3 from '../assets/icon/menuIcon3.png';
import icon4 from '../assets/icon/menuIcon4.png';

const Wrap = styled.header`
  width: 100%;
  background-color: #FAFAFA;

  ${(props) => props.theme.window.mobile} {
    background-color: #FFFFFF;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 95px;
  ${(props) => props.theme.window.mobile} {
    height: auto;
    justify-content: space-between;
    flex-flow: row wrap;
  }

`;

const LogoBox = styled.div`
  margin-right: 64px;
  
  ${(props) => props.theme.window.mobile} {
    margin-right: 0;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Menu = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
  }
  ul {
    display: flex;
    align-items: center;
    > li {
      line-height: 46px;
      font-weight: 300;
      font-size: 18px;
      > a {
        color: #2d2d2d;
        font-weight: 300;
      } 
      :last-child {
        margin-right: 0;
      }
    }
  }
  .lnb {
    margin-right: 34px;
    > li {
      margin-right: 14px;
      padding: 0 10px;
    }
  }
  .windstorm-btn {
    > li {
      border: 1.5px solid #2EA5FF;
      border-radius: 5px;
      color: #2d2d2d;
      padding: 0 13px;
    }
  }
  .logout {
    > li {
      text-align: center;
      margin-right: 10px;
      width: 95px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    .lnb {
      display: none;
    }
    > div {
      width: 100%;
    }
    .windstorm-btn {
      width: 100%;
      display: block;
      text-align: center;
      padding: 0;
    }
    > ul {
      display: none;
    }
    
    ${props => props.isOpen && css`
      position: fixed;
      height: 100%;
      top: 54px;
      left: 0;
      z-index: 1000;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: #FFFFFF;
      ul {
        width: 100%;
        > li {
          line-height: 63px;
          font-size: 16px;
          border-top: 1px solid #F0F0F0;
          padding: 0 24px;
          > a {
            color: #2d2d2d;
            font-weight: 500;
          } 
        }
      }
      .lnb {
        display: block;
        width: 100%;
        margin-right: 0;
        
        > li {
          display: flex;
          width: 100%;
          align-items: center;
          padding: 0 24px;
        }
      }
      .logout {
        width: 100%;
        > li {
          text-align: start;
          margin-right: 0;
          width: 100%;
        }
      }
      .windstorm-btn {
        display: none;
      }
      > ul {
        display: block;
        > li {
          border-bottom: 1px solid #F0F0F0;
        }
      }
    `}
  }
  
`;

const ToggleBtn = styled.div`
  display: none;

  ${(props) => props.theme.window.mobile} {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
  }
`;


const MyPage = styled.div`
  display: flex;
  align-items: center;
  padding: 24.5px 0;
  width: 148px;
  > img {
    padding: 0 11.5px;
  }
  > p {
    font-size: 16px;
    color: #2D2D2D;
    font-weight: 500;
    margin-left: 4px;
  }

  ${(props) => props.theme.window.mobile} {
    padding: 0;
    width: 100%;
    > img {
      padding: 0;
      padding: 0 5px 0 6px;
    }
    > p {
      margin-left: 6px;
    }
  }
`;

const ListIcon = styled.div`
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: block;
    width: 24px;
    height: 24px;
    background-image: ${props => props.icon && `url(${props.icon})`};
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 6px;
  }
`;

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [myPageOpne, setMyPageOpen] = useState(false);
  const location = useLocation();
  const auth = localStorage.getItem("@access-Token");
  let navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    if (location.search === '?windstormModal=true') {
      setShowPopup(!showPopup);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('@access-Token');
    navigate('/');
    //  window.location.reload()
  }
  function goToMainPage(link) {
    navigate(link);
  }
  const handleClick = () => {
    setIsOpen(!isOpen);
    setMyPageOpen(true)
  }

  const modalOutSideClick = (e) => {
    if(modalRef.current === e.target) {
      setMyPageOpen(false);
    }
  }

  const { width } = useWindowSize();

  return (
    <>
    <Wrap>
      <ContentInner borderBottom>
        <Nav>
          <LogoBox onClick={() => goToMainPage('/')}>
            <img src={width > 767.98 ? logo : logoMb} alt='insurobo' />
          </LogoBox>
          <ToggleBtn onClick={handleClick}>
            <img src={isOpen ? closeToggle : openToggle} alt={isOpen ? '닫기' : '열기'} />
          </ToggleBtn>
          <Menu isOpen={isOpen}>
            <div>
              <ul className='lnb'>
                <li>
                  <ListIcon icon={icon1} />
                  <Link to='#'>간편보험가입</Link>
                </li>
                <li>
                  <ListIcon icon={icon2} />
                  <Link to='#'>기업경영건강검진</Link>
                </li>
                <li>
                  <ListIcon icon={icon3} />
                  <Link to='#'>제휴서비스</Link>
                </li>
                <li>
                  <ListIcon icon={icon4} />
                  <Link to='#'>회사소개</Link>
                </li>
              </ul>
              <ul className='windstorm-btn'>
                <li onClick={() => setShowPopup(true)}>
                  풍수해보험 가입확인
                </li>
              </ul>
            </div>
            {auth ? (
              <ul>
                <li>
                  <>
                    <MyPage onClick={() => setMyPageOpen(!myPageOpne)}>
                      <img src={width > 767.98 ? myPageIcon : myPageIconMb} alt='마이페이지' />
                      <p>마이페이지</p>
                    </MyPage>
                    {myPageOpne && width > 767.98 && (
                      <>
                        <ModalOutLayer modalOutSideClick={modalOutSideClick} modalRef={modalRef} />
                        <Profile onClick={logout} />
                      </>
                    )}
                    {myPageOpne && width < 767.98 && (
                      <li>
                        <Profile onClick={logout} />
                      </li>
                    )}
                  </>
                </li>
              </ul>
            ) : (
              <ul className='logout'>
                <li><Link to='/login'>로그인</Link></li>
                <li><Link to='/register'>회원가입</Link></li>
              </ul>
            )}
          </Menu>
          </Nav>
        </ContentInner>
        {showPopup && (
          <>
            <WindStormModal onClick={() => setShowPopup(!showPopup)} />
          </>
        )}
      </Wrap>
    </>
  )
}

export default Header