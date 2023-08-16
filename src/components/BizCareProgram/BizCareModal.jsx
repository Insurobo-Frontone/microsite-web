import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as CloseBtn } from '../../assets/icon/bizCarecloseButton.svg';
import mbClose from '../../assets/icon/bizSlideCloseBtn.png';
import bg1 from '../../assets/img/bizcareBg1.png';
import bg2 from '../../assets/img/bizcareBg2.png';
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
}

function BizCareModal({todayOnClose, close}) {
  return (
  <>
    <Wrapper>
      <StyledSlider {...settings}>
        <Slider1 />
        <Slider2 />
        <Slider3 onClick={close} />
      </StyledSlider>
      <TodayCloseButton onClick={todayOnClose}>
        <CloseIcon fill='#FFFFFF' onClick={close} />
        <p>다시보지 않기</p>
      </TodayCloseButton>
      <MobileCloseButton onClick={close} />
      <LastPageClose onClick={close}>CLOSE</LastPageClose>
    </Wrapper>
  </>
  );
}
export default BizCareModal;


const Wrapper = styled.div`
  position: relative;
  width: 66.7vw;
  height: 42.73vw;
  position: relative;
  display: flex;
  flex-direction: column;
  outline: 0;
  border-radius: 10px;
  box-shadow: 0 17px 38px 0 rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  background-color: #FAFAFA;
  ${(props) => props.theme.window.mobile} {
    box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.3);
  }

  
`;

const StyledSlider = styled(Slider)`
  height: 100%;
  overflow: hidden;
  background-image: url(${bg1}), url(${bg2});
  background-repeat: no-repeat;
  background-position: 99% 2%, 0% 71%;

  padding: 2.35vw 1.85vw 0;
  position: relative;

  .slick-dots {
    bottom: 0;
    left: 0;
    height: 3.65vw;
    background-color: #FFFFFF;
    border-radius:  0 0 10px 10px;
    > li {
        margin-top: 1.5vw;
        button::before {
        color: #F0F0F0;
        opacity: 1;
        border-radius: 50%;
        font-size: 0.77vw;
      }
    }
    .slick-active {
      button::before {
        color: #4575F5;
        opacity: 1;
      }
    }
    
  }
  .slick-prev {
    left: 1.83vw;
    top: 41vw;
    z-index: 99;
    width: 3.68vw;
    height: 1.57vw;
    ::before {
      content: 'BACK';
      display: inline-block;
      color: #9D9D9D;
      font-size: 1.05vw;
      font-weight: 400;
      letter-spacing: 0.5px;
      font-family: 'Noto Sans KR';
      opacity: 1;
    }
  }
  .slick-next {
    right: 1.83vw;
    top: 41vw;
    z-index: 99;
    width: 3.68vw;
    height: 1.57vw;
    background: #FFFFFF;
    ::before {
      content: 'NEXT';
      display: inline-block;
      color: #515151;
      font-size: 1.05vw;
      letter-spacing: 0.5px;
      font-family: 'Noto Sans KR';
      font-weight: 400;
      opacity: 1;
    }
  }
  .slick-arrow.slick-next.slick-disabled {
    display: none !important;
  }
  .slick-next.slick-disabled:before {
    display: none;
  }

  ${(props) => props.theme.window.mobile} {
    background-image: none;
    padding: 29px 10px 0;
    
    .slick-dots {
      height: 5.4%;
      > li {
        top: -5%;
        width: 14px;
        height: 14px;
        margin: 0;
      }
      button {
        width: 14px;
        height: 14px;
      }
      button::before {
        width: 14px;
        height: 14px;
        line-height: 14px;
        font-size: 8px;
      }
    }
    .slick-prev {
      left: 13px;
      top: 97.3%;
      height: 5.4%;
      width: 50px;
      z-index: 999;
      ::before {
        font-size: 13px;      
      }
    }
    .slick-next {
      right: 13px;
      top: 97.3%;
      height: 5.4%;
      width: 50px;
      ::before {
        font-size: 13px;
      }
    }
  }

`;

const TodayCloseButton = styled.div`
  position: absolute;
  left: 0;
  bottom: -3vw;
  display: flex;
  align-items: center;
  cursor: pointer;
  > p {
    color: #FFFFFF;
    font-size: 1.2vw;
    letter-spacing: -0.3px;
  }

  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

const CloseIcon = styled(CloseBtn)`
  margin: 0.365vw 0.68vw 0.315vw 0;
  width: 1.36vw;
  height: 1.36vw;
  font-size: 1.2vw;
`;

const MobileCloseButton = styled.button`
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: flex;
    width: 17px;
    height: 17px;
    background-image: url(${mbClose});
    background-size: contain;
    position: absolute;
    top: -25px;
    right: 0;
    background-color: transparent;
  }
`;


const LastPageClose = styled.button`
  position: absolute;
  right: 1.83vw;
  top: 40vw;
  font-size: 1.05vw;
  width: 3.68vw;
  height: 1.57vw;
  font-weight: 400;
  background: none;
  color: #515151;
  letter-spacing: 0.5px;

  ${(props) => props.theme.window.mobile} {
    font-size: 13px;
    right: 17px;
    bottom: 0px;
    height: 5.4%;
    width: 50px;
    line-height: 1;
  }
`;