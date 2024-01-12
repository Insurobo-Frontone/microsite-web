import React from "react";
import styled, { css } from "styled-components";

const Button = ({ onClick, disabled, type, title, className }) => {
  return (
    <BasicButton 
      onClick={onClick} 
      disabled={disabled} 
      type={type}
      className={className}
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
  &.yogiyo {
    font-family: 'SCoreDream';
    font-size: 23px;
    font-weight: 700;
    ${props => props.disabled && css`
      background-color: #6262EF;
    `}
  }
  ${props => props.disabled && css`
    background-color: #B4B4B4;
  `}

  ${(props) => props.theme.window.mobile} {
    
  }
`;
