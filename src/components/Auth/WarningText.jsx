import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: ${props => props.error ? '16px' : '18px'};
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  font-weight: 400;
  ${props => props.theme.window.mobile} {
    font-size: ${props => props.error ? '13px' : '15px'};
  }
`;


const WarningText = ({text, error}) => {
  return (
    <Text error={error}>{text}</Text>
  )
}

export default WarningText;