import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import RollingBanner from "../components/MainPage/RollingBanner";
import ContentInner from "../layout/ContentInner";
import SelectType from "../container/InsuroboTravel/SelectType";
import { useLocation, useSearchParams } from "react-router-dom";
import Apply from "../container/InsuroboTravel/Apply";
import bg_img from '../assets/img/insuroboTravel/travelBg.png';

const Wrap = styled.div`
  padding: 180px 0 191px;
  background-image: url(${bg_img});
  background-position: 0 324px;
  ${(props) => props.theme.window.mobile} {
    
  }
`;


const InsuroboTravel = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("");
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

