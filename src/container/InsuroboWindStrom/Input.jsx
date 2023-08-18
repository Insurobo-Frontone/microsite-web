import React from "react";
import styled, {css} from "styled-components";

const Input = ({
  placeholder,
  first,
  readOnly,
  value,
  onChange,
}) => {
  return (
    <InputBase
      first={first}
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
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
