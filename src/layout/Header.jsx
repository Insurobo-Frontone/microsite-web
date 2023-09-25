import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import logo from '../assets/img/mainLogo.png';
import myPageIcon from '../assets/icon/myPageIcon.png.png';
import WindStormModal from '../components/Modal/WindStormModal';
import Profile from '../components/Auth/Profile';
import ModalOutLayer from '../components/ModalOutLayer';
import useWindowSize from '../hooks/useWindowSize';
import ContentInner from './ContentInner';

const Wrap = styled.header`
  width: 100%;
  background-color: #FAFAFA;
`;

const Nav = styled.nav`
  height: 95px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #F0F0F0;
 ${(props) => props.theme.window.mobile} {
    
 } 
`;

const LogoBox = styled.button`
  width: 155px;
  margin-right: 64px;
  ${(props) => props.theme.window.mobile} {

  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > ul {
    display: flex;
    align-items: center;
    > li {
      padding: 0 10px;
      line-height: 46px;
      margin-right: 14px;
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
    .border-btn {
      border: 1.5px solid #2EA5FF;
      border-radius: 5px;
      color: #2d2d2d;
      padding: 0 13px;
      margin-right: 20px;
    }
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
`;


function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [myPageOpne, setMyPageOpen] = useState(false);
  const location = useLocation();
  const auth = localStorage.getItem("@access-Token");
  const userName = localStorage.getItem("@userName");
  let navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    if (location.search === '?windstormModal=true') {
      setShowPopup(!showPopup);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('@userName');
    localStorage.removeItem('@access-Token');
    navigate('/')
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
      setMyPageOpen(false)
    }
  }

  const { width } = useWindowSize();

  return (
    <>
    <Wrap>
      <ContentInner>
        <Nav>
          <LogoBox onClick={() => goToMainPage('/')}>
            <img src={logo} alt='비즈로보' />
          </LogoBox>
          <Menu>
            <ul>
              <li><Link to='#'>간편보험가입</Link></li>
              <li><Link to='#'>기업경영건강검진</Link></li>
              <li><Link to='#'>제휴서비스</Link></li>
              <li><Link to='#'>회사소개</Link></li>
            </ul>
            <ul>
              <li onClick={() => setShowPopup(true)} className='border-btn'>
                풍수해보험 가입확인
              </li>
              {auth ? (
                <li>
                  <>
                    <MyPage onClick={() => setMyPageOpen(!myPageOpne)}>
                      <img src={myPageIcon} alt='마이페이지' />
                      <p>마이페이지</p>
                    </MyPage>
                    {myPageOpne && width > 768 && (
                      <>
                        <ModalOutLayer modalOutSideClick={modalOutSideClick} modalRef={modalRef} />
                        <Profile onClick={logout} />
                      </>
                    )}
                    {myPageOpne && width < 768 && (
                      <li>
                        <Profile onClick={logout} userName={userName} />
                      </li>
                    )}
                  </>
                </li>
              ) : (
                <>
                  <li><Link to='/login'>로그인</Link></li>
                  <li><Link to='/register'>회원가입</Link></li>
                </>
              )}
            </ul>
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