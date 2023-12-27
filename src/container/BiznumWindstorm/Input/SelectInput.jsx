import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import selectIcon from '../../../assets/icon/bizSelectArrow.png';
import { ErrorMessage } from "@hookform/error-message";
const SelectInput = ({name, defaultValue, placeholder, children, ...rest}) => {
  const { register, formState: { errors }} = useFormContext({
		mode: 'onBlur',
	});

  return (
    <>
      <SelectContainer>
        <SelectBase
          name={name}
          key={defaultValue}
          defaultValue={defaultValue}
          {...register(name)}
          {...rest}
        >
          <option value="" hidden>
            {placeholder}
          </option>
          <>{children}</>
        </SelectBase>
        <SelectArrow />
      </SelectContainer>
      <ErrorTextMessage>
        <ErrorMessage errors={errors} name={name} />
      </ErrorTextMessage> 
    </>
  )
}

export default SelectInput;

const SelectContainer = styled.div`
  color: #666666;
  width: 100%;
  height: 35px;
  margin-top: 6px;
  border-radius: 5px;
  border: 1px solid #E2E2E2;
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
  padding: 7px 0 8px 8px;

`;

const SelectArrow = styled.div`
  width: 22.25px;
  height: 20px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 9px;
`;

const ErrorTextMessage = styled.div`
  font-size: 12px;
  color: #FF0000;
  line-height: 22px;
`;