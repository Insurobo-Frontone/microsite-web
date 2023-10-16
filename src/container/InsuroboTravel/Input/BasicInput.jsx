import React from "react";
import { useFormContext } from "react-hook-form";

const BasicInput = ({ type, name, required, validate, placeholder }) => {
  const { register } = useFormContext();
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name, {
        required: required,
        validate: validate
      })}
    />
  )
}
export default BasicInput;