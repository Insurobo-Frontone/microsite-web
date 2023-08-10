import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import Step1 from "../container/InsuroboWindStrom/Step1";
import StepContext, { StepProvider } from "../context/StepContext";
import { useContext } from "react";
import Step2 from "../container/InsuroboWindStrom/Step2";
import Step3 from "../container/InsuroboWindStrom/Step3";

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
  const step = useContext(StepContext);
  
  return (
    <Layout>
      <Wrap>
        <Content>
          <StepProvider>
            {/* {step.state.step.firstStep ? <Step1 /> :
              step.state.step.secondStep ? <Step2 /> :
              step.state.step.thirdStep && <Step3 />
            } */}
            <Step1 />
            {/* <Step2 /> */}
            {/* <ReturnComponent /> */}
          </StepProvider>
        </Content>
      </Wrap>
    </Layout>
  )
}

export default InsuroboWindstorm

