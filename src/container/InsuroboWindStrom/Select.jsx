import React from "react";
import styled from "styled-components";

const Select = ({defaultValue, ...rest}) => {
  return (
    <SelectBase
      key={defaultValue}
      defaultValue={defaultValue}
      {...rest}
    >

    </SelectBase>
  )
}

export default Select;

const SelectBase = styled.select``;
