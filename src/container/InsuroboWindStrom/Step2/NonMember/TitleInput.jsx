import React from "react";
import styled from "styled-components";
import Input from "../../Input";

const TitleInput = ({title, name, placeholder, pattern}) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      <Input
        name={name}
        placeholder={placeholder}
        pattern={pattern}
      />
    </Wrap>
  )  
}

export default TitleInput;

const Wrap = styled.div`
  margin-top: 30px;
  font-size: 12px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  > div {
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;

const Title = styled.p`
  color: #2EA5FF;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 10px;
`;

