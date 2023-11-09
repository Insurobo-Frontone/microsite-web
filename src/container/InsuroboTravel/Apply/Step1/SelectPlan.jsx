import React from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';
import checkedIcon from '../../../../assets/icon/planCheckedIcon.png';
import mbCheckedIcon from '../../../../assets/icon/travelMobileCheckIcon.png';

const SelectPlan = () => {
  const { control } = useFormContext();
  
  const data = [
    {
      id: '1',
      value: 'relieve_plan',
      pay: '5,420',
      title: '든든플랜'
    },
    {
      id: '2',
      value: 'safe_plan',
      pay: '1,280',
      title: '안심플랜'
    },
  ]
  return (
      <Controller
        name='calcPlan'
        control={control}
        render={({ field }) => {
          return (
            <>
              {data.map((item) => {
                return (
                  <ButtonWrap {...field} key={item.id}>
                    <Label htmlFor={item.value} active={field.value === item.value}>
                      <p>{item.title}<span>{item.pay}원</span></p>
                      <Icon active={field.value === item.value} />
                    </Label>
                    <input
                      key={item.id}
                      type="radio"
                      id={item.value}
                      name={field.name}
                      value={item.value} 
                      checked={field.value === item.value}
                      onChange={(e) => {
                        field.onChange(e.target.value);
                      }}
                    />
                  </ButtonWrap>
                );
              })}
            </>
          );
        }}
    />
  );
}

export default SelectPlan;

const ButtonWrap = styled.div`
  width: 492px;
  height: 114px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  padding: 30px 40px;
  > input {
    position: absolute;
    left: -1000%;
  }

  ${(props) => props.theme.window.mobile} {
    width: 48.3974358974359%;
    height: 73px;
    padding: 13px 14px 13px 16px;
  }
`;

const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 20px;
    color: #989898;
    font-weight: 700;
    > span {
      display: inline-block;
      margin-left: 20px;
      font-size: 28px;
      color: #989898;
      font-weight: 700;
    }
  }

  ${props => props.active && css`
    > p {
      color: #333333;
      > span {
        color: #2EA5FF;
      }
    }
  `}

  ${(props) => props.theme.window.mobile} {
    
    > p {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      padding-bottom: 2px;
      > span {
        margin-left: 0;
        font-size: 18px;
      }
    }
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #B4B4B4;
  ${props => props.active && css`
    border: none;
    background-color: #5974FF;
    position: relative;
    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      background-image: url(${checkedIcon});
      background-repeat: no-repeat;
      background-position: center;
    }
  `}

  ${(props) => props.theme.window.mobile} {
    width: 24px;
    height: 24px;
    border-width: 1px;
    ::after {
      background-image: url(${mbCheckedIcon})
    }
  }
`;





