import React from "react";
import styled from "styled-components";
import { useFormContext } from 'react-hook-form';

const TitleRadio = () => {
  const { register } = useFormContext();
  return (
    <Wrap>
      <Title>성별</Title>
      <RadioGroup>
        <RadioBox>
          <input
            type='radio'
            id='men'
            value='1'
            name='inrGender'
            {...register('inrGender')} 
            defaultChecked
          />
          <label htmlFor="men">남성</label>
        </RadioBox>
        <RadioBox>
          <input
            type='radio'
            id='women'
            value='2'
            name='inrGender'
            {...register('inrGender')} 
          />
          <label htmlFor="women">여성</label>
        </RadioBox>
      </RadioGroup>
    </Wrap>
  )  
}

export default TitleRadio;

const Wrap = styled.div`
  margin-top: 30px;

`;

const Title = styled.p`
  color: #2EA5FF;
  font-size: 15px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 10px;
`;

const RadioGroup = styled.div`
  display: flex;
  width: 174px;
  justify-content: space-between;
`;

const RadioBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 82px;
  height: 44px;
  > input {
    position: absolute;
    left: -1000%;
  }
  > label {
    display: flex;
    align-items: center;
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 500;
    position: relative;
  }
  > label::after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid #BEBEBE;
    border-radius: 50%;
    margin-left: 12px;
    box-sizing: border-box;
  }
  > input:checked + label::after {
    background: radial-gradient(#2EA5FF, #2EA5FF 7px, #FFFFFF 8px, #FFFFFF 12px);
  }
  /* > label::before {
      content: '';
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background-color: #2EA5FF;
      position: absolute;
      right: 5px;
      
  } */
  
`;
