import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import Title from "../Title";
import SelectItems from "./SelectItems";
import FindAddress from "./FindAddress";
import StoreInfo from "./StoreInfo";

const Step1 = () => {
  return (
    <Wrap>
      <Heading>
        <p>인슈로보 <span>풍수해보험</span></p>
      </Heading>
      <Title>가입물건 선택</Title>
      <SelectItems />
      <Title>목적물 소재지</Title>
      <FindAddress />
      <Title>사업장 정보</Title>
      <StoreInfo />
    </Wrap>
  )
}

export default Step1

const Wrap = styled.div``;

