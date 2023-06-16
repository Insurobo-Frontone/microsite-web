import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const Label = styled.label``;

const SelectInput = ({name, label, options, required, ...rest}) => {
	const { register, formState: { errors }} = useFormContext({
		mode: 'onBlur',
	});
	return (
		<>
			{label && (<Label>{label}</Label>)}
		
		</>
	)
}

export default SelectInput;