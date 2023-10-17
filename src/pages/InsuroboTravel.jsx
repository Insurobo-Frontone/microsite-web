import React from "react";
import styled, { css } from "styled-components";
import Layout from "../layout";
import RollingBanner from "../components/MainPage/RollingBanner";
import ContentInner from "../layout/ContentInner";
import SelectType from "../container/InsuroboTravel/SelectType";
import { useLocation, useSearchParams } from "react-router-dom";
import Apply from "../container/InsuroboTravel/Apply";
import bg_img from '../assets/img/insuroboTravel/travelBg.png';

const Wrap = styled.div`
  background-image: url(${bg_img});
  background-repeat: no-repeat;
  background-position: 50% -126px;
  padding: 189px 0 181px;
  ${props => props.apply && css`
    padding: 60px 0 70px;
  `}
  ${(props) => props.theme.window.mobile} {
    
  }
`;


const InsuroboTravel = ({ apply }) => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  
  return (
    <Layout>
      <Wrap apply={apply}>
        <ContentInner>
          {location.pathname === '/insuroboTravel' ? (
            <SelectType />
          ) : location.pathname === '/insuroboTravel/apply' && (
            <Apply query={type} />
          )}
        </ContentInner>
        <RollingBanner />
      </Wrap>
    </Layout>
  )
}

export default InsuroboTravel;

