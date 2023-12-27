import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";
const TextInput = ({ onBlur, defaultValue, value, type, name, required, validate, pattern, placeholder, disabled, readOnly, maxLength, minLength, errorFild }) => {
  const { register, formState: { errors }  } = useFormContext();
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
        {...register(name, {
          required: required,
          validate: validate,
          pattern: pattern,
          onBlur: onBlur,
          maxLength: maxLength,
          minLength: minLength
        })}
      />
      {errorFild && (
        <>
          {errors && (
            <ErrorTextMessage>
              <ErrorMessage errors={errors} name={name} />
            </ErrorTextMessage> 
          )}
        </>
      )}
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
  ::placeholder {
    color: #D0D0D0;
  }
`;

const ErrorTextMessage = styled.div`
  font-size: 12px;
  color: #FF0000;
  line-height: 22px;
`;