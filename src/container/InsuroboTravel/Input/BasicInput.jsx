import React from "react";
import { useFormContext } from "react-hook-form";

const BasicInput = ({ defaultValue, type, name, required, validate, pattern, placeholder, disabled, readOnly }) => {
  const { register } = useFormContext();
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readOnly}
      defaultValue={defaultValue}
      {...register(name, {
        required: required,
        validate: validate,
        pattern: pattern
      })}
    />
  )
}
export default BasicInput;