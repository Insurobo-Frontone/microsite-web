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
  height: 66px;
  background-color: #2EA5FF;
  color: #FFFFFF;
  font-size: 20px;
  border-radius: 5px;
  font-weight: 400;
  ${props => props.disabled && css`
    background-color: #B4B4B4;
  `}

  ${props => props.type === 'cancel' && css`
    color: #FF2C2C;
    border: 1px solid #FF2C2C;
    background-color: #FFFFFF;
  `}

  ${props => props.type === 'border' && css`
    background-color: #FFFFFF;
    border: 1px solid #2EA5FF;
    color: #2EA5FF;
  `}

  
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 46px;
    font-size: 18px;
    font-weight: 300;
  }
`;
