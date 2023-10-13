import React from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from "react-hook-form";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Calendar = ({ 
  minDate,
  maxDate,
  name, 
  placeholder 
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange }}) => (
        <StyledDatePicker
          locale={ko}
          minDate={minDate}
          maxDate={maxDate}
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          selected={value}
          closeOnScroll={true}
          onChange={(data) => onChange(data)}
          placeholderText={placeholder}
        />
      )}
    />
    
  );
};
  
export default Calendar;

const StyledDatePicker = styled(DatePicker)`
  width: 122px;
  height: 48px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 20px;
  background-color: transparent;
  color: #707070;
  position: absolute;
  top: -48px;
  left: 5px;
`;