import React from "react";
import styled from "styled-components";


const ErrorMessage = ({ message }) => {
  return (
    <Text>{message}</Text>
  )
}
export default ErrorMessage

const Text = styled.span`
  font-size: 12px;
  color: #FF0000;
  font-weight: 300;
  padding-top: 10px;
`;