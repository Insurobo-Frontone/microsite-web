import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Community from '../components/MainPage/Community';
import FinanceGoods from '../components/MainPage/FinanceGoods';
import Infomation from '../components/MainPage/Infomation';
import MainSlider from '../components/MainPage/MainSlider';
import Plaza from '../components/MainPage/Plaza';
import TaxReturn from '../components/MainPage/TaxReturn';
import useWindowSize from '../hooks/useWindowSize';
import Layout from '../layout/index';
// import BizCareModal from '../components/BizCareProgram/BizCareModal';

function Home() {
  const { width } = useWindowSize();

  // 비즈케어 프로그램 팝업
  const [showPopup, setShowPopup] = useState(false);
  const BizPopupNotShow = localStorage.getItem("BizPopupNotShow");
  const currentTime = Math.floor(new Date().getTime());

  useEffect(() => {
    if (!BizPopupNotShow) {   
      setShowPopup(true);
    }
    if (Number(BizPopupNotShow) > currentTime)  return;
    if (Number(BizPopupNotShow) < currentTime) {  
      setShowPopup(true);
    }
  }, []);

  const onClose = () => {
    setShowPopup(false);
  }
  const handleClickClose = () => {
    const expire = Date.now() + 43200000;
    const objString = JSON.stringify(expire);
    localStorage.setItem("BizPopupNotShow", objString); 
    setShowPopup(false);
  };

  return (
    <>
      {/* <EventModalOverlay open={showPopup}>
        <BizCareModal
          todayOnClose={handleClickClose}
          close={onClose}
        />
      </EventModalOverlay> */}
      <Layout>
        <MainSlider />
        <Plaza scrollY={width > 700 ? 0 : 0} />
        <Infomation 
          scrollY1={width > 768 ? 0 : 0}
          scrollY2={width > 768 ? 0 : 0}
        />
        <Community />
        <TaxReturn />
        <FinanceGoods />
      </Layout>
    </>
  )
}

export default Home;

const EventModalOverlay = styled.div`
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: none;

  ${props => props.open && css`
    display: flex;
  `}

  ${(props) => props.theme.window.tab} {
    flex-direction: column;

  }
`;