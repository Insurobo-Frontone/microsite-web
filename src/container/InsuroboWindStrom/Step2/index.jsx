import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import Button from "../Button";
import Title from "../Title";


const Step2 = () => {
  const onClickNext = () => {
    
  }
  return (
    <Wrap>
      <Heading>
        <p><span>고객정보 입력 및 동의</span></p>
      </Heading>
      <Title>보험계약자 / 피보험자 정보</Title>
      
      <Button onClick={onClickNext}>다음</Button>
    </Wrap>
  )
}

export default Step2

const Wrap = styled.div``;
