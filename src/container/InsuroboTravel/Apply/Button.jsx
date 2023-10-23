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
  width: 480px;
  height: 66px;
  background-color: #2EA5FF;
  color: #FFFFFF;
  font-size: 20px;
  border-radius: 5px;
  ${props => props.disabled && css`
    background-color: #B4B4B4;
    
  `}

  ${props => props.type === 'terms' && css`
    background-color: #FFFFFF;
    border: 1px solid #2EA5FF;
    width: 100%;
    color: #2EA5FF;
    font-weight: 400;
  `}
  
`;
