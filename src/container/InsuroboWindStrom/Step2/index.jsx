import React from "react";
import styled from "styled-components";
import Heading from "../Heading";
import Button from "../Button";
import Title from "../Title";
import { StorageSetInsurance, StorageGetInsruance } from "../../Storage/Insurance";
import { useFormContext } from "react-hook-form";
import NonMember from "./NonMember";

const Step2 = () => {
  const { watch } = useFormContext({
    mode: 'onBlur'
  });

  const onClickNext = () => {
    const getData = StorageGetInsruance()
    console.log('before', getData.insurance)
    getData.insurance.ww_info.oagi6002vo.objAddr2 = watch('objAddr2');
   
    StorageSetInsurance(getData.insurance, '')
    console.log('after', getData.insurance)
  }
  return (
    <Wrap>
      <Heading>
        <p><span>고객정보 입력 및 동의</span></p>
      </Heading>
      <Title>보험계약자 / 피보험자 정보</Title>
      <NonMember />
      <Button onClick={onClickNext}>다음</Button>
    </Wrap>
  )
}

export default Step2;

const Wrap = styled.div``;
