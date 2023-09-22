import React from "react";
import styled from "styled-components";
import MainSlider from "./MainSlider";
import MainMenu from "./MainMenu";

const MainBannerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const MainBanner = () => {
  return (
    <MainBannerWrap>
      <MainSlider />
      <MainMenu />
    </MainBannerWrap>
  )
}

export default MainBanner;
