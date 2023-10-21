import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({ children, label, bracket, twoInput, type, onClick }) => {
  return (
    <>
      {twoInput ? (
        <>
        {label && <Label>{label}{bracket && <span>{`(${bracket})`}</span>}</Label>}
          <InputBox>
            {children}
          </InputBox>
        </>
      ) : (
        <InputWrap onClick={onClick}>
          {label && <Label>{label}{bracket && <span>{`(${bracket})`}</span>}</Label>}
          <InputBox type={type}>
            {children}
          </InputBox>
        </InputWrap>
      )}
    </>
    
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

  ${props => props.type === 'button' && css`
    width: 100%;
    border: 1.5px solid #CECECE;
  `}
`;

const Label = styled.p`
  margin-bottom: 10px;
  color: #333333;
  font-size: 20px;
  width: 100%;
  > span {
    color: #989898;
    font-size: 18px;
  }
`;

