import React from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';

const RadioButton = ({ name, data, onFocus }) => {
  const { control } = useFormContext();
  return (
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              <RadioBasic>
                {data.map((item) => {
                  return (
                    <>
                      <input
                        key={item.id}
                        type="radio"
                        id={item.id.toString()}
                        value={item.value}
                        checked={value === item.value}
                        onChange={(e) => onChange(e.target.value)}
                        onFocus={onFocus}
                      />
                      <label htmlFor={item.id.toString()}>{item.title}</label>
                    </>
                  );
                }
              )}
            </RadioBasic>
          </>
        );
      }}
    />
  ) 
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
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-left: 16px;
    }
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
    border: 1px solid #6262EF;
    
  }
  > input:checked + label::after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-color: #6262EF;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
  }
  

  ${(props) => props.theme.window.mobile} {
   
  }
    
`;
