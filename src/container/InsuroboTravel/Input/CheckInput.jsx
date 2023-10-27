import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from 'react-hook-form';
import checkedIcon from '../../../assets/icon/noticeCheckedIcon.png';

const CheckInput = ({ name, defaultChecked, id, }) => {
  const { setValue } = useFormContext();
  useEffect(() => {
    setValue(name, defaultChecked);
  }, []);

  return (
    <CheckBoxWrap>
      <input
        id={id}
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
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
    left: -1000%;
  }
  > input:checked + label {
    background-color:#5974FF;
    border: none;
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 22px;

  }
  
`;
