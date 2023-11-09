import React from "react";
import styled, {css} from "styled-components";
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

const Input = ({
  placeholder,
  type,
  first,
  readOnly,
  onChange,
  name,
  defaultValue,
  required,
  pattern,
}) => {
  const { register, formState: { errors } } = useFormContext({
    mode: 'onBlur'
  });
  return (
    <>
      <InputBase
        type={type}
        first={first}
        readOnly={readOnly}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        {...register(name, {
          required: required,
          pattern: {
            value: pattern,
            message: '올바른 형식이 아닙니다.'
          }
        })}
      />
      <ErrorMessage errors={errors} name={name} />
    </>
  )
}

export default Input

const InputBase = styled.input`
  width: 100%;
  height: 50px;
  margin-right: 10px;
  padding: 0px 10px;
  border-radius: 5px;
  border: 1px solid #BEBEBE;
  color: #1A1A1A;
  ::placeholder {
    color: #BEBEBE;
  }
  ${props => props.first && css`
    width: calc(100% - 84px);
  `}
`;


