import React from "react";
import styled from "styled-components";
import selectIcon from '../../assets/icon/insuroboWindstorm/selectIcon.png';

const Select = ({defaultValue, placeholder, children, ...rest}) => {
  return (
    <SelectContainer>
      <SelectBase
        key={defaultValue}
        defaultValue={defaultValue}
        {...rest}
      >
        <option value="" hidden>
          {placeholder}
        </option>
        <>{children}</>
      </SelectBase>
      <SelectArrow />
    </SelectContainer>
  )
}

export default Select;

const SelectContainer = styled.div`
  color: #BEBEBE;
  width: 100%;
  height: 50px;
  margin-right: 10px;
  
  border-radius: 5px;
  border: 1px solid #BEBEBE;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`;

const SelectBase = styled.select`
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  > option {
    
  }
`;

const SelectArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 10px;
`;