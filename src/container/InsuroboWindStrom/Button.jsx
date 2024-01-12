import React from "react";
import styled, { css } from "styled-components";

const Button = ({
  width,
  disabled,
  children,
  onClick,
  jehuCd,
  className
}) => {
  return (
    <ButtonWrap width={width} disabled={disabled} onClick={onClick} jehuCd={jehuCd} className={className}>
      {children}
    </ButtonWrap>
  )
}

export default Button;

const ButtonWrap = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
  border-radius: 5px;
  width: ${props => props.width ? props.width : '100%'};
  background-color: ${props => props.disabled ? '#BEBEBE' : '#2EA5FF'};

  ${props => props.jehuCd === 'yogiyo' && css`
    background-color: #6262EF;
    font-family: 'SCoreDream';
    font-size: 23px;
    height: 55px;
    border-radius: 8px;
    &.reversal {
      background-color: #FFFFFF;
      border: 1px solid #6262EF;
      color: #6262EF;
    }
  `}
`;
