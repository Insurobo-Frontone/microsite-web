import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../layout";
import Step1 from "../container/InsuroboWindStrom/Step1";
import Step2 from "../container/InsuroboWindStrom/Step2";
import { StorageClearInsurance } from "../container/Storage/Insurance";
import { useLocation } from "react-router-dom";

const Wrap = styled.div`
  width: 100%;
  max-width: 1280px;
  /* min-height: 1549px; */
  padding-top: 80px;
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
`;

const Content = styled.div`
  width: 100%;
  max-width: 410px;
  margin: auto auto 50px;
`;


const InsuroboWindstorm = () => {
  return (
    <Layout>
      <Wrap>
        <Content>
          <Step1 />
          <Step2 />
        </Content>
      </Wrap>
    </Layout>
  )
}

export default InsuroboWindstorm

