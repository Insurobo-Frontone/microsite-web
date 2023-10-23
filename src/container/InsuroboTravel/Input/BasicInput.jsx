import React from "react";
import { useFormContext } from "react-hook-form";

const BasicInput = ({ type, name, required, validate, value, placeholder, disabled, readOnly }) => {
  const { register } = useFormContext();
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      value={value}
      {...register(name, {
        required: required,
        validate: validate
      })}
    />
  )
}
export default BasicInput;