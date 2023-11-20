import React from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';

const RadioInput = ({ name, data, list, myPage, onFocus }) => {
  const { control } = useFormContext();
  return (
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <>
              <RadioBasic list={list} myPage={myPage}>
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

export default RadioInput;

const RadioBasic = styled.div`
  display: flex;
  justify-content: space-between;

  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 575px;
    height: 66px;
    color: #2EA5FF;
    border: 1px solid #2EA5FF;
    border-radius: 5px;
    font-size: 20px;
  }
  > input {
    position: absolute;
    left: -1000%;
  }
  > input:checked + label {
    color: #FFFFFF;
    background-color:#2EA5FF;
    border: none;
  }

  ${props => props.list  && css`
    > label {
      width: 492px;
      color: #333333;
      border-color: #CECECE;
      :nth-child(4) {
        color: #2EA5FF;
      }
    } 
  `}

  ${(props) => props.theme.window.mobile} {
    > label {
      width: 151px;
      height: 46px;
      border-width: 1.5px;
      font-weight: 300;
      font-size: 18px;
    }
    ${props => props.list  && css`
      > label {
        width: 48.3974358974359%;
      }
    `}
  }
    
`;
