import React from "react";
import styled from "styled-components";
import Input from "../../Input";

const TitleInput = ({title, name, placeholder, validate}) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Input
        name={name}
        placeholder={placeholder}
        validate={validate}
      />
    </Wrap>
  )  
}

export default TitleInput;

const Wrap = styled.div`
  margin-top: 30px;
  > div {
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;

const Title = styled.p`
  color: #2EA5FF;
  font-size: 10px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 10px;
`;

