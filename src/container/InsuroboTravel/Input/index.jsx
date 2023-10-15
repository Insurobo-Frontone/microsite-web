import React from 'react';
import styled from 'styled-components';



const Input = ({ children, label }) => {
  return (
    <InputWrap>
      {label && <Label>{label}</Label>}
      <InputBox>
        {children}
      </InputBox>
    </InputWrap>
  )
}
export default Input;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.div`
  border: 1px solid #CECECE;
  border-radius: 10px;
  width: 492px;
`;
const Label = styled.p`
  margin-bottom: 10px;
  color: #333333;
  font-size: 20px;
`;

