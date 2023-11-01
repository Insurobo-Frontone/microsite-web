import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import selectIcon from '../../assets/icon/insuroboWindstorm/selectIcon.png';

const Select = ({name, defaultValue, placeholder, required, children, ...rest}) => {
  const { register, formState: { errors }} = useFormContext({
		mode: 'onBlur',
	});

  return (
    <SelectContainer>
      <SelectBase
        name={name}
        key={defaultValue}
        defaultValue={defaultValue}
        {...register(name, {
					required: required
				})}
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
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
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
