import React,{ useEffect } from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';
import checkedIcon from '../../../assets/icon/planCheckedIcon.png';

const SelectPlan = () => {
  const { control, setValue } = useFormContext();
  useEffect(() => {
    setValue('calcPlan', 'planB')
  }, []);
  
  const data = [
    {
      id: '1',
      value: 'planA',
      pay: '5,420',
      title: '든든플랜'
    },
    {
      id: '2',
      value: 'planB',
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
                  <ButtonWrap {...field}>
                    <Label htmlFor={item.value} color={field.value == item.value}>
                      <p>{item.title}<span>{item.pay}원</span></p>
                      <Icon color={field.value == item.value} />
                    </Label>
                    <input
                      key={item.id}
                      type="radio"
                      id={item.value}
                      name={field.name}
                      value={item.value} 
                      checked={field.value == item.value}
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

  ${props => props.color && css`
    > p {
      color: #333333;
      > span {
        color: #2EA5FF;
      }
    }
  `}
`;


const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #B4B4B4;
  ${props => props.color && css`
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
`;





