import React from "react";
import styled from "styled-components";

const Title = ({children}) => {
  return (
    <TitleContainer>{children}</TitleContainer>
  )
}

export default Title;

const TitleContainer = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000000;
`;

