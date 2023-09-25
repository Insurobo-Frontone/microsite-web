import React from "react";
import styled from "styled-components";
import MainSlider from "./MainSlider";
import MainMenu from "./MainMenu";
import ContentInner from "../../layout/ContentInner";

const MainBannerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`;

const MainBanner = () => {
  return (
    <ContentInner>
      <MainBannerWrap>
        <MainSlider />
        <MainMenu />
      </MainBannerWrap>
    </ContentInner>
  )
};

export default MainBanner;
