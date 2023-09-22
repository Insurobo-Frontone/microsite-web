import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components';
import logo from '../assets/img/mainLogo.png';
import myPageIcon from '../assets/img/myPageIcon.png';
import toggleBtn from '../assets/img/toggleBtn.png';
import closeBtn from '../assets/img/closeBtn.png';
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
  > ul {
    display: flex;
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
      border: 1px solid #2EA5FF;
      border-radius: 5px;
      color: #2d2d2d;
      padding: 0 13px;
      margin-right: 20px;
    }
  }

  
`;

// const ToggleBtn = styled.div`
//   width: 28px;
//   height: ${props => props.isOpen ?  '30px' : '20px'};
//   background-image: ${props => props.isOpen ? `url(${closeBtn})` : `url(${toggleBtn})`};
//   display: none;
//   background-size: contain;
  
//   ${(props) => props.theme.window.mobile} {
//     display: block;
    
//   }
// `;

const MyPage = styled.div`
  /* background-image: url(${myPageIcon}); */
  /* width: 80px;
  height: 80px; */
  > img {
    width: 4.2vw;
  }
  ${(props) => props.theme.window.mobile} {
    display: flex;
    align-items: center;
    > img {
      width: 40px;
      height: 40px;
      margin-right: 14px;
    }
    > span {
      font-size: 17px;
    }
    
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
                      <img src={myPageIcon} alt='profile' />
                      {width < 768 && (<span>내 프로필</span>)}
                    </MyPage>
                    {myPageOpne && width > 768 && (
                      <>
                        <ModalOutLayer modalOutSideClick={modalOutSideClick} modalRef={modalRef} />
                        <Profile onClick={logout} userName={userName} />
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
                <li><Link to='/login'>로그인/회원가입</Link></li>
              )}
            </ul>
          </Menu>
          {/* <ToggleBtn onClick={handleClick} isOpen={isOpen} /> */}
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