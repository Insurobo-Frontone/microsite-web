import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
const TextInput = ({ onKeyUp, className, onBlur, defaultValue, value, type, name, required, validate, pattern, placeholder, disabled, readOnly, maxLength, minLength, autoFocus}) => {
  const { register } = useFormContext();
  return (
    <>
      <TextBasic
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        defaultValue={defaultValue}
        className={className}
        autoFocus={autoFocus}
        onKeyUp={onKeyUp}
        {...register(name, {
          required: required,
          validate: validate,
          pattern: pattern,
          onBlur: onBlur,
          maxLength: maxLength,
          minLength: minLength
        })}
      />
    </>
  )
}
export default TextInput;

const TextBasic = styled.input`
  width: 100%;
  border: 1px solid #E2E2E2;
  height: 35px;
  border-radius: 5px;
  margin-top: 6px;
  padding: 7px 0 8px 8px;
  color: #666666;
  font-weight: 300;
  font-size: 14px;
  position: relative;
  ::placeholder {
    color: #D0D0D0;
  }

`;
