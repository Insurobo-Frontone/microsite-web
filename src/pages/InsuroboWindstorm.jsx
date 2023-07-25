import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import Step1 from "../container/InsuroboWindStrom/Step1";

const Wrap = styled.div`
  width: 100%;
  max-width: 1280px;
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
        </Content>
      </Wrap>
    </Layout>
  )
}

export default InsuroboWindstorm