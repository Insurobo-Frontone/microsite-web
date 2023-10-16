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
  height: 66px;
  position: relative;
  input {
    color: #333333;
  }
  input, select {
    width: 100%;
    font-size: 20px;
    padding: 21px 28px;
    background-color: transparent;
    font-weight: 300;
    line-height: 100%;
    ::placeholder {
      color: #989898;
    } 
  }
`;

const Label = styled.p`
  margin-bottom: 10px;
  color: #333333;
  font-size: 20px;
`;

