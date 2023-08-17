import React from "react";
import Iframe from 'react-iframe';
import styled from "styled-components";
import Layout from "../layout";

const InsuroboCard = () => {
  return (
    <Layout>
      <Wrap>
        <Iframe
          url="https://www.shinhancard.com/pconts/html/landing/insurobo_card.html"
          className="iframe"
          scrolling="no"
        />
      </Wrap>
    </Layout>
  )
}

export default InsuroboCard;

const Wrap = styled.div`
  
  width: 100%;
  height: 990px;


  .iframe {
    width: 100%;
    height: 100%;
    display: block;
    

  }

  ${(props) => props.theme.window.iframe} {
    height: 1437px;

  }
`;

