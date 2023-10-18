import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Title } from '../Font';

import slider1 from '../../assets/img/slider1.png';
import slider2 from '../../assets/img/slider2.png';
import theme from '../../style/Theme';

import play from '../../assets/icon/playIcon.png';
import pause from '../../assets/icon/pauseIcon.png';

const data = [
  {
    id: 1,
    title: '소상공인 풍수해보험',
    link: '/freeApply',
    bgImg: slider1,
    className: 'slider1',
    color: 'BLUE',
  },
  {
    id: 2,
    title: '2023년 소상공인\n지원정책',
    link: '/bizsupport',
    bgImg: slider2,
    className: 'slider2',
    color: 'SKY_BLUE',
  }
];

const Wrap = styled.div`
  position: relative;
  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

const StyledSlider = styled(Slider)`
  width: 724px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.25);
`;

const Banner = styled.div`
  height: 365px;
  background-image: url(${(props) => props.bgImg});
  background-color: ${(props) => theme.color[props.color]};
  background-repeat: no-repeat;
  background-size: contain;

  &.slider1 {
    background-position: 430px 27px;
  }
  &.slider2 {
    background-position: 312px 27px;
  }
`;


const TextBox = styled.div`
  display: flex;
  height: 100%;
  padding: 0 0 114px 40px;
  flex-direction: column;
  justify-content: flex-end;
  > h1 {
    white-space: pre-wrap;
  }
  > p {
    font-size: 24px;
    color: #FFFFFF;
    text-decoration: underline;
    font-weight: 500;
    padding-top: 10px;
    cursor: pointer;
  }

`;

//재생버튼은 px로 고정해야함
const SliderPlayerGroup = styled.div`
  width: 156px;
  height: 44px;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 11px 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, .4);
  border-radius: 20px;
`;


const ButtonBox = styled.div`
  display: flex;
`;

const PauseButton = styled.button`
  width: 12px;
  height: 22px;
  background-image: url(${pause});
  background-repeat: no-repeat;
  background-size: contain;
  ${(props) => props.theme.window.mobile} {
    width: 10px;
    height: 15px;
  } 
`;

const NextArrow = styled.div`
  width: 22px;
  height: 22px;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  margin-left: 12px;
  cursor: pointer;
`;

const PrevArrow = styled.div`
   width: 22px;
  height: 22px;
  background-image: url(${play});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  margin-right: 12px;
  transform: rotate(-180deg);
  cursor: pointer;
`;

const Page = styled.h2`
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  color: #FFFFFF;
  letter-spacing: -1.1px;
`;



const Paging = ({ currentSlide, totalSlides }) => {
  return (
    <Page>{`${currentSlide + 1} / ${totalSlides}`}</Page>
  )
}

function MainSlider() {
  const [currentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  }
  const pause = () => {
    sliderRef.current.slickPause();
  };
  const previous = useCallback(() => sliderRef.current.slickPrev(), []);
  const next = useCallback(() => sliderRef.current.slickNext(), []);

  const navigate = useNavigate()
  return (
      <Wrap>
        <StyledSlider
          ref={sliderRef}
          {...settings}
        >
          {data.map((dt) => (
            <Banner 
              key={dt.id}
              color={dt.color}
              bgImg={dt.bgImg}
              className={dt.className}
            >
              <TextBox>
                <Title bold='700' color='WHITE' size='36px'>{dt.title}</Title>
                <p onClick={() => navigate(dt.link)}>자세히보기</p>
              </TextBox>
            </Banner>
          ))}
        </StyledSlider>
        <SliderPlayerGroup> 
          <ButtonBox>
            <PrevArrow onClick={previous}/>
            <PauseButton onClick={pause} />
            <NextArrow onClick={next} />
          </ButtonBox>
          <Paging currentSlide={currentSlide} totalSlides={'2'} />
        </SliderPlayerGroup>
      </Wrap>
  );
}

export default MainSlider