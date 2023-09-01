import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import BizCareModal from '../components/BizCareProgram/BizCareModal';
import insuroboWindstormIcon from '../assets/icon/go_to_insurobowindstorm_icon.png';
import companyIcon from '../assets/icon/go_to_company_icon.png';
import bizcareIcon from '../assets/icon/open_bizcare_icon.png';

const QuickMenuWrap = styled.ul`
  z-index: 999;
  right: 3.125vw;
  bottom: 6vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 5.313vw;
  border-radius: 50px;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.20);
  background-color: #FFFFFF;
  padding: 2.1vw 0;
  ${(props) => props.theme.window.tab} {
    padding: 30px 0;
    width: 76px;
  }
`;

const QuickMenuList = styled.li`
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
    width: 1.88vw;
    height: 1.88vw;
  }
  > a {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    
  }
  ${(props) => props.theme.window.tab} {
    margin-bottom: 22px;
    img {
      width: 27px;
      height: 27px;
    }
    
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
    line-height: 100%;
  }

  ${(props) => props.theme.window.tab} {

    > span {
      font-size: 10px;
    }
    > p {
      font-size: 10px;
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

function QuickMenu() {
  const [showPopup, setShowPopup] = useState(false);

  const onClose = () => {
    setShowPopup(false);
  }
  return (
    <>
      <QuickMenuWrap>
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
          <a href='https://insurobo.com/' target='_blank' rel="noreferrer">
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

