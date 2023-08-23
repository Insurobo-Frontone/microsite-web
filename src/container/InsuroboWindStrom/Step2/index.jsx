import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import Title from "../Title";
import NonMember from "./NonMember";

const Step2 = () => {

  return (
    <Wrap>
      <Heading>
        <p><span>고객정보 입력 및 동의</span></p>
      </Heading>
      <Title>보험계약자 / 피보험자 정보</Title>
      <NonMember />
    </Wrap>
  )
}

export default Step2;

const Wrap = styled.div``;
