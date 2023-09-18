import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import BizCareModal from '../components/BizCareProgram/BizCareModal';
import insuroboWindstormIcon from '../assets/icon/go_to_insurobowindstorm_icon.png';
import companyIcon from '../assets/icon/go_to_company_icon.png';
import bizcareIcon from '../assets/icon/open_bizcare_icon.png';
import toggleIcon from '../assets/icon/toggle_icon.png';

const QuickMenuWrap = styled.div`
  width: 5.313vw;
  z-index: 999;
  right: 2%;
  bottom: 15%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.20);
  background-color: #FFFFFF;
  padding: 2.1vw 0;

  ${(props) => props.theme.window.tab} {
    padding: 20px 0;
    width: 72px;
  }
  ${(props) => props.theme.window.mobile} {
    padding: 120px 0 0 0;
    overflow: hidden;
    transition: padding 0.2s;
    right: 2%;
    bottom: 13%;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    ${(props) => props.open && css`
      padding: 92px 0 20px;
      border-radius: 50px;
      box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.20);
      background-color: #FFFFFF;
      overflow: visible;
    `}
  }
`;

const ToggleWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const ToggleText = styled.p`
  display: none;
  color: #176FFF;
  font-weight: 700;
  &.white {
    color: #FFFFFF;
  }
  ${(props) => props.theme.window.mobile} {
    display: block;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    
    ${(props) => props.open && css`
      position: absolute;
      left: 0;
      top: -30px;
    `}
  }
`;

const ToggleIcon = styled.div`
  display: none;
  ${(props) => props.theme.window.mobile} {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 100%;
    left: 0;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
  }
`;

const QuickMenuListWrap = styled.div`
  
  ${(props) => props.theme.window.mobile} {
    height: 0;
    
    ${props => props.open && css`
      height: auto;
    `}
  }
`;

const QuickMenuList = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.57vw;
 
  :last-child {
    margin-bottom: 0px;
  }
  img {
    display: block;
    margin: 0 auto;
  }
  > a {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    
  }
  ${(props) => props.theme.window.tab} {
    margin-bottom: 20px;
  }
`;

const TextWrap = styled.div`
  padding-top: 0.417vw;
  > span {
    display: block;
    font-size: 0.73vw;
    text-align: center;
    color: #176FFF;
    font-weight: 700;
    line-height: 129%;
  }
  > p {
    font-size: 0.6775vw;
    text-align: center;
    color: #176FFF;
    font-weight: 400;
    line-height: 100%;
  }

  ${(props) => props.theme.window.mobile} {
    padding-top: 8px;
    > span {
      font-size: 13px;
    }
    > p {
      font-size: 10px;
      line-height: 1.3;
    }
  }
`;




const EventModalOverlay = styled.div`
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;

  ${props => props.open && css`
    display: flex;
  `}
`;



function QuickMenu({quickScrollY}) {
  const [showPopup, setShowPopup] = useState(false);
  const [toggleOn, setToggleOn] = useState(true);
  const [leave, Setleave] = useState(0);
  const colorRef = useRef(null);
  const mainBannerPosition = () => {
    Setleave(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', mainBannerPosition);
  }, [])

  const onClose = () => {
    setShowPopup(false);
  }
  
  return (
    <>
      <QuickMenuWrap open={toggleOn}>
        <ToggleWrap onClick={() => setToggleOn(!toggleOn)}>
          <ToggleText 
            open={toggleOn}
            className={leave < quickScrollY ? 'white' : ''}
            ref={colorRef}
          >
            {toggleOn ? '접어두기' : '펼처보기'}</ToggleText>
          <ToggleIcon>
            <img src={toggleIcon} alt='toggle'/>
          </ToggleIcon>
        </ToggleWrap>
        <QuickMenuListWrap open={toggleOn}>
          <QuickMenuList>
            <a href='https://insurobowindstorm.com/' target='_blank' rel="noreferrer">
              <img src={insuroboWindstormIcon} alt='상품 보러가기'/>
              <TextWrap>
                <span>인슈로보</span>
                <p>상품 보러가기</p>
              </TextWrap>
            </a>
          </QuickMenuList>
          <QuickMenuList>
            <a href='https://company.insurobo.co.kr/' target='_blank' rel="noreferrer">
              <img src={companyIcon} alt='회사소개'/>
              <TextWrap>
                <span>인슈로보</span>
                <p>회사소개</p>
              </TextWrap>
            </a>
          </QuickMenuList>
          <QuickMenuList>
            <div onClick={()=> setShowPopup(true)}>
              <img src={bizcareIcon} alt='비즈케어'/>
                <TextWrap>
                  <span>인슈로보</span>
                  <p>비즈케어</p>
                </TextWrap>
            </div>
          </QuickMenuList>
        </QuickMenuListWrap>
        
      </QuickMenuWrap>
      <EventModalOverlay open={showPopup}>
        <BizCareModal
          close={onClose}
        />
      </EventModalOverlay>
    </>
  )
}

export default QuickMenu;

