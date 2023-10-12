import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import icon1 from '../../assets/icon/Money_perspective_matte.png';
import icon2 from '../../assets/icon/User_perspective_matte.png';
import icon3 from '../../assets/icon/Building_perspective_matte.png';
import icon4 from '../../assets/icon/Fingerprint_perspective_matte.png';
import icon5 from '../../assets/icon/Fire_perspective_matte.png';
import icon6 from '../../assets/icon/Gym_perspective_matte.png';
import icon7 from '../../assets/icon/Shop_perspective_matte.png';
import icon8 from '../../assets/icon/Database_perspective_matte.png';

import ContentInner from "../../layout/ContentInner";

const product = [
  {
    id: 1,
    title: '대출안심 보장보험',
    icon: icon1,
  },
  {
    id: 2,
    title: '시민안전보험',
    icon: icon2,
  },
  {
    id: 3,
    title: '다중이용시설 배상책임보험',
    icon: icon3,
  },
  {
    id: 4,
    title: '개인정보보호 배상책임보험',
    icon: icon4,
  },
  {
    id: 5,
    title: '주택 화재보험',
    icon: icon5,
  },
  {
    id: 6,
    title: '원데이 스포츠보험',
    icon: icon6,
  },
  {
    id: 7,
    title: '재난배상 책임보험',
    icon: icon7,
  },
  {
    id: 8,
    title: '가스사고배상책임보험',
    icon: icon8
  }
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
      breakpoint: 767.98,
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
  padding-left: 20px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  background-color: #FFFFFF;
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
      width: 30px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    margin-right: 10px;
    > div {
      height: 44px;
      > img {
        margin-right: 6px;
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
