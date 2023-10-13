import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import moreBtnReverse from '../../assets/icon/moreBtnReverse.png';
import WarningText from "../Auth/WarningText";

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

	${(props) => props.theme.window.mobile} {

		> select {
			height: 50px;
			padding: 14px 13px;
		}
	}
`;

const SelectInput = ({name, options, defaultValue, required, ...rest}) => {
	const { register, formState: { errors }} = useFormContext({
		mode: 'onBlur',
	});

	return (
		<InputWrap>
			<select
				name={name}
				key={defaultValue}
				defaultValue={defaultValue}
				{...register(name, {
					required: required
				})}
				{...rest}
			>
				{options.map((option, index) => (
					<option key={index} value={option.companyName}>
						{option.companyName}
					</option>
				))}
			</select>
			<ErrorMessage
				errors={errors}
				name={name}
				render={({message}) => <WarningText text={message} error />}
			/>
		</InputWrap>
	)
}

export default SelectInput;