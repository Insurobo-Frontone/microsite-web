import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import moreBtnReverse from '../../assets/icon/moreBtnReverse.png';

const InputWrap = styled.div`
	> select {
		display: block;
		width: 100%;
		padding: 25px 26px;
		height: 80px;
		border: 1px solid #989898;
		border-radius: 10px;
		font-size: 13px;
		box-sizing: border-box;
		background: none;
		font-size: 1rem;
		color: #989898;
		-o-appearance: none;
  	-webkit-appearance: none;
  	-moz-appearance: none;
  	appearance: none;
		background: url(${moreBtnReverse}) no-repeat 90%;
		> option {
      width: 100%;
    }
	}
`;

const ErrorText = styled.p``;


const SelectInput = ({name, label, options, required, ...rest}) => {
	const { register, formState: { errors }} = useFormContext({
		mode: 'onBlur',
	});

	return (
		<InputWrap>
			<select
				name={name}
				{...register(name, {
					required: required
				})}
				{...rest}
			>
				{options.map(option => (
					<option key={option.id} value={option.value}>
						{option.title}
					</option>
				))}
			</select>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({message}) => <ErrorText>{message}</ErrorText>}
			/>
		</InputWrap>
	)
}

export default SelectInput;