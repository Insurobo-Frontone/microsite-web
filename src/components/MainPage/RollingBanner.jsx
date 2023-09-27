import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon1 from '../../assets/icon/Syringe_perspective_matte.png';
import icon2 from '../../assets/icon/Gamepad_perspective_matte.png';
import icon3 from '../../assets/icon/Fingerprint_perspective_matte.png';
import icon4 from '../../assets/icon/Fire_perspective_matte.png';
import icon5 from '../../assets/icon/Gym_perspective_matte.png';
import icon6 from '../../assets/icon/Shop_perspective_matte.png';
import icon7 from '../../assets/icon/Heart_rate_perspective_matte.png';
import ContentInner from "../../layout/ContentInner";

const product = [
  {
    id: 1,
    title: '약 중독보험',
    icon: icon1,
  },
  {
    id: 2,
    title: '게임 중독 보험',
    icon: icon2,
  },
  {
    id: 3,
    title: '개인정보보호 배상책임보험',
    icon: icon3,
  },
  {
    id: 4,
    title: '주택 화재보험',
    icon: icon4,
  },
  {
    id: 5,
    title: '원데이 스포츠보험',
    icon: icon5,
  },
  {
    id: 6,
    title: '재난배상 책임보험',
    icon: icon6,
  },
  {
    id: 7,
    title: '가스사고배상책임보험',
    icon: icon7,
  },
];

const settings = {
  speed: 1000,
  variableWidth: true,
  autoplay: true,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
}

const RollingBannerWrap = styled.div`
  width: 100%;
  height: 54px;
  border-radius: 15px;
  padding: 0 20px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  ${(props) => props.theme.window.mobile} {
    height: 44px;
  }
`;

const StyledSlider = styled(Slider)`
  
`;

const Item = styled.div`
  margin-right: 20px;
  > div {
    display: flex;
    align-items: center;
    height: 54px;
    > img {
      margin-right: 10px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      height: 44px;
      > img {
        margin-right: 9px;
      }
      > p {
        font-size: 14px;
      }
    }
  }
`;

const RollingBanner = () => {
  return (
    <ContentInner>
      <RollingBannerWrap>
        <StyledSlider {...settings}>
          {product.map((item) => (
            <Item key={item.id}>
              <div>
                <img src={item.icon} alt={item.title}/>
                <p>{item.title}</p>
              </div>
            </Item>
          ))}
        </StyledSlider>
      </RollingBannerWrap>
    </ContentInner>
  );
};

export default RollingBanner;
