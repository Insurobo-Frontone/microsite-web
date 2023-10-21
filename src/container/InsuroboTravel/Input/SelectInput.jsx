import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import selectIcon from '../../../assets/icon/insuroboTravelSelectIcon.png';

const Select = ({name, defaultValue, placeholder, required, validate, children, ...rest}) => {
  const { register } = useFormContext({
		mode: 'onBlur',
	});

  return (
    <>
      <SelectBase
        name={name}
        key={defaultValue}
        defaultValue={defaultValue}
        {...register(name, {
					required: required,
          validate: validate,
				})}
        {...rest}
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        <>{children}</>
      </SelectBase>
      <SelectArrow />
    </>
  );
}

export default Select;

const SelectBase = styled.select`
  -webkit-appearance: none;
  background-color: transparent;
  color: #333333;

  > option[value=""][disabled] {
	  display: none;
  }
`;

const SelectArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 28px;
  top: 21px;
`;
