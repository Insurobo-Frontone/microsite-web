import React from "react";
import styled, { css } from "styled-components";

const Button = ({ onClick, disabled, type, title }) => {
  return (
    <BasicButton 
      onClick={onClick} 
      disabled={disabled} 
      type={type} 
    >
      {title}
    </BasicButton>
  )
}

export default Button;

const BasicButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: #6262EF;
  color: #FFFFFF;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 400;
  ${props => props.disabled && css`
    background-color: #B4B4B4;
  `}

  ${(props) => props.theme.window.mobile} {
    
  }
`;
