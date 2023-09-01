import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderCloseIcon from '../../assets/icon/bizSlideCloseBtn.png';
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

function BizCareModal({close}) {
  return (
  <>
    <Wrapper>
      <SliderCloseButton onClick={close}>
        <img src={sliderCloseIcon} alt='닫기' />
      </SliderCloseButton>
      <StyledSlider {...settings}>
        <Slider1 />
        <Slider2 />
        <Slider3 onClick={close} />
      </StyledSlider>
      <LastPageClose onClick={close}>CLOSE</LastPageClose>
    </Wrapper>
  </>
  );
}
export default BizCareModal;


const Wrapper = styled.div`
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
    width: 85.33333333333333%;
    height: 85%;
    margin-top: 15%;
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
      margin: 1.3vw 0.55vw 1.3vw 0;
      width: 1.04vw;
      height: 1.04vw;
      :last-child {
        margin-right: 0;
      }
      button {
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
        ::before {
          content: '';
          background-color: #F0F0F0;
          opacity: 1;
          border-radius: 50%;
          width: 0.7vw;
          height: 0.7vw;
        }
      }
    }
    .slick-active {
      button::before {
        background-color: #4575F5;
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
        top: -20%;
        margin: 1.3vw 0.55vw 1.3vw 0;
        width: 14px;
        height: 14px;
        button {
          ::before {
            width: 10px;
            height: 10px;
          }
        }
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

const SliderCloseButton = styled.button`
  position: absolute;
  top: -7%;
  right: 0;
  > img {
    width: 2.34vw;
    height: 2.34vw;
  }
  ${(props) => props.theme.window.mobile} {
    top: -30px;
    right: 0;
    > img {
      width: 24px;
      height: 24px;
    }
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
    right: 13px;
    top: 94.5%;
    bottom: 0;
    height: 5.4%;
    width: 50px;
  }
`;