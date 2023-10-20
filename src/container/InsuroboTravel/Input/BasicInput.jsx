import React from "react";
import { useFormContext } from "react-hook-form";

const BasicInput = ({ type, name, required, validate, placeholder, disabled }) => {
  const { register } = useFormContext();
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      {...register(name, {
        required: required,
        validate: validate
      })}
    />
  )
}
export default BasicInput;