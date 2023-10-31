import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';

const RadioInput = ({ name, data, defaultValue, onClick, tep, list, myPage }) => {
  const { control, setValue } = useFormContext();
  useEffect(() => {
    setValue(name, defaultValue);
  }, []);

  return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <RadioBasic {...field} tep={tep} list={list} myPage={myPage}>
              {data.map((item) => {
                return (
                  <>
                    <input
                      key={item.id}
                      type="radio"
                      id={item.id.toString()}
                      name={field.name}
                      value={item.value}
                      checked={field.value === item.value}
                      onClick={(e) => {
                        field.onChange(e.target.value)
                        onClick()
                      }}
                    />
                    <label htmlFor={item.id.toString()}>{item.title}</label>
                  </>
                );
              }
            )}
          </RadioBasic>
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
  ${props => props.myPage  && css`
    > label {
      width: 491px;
      color: #FF2C2C;
      border-color: #FF2C2C;
    }
  `}

  ${props => props.tep && css`
    > label {
      width: 100%;
    }
  `}

  ${props => props.list  && css`
    > label {
      width: 492px;
      color: #333333;
      border-color: #CECECE;
    }
    > input:checked + label {
      color: #2EA5FF;
      border:1px solid #CECECE;
      background-color: #FFFFFF;
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
    ${props => props.myPage  && css`
      > label {
        width: 151px;
      }
    `}

    ${props => props.tep && css`
      > label {
        width: 100%;
      }
    `}

    ${props => props.list  && css`
      > label {
        width: 151px;
      }
      /* > input:checked + label {
        color: #2EA5FF;
        border:1px solid #CECECE;
        background-color: #FFFFFF;
      } */
    `}
  }
    
`;
