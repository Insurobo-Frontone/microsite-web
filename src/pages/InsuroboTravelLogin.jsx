import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import ContentInner from "../layout/ContentInner";

const Wrap = styled.div`
  
  ${(props) => props.theme.window.mobile} {
    
  }
`;

const InsuroboTravelLogin = () => {
  const location = useLocation();
  const pageState = location.state
  useEffect(() => {
    console.log(pageState)
    window.scrollTo(0, 0);
  }, [location.search]);

  return (
    <Layout>
      <Wrap>
        <ContentInner>
          로그인
        </ContentInner>
      </Wrap>
    </Layout>
  )
}

export default InsuroboTravelLogin;

