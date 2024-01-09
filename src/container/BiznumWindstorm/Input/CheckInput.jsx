import React from "react";
import styled from "styled-components";
import { Controller, useFormContext } from 'react-hook-form';
import CheckedIcon from '../../../assets/icon/bizWindstormCheckIcon.png';

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
    width: 20px;
    height: 20px;
    border: 1px solid #E2E2E2;
    border-radius: 5px;
  }
  > input {
    position: absolute;
    left: -2000000%;
  }
  > input:checked + label {
    border-color:#6262EF;
    background-image: url(${CheckedIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  ${(props) => props.theme.window.mobile} {

  }
`;
