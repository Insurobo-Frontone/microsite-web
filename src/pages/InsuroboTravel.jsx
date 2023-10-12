import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import bg_img from '../assets/img/travel/travelBg.png';
import RollingBanner from "../components/MainPage/RollingBanner";
import ContentInner from "../layout/ContentInner";
import SelectType from "../container/InsuroboTravel/SelectType";
import { useLocation } from "react-router-dom";
import Apply from "../container/InsuroboTravel/Apply";

const Wrap = styled.div`
  padding: 180px 0 191px;
  background-image: url(${bg_img});
  background-position: 0 324px;
  ${(props) => props.theme.window.mobile} {
    
  }
`;


const InsuroboTravel = () => {
  const location = useLocation();
  return (
    <Layout>
      <Wrap>
        <ContentInner>
          {location.pathname === '/insuroboTravel' ? (
            <SelectType />
          ) : location.pathname === '/insuroboTravel/apply' && (
            <Apply query={location.search} />
          )}
        </ContentInner>
        <RollingBanner />
      </Wrap>
    </Layout>
  )
}

export default InsuroboTravel;

