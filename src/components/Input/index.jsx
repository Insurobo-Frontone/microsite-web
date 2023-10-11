import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import WarningText from '../Auth/WarningText';

const InputWrap = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  position: relative;
  margin-bottom: 25px;

  ${props => props.theme.window.mobile} {
    margin-bottom: 0;
  }

`;

const InputBase = styled.input`
  width: 100%;
  padding: 25px 26px;
  height: 80px;
  border: 1px solid #989898;
  border-radius: 10px;
  font-size: 13px;
  box-sizing: border-box;
  background: none;
  font-size: 20px;
  color: #989898;
  
  ::placeholder {
    color: #989898;
    font-size: 20px
  }

  ${props => props.theme.window.mobile} {
    padding: 14px 13px;
    height: 50px;
    font-size: 16px;
    ::placeholder {
      font-size: 15px;
    }
  }
`;

const Label = styled.label`
  display: block;
  width: 100%;
  color: #2F2F2F;
  font-size: 20px;
  margin-bottom: 15px;
  ${props => props.theme.window.mobile} {
    font-size: 16px;
  }
`;

const Input = ({
  name, placeholder, onChange, label, type, defaultValue,
  readOnly, width, require, validate, pattern, maxLength, minLength
}) =>  {
  const { register, formState: { errors } } = useFormContext({
    mode: 'onBlur'
  });
  return (
    <InputWrap width={width}>
      {label && (
        <Label>{label}</Label>
      )}
      <InputBase
        name={name}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        defaultValue={defaultValue}
        {...register(name, {
          required: require,
          validate: validate,
          pattern: pattern,
          maxLength: {
            value: maxLength,
            message: `${maxLength}자리 이내로 입력해주세요.`
          },
          minLength: minLength,
        })}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({message}) => <WarningText text={message} error />}
      />
    </InputWrap>
  )
}
export default Input;