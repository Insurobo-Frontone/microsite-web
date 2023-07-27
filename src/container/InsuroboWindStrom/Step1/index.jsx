import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import Title from "../Title";



const Step1 = () => {
  return (
    <Wrap>
      <Heading>
        <p>인슈로보 <span>풍수해보험</span></p>
      </Heading>
      <Title>가입물건 선택</Title>
    </Wrap>
  )
}

export default Step1

const Wrap = styled.div``;

