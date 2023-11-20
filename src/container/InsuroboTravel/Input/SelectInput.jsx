import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import selectIcon from '../../../assets/icon/insuroboTravelSelectIcon.png';


const Select = ({name, className, defaultValue, placeholder, required, validate, children, ...rest}) => {
  const { register, watch } = useFormContext({
		mode: 'onBlur',
	});
  return (
    <>
      <SelectBase
        className={watch(name) === '' ? 'selected' : ''}
        name={name}
        key={defaultValue}
        defaultValue={defaultValue}
        {...register(name, {
					required: required,
          validate: validate,
				})}
        {...rest}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        <>{children}</>
      </SelectBase>
    </>
  );
}

export default Select;


const SelectBase = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: url(${selectIcon});
  background-position: calc(100% - 32px) center;
  background-repeat: no-repeat;
  color: #333333;
  &.selected {
    color: #989898;
  }
  > option[value=""][disabled] {
	  display: none;
  }

  ${(props) => props.theme.window.mobile} {
    background-position: calc(100% - 10px) center;
  }
`;

