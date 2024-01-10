import React from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';
import checkedBg from '../../../assets/icon/checkedBg.png';

const RadioButton = ({ name, data, onFocus }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <>
            {data.map((item) => {
              return (
                <RadioBasic key={item.id}>
                  <input 
                    type="radio"
                    id={item.id.toString()}
                    value={item.value}
                    checked={value === item.value}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus}
                  />
                  <label htmlFor={item.id.toString()}>{item.title}</label>
                </RadioBasic>
              );
            })}
          </>
        );
      }}
    />
  );
}

export default RadioButton;

const RadioBasic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > label {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
    position: relative;
    display: flex;
    
    ::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid #E2E2E2;
      border-radius: 50%;
      background-color: #FFFFFF;
      box-sizing: border-box;
      margin-right: 4px;
    }
  }
  > input {
    position: absolute;
    left: -1000%;
  }
  > input:checked + label::before {
    border: 1.5px solid #6262EF;
    background-image: url(${checkedBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
  }
    
`;
