import React from "react";
import styled, { css } from "styled-components";

const Button = ({
  width,
  disabled,
  children,
  onClick,
  jehuCd
}) => {
  return (
    <ButtonWrap width={width} disabled={disabled} onClick={onClick} jehuCd={jehuCd}>
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
  `}
`;
