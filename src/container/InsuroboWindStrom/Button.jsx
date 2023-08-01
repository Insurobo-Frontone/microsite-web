import React from "react";
import styled from "styled-components";

const Button = ({
  width,
  disabled,
  children
}) => {
  return (
    <ButtonWrap width={width} disabled={disabled}>
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
`;
