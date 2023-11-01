import React from "react";
import styled from "styled-components";
import { Controller, useFormContext } from 'react-hook-form';
import checkedIcon from '../../../assets/icon/noticeCheckedIcon.png';
import mbCheckedIcon from '../../../assets/icon/travelMobileCheckIcon.png';

const CheckInput = ({ name, id }) => {
  const { control } = useFormContext();

  return (
    <CheckBoxWrap>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <input
            id={id}
            type="checkbox"
            onChange={(e) => onChange(e.target.checked)}
            checked={value}
          />
        )}
      />
      <label htmlFor={id} />
    </CheckBoxWrap>
  );
 }

export default CheckInput;

const CheckBoxWrap = styled.div`
  > label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 1px solid #B4B4B4;
    border-radius: 50%;
  }
  > input {
    position: absolute;
    left: -2000000%;
  }
  > input:checked + label {
    background-color:#5974FF;
    border: none;
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px;
  }

  ${(props) => props.theme.window.mobile} {
    > label {
      width: 24px;
      height: 24px;
    }
    > input:checked + label {
      background-image: url(${mbCheckedIcon});
      background-size: auto;
    }
  }
`;
