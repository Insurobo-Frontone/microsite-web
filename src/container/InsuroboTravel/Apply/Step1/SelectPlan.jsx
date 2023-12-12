import React from "react";
import styled, { css } from "styled-components";
import { useFormContext, Controller } from 'react-hook-form';
import checkedIcon from '../../../../assets/icon/planCheckedIcon.png';
import mbCheckedIcon from '../../../../assets/icon/travelMobileCheckIcon.png';
import BasicInput from "../../Input/BasicInput";
import { useEffect } from "react";

const SelectPlan = ({ data }) => {
  const { control, watch, setValue, register } = useFormContext();
  console.log(watch(['calcPlan', 'calcPlanFee']))

  return (
      <Controller
        name='calcPlan'
        control={control}
        render={({ field }) => {
          return (
            <>
              {data.map((item, index) => {
                return (
                  <>
                    <ButtonWrap {...field} key={index}>
                      <Label htmlFor={item.gubun} active={field.value === item.gubun}>
                        <p>{item.gubun === '1' ? '안심플랜' : '든든플랜'}
                          <span>{item.fee.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</span>
                        </p>
                        <Icon active={field.value === item.gubun} />
                      </Label>
                      <BasicInput name='calcPlanFee' defaultValue={item.fee} readOnly />
                      <input
                        type="radio"
                        id={item.gubun}
                        name={field.name}
                        value={item.gubun}
                        checked={field.value === item.gubun}
                        onChange={(e) => {
                          field.onChange(e.target.value);
                          setValue('calcPlanFee', item.fee)
                        }}
                      />
                    </ButtonWrap>
                  </>
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
  width: 100%;
  height: 114px;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  padding: 30px 40px;
  :nth-child(2) {
    margin-left: 16px;
  }
  > input {
    position: absolute;
    left: -1000%;
  }

  ${(props) => props.theme.window.mobile} {
    :nth-child(2) {
      margin-left: 10px;
    }
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
  > input {
    position: absolute;
    left: -1000%;
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





