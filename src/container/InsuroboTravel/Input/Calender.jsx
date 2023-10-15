import React from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from "react-hook-form";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth } from "date-fns";
import { ko } from 'date-fns/esm/locale';

const Calendar = ({ 
  minDate,
  maxDate,
  name, 
  placeholder,
  excludeDates,
  cancle,
  close,
  open,
  ref
}) => {
  registerLocale("ko", ko)
  const { control } = useFormContext();
  
  
  const _ = require('lodash');
  const years = _.range(1990, getYear(new Date()) + 1, 1);
  
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
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
          shouldCloseOnSelect={false}
          useWeekdaysShort={true}
          excludeDates={excludeDates}
          selected={value}
          closeOnScroll={true}
          onChange={(data) => onChange(data)}
          placeholderText={placeholder}
          withPortal
          ref={ref}
          onInputClick={open}
          renderCustomHeader={({
            date,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
            decreaseMonth,
            increaseMonth,
          }) => (
            <div
              style={{
                margin: 10,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                className="btn_month btn_month-prev"
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              >
                <img src="/static/images/arrow-black-left.png" />
              </div>
              <div className="month-day">
                {getYear(date)}.{months[getMonth(date)]}
              </div>
        
              <div
                className="btn_month btn_month-next"
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              >
                <img src="/static/images/arrow-black-right.png" />
              </div>
            </div>
          )}
        >
          <div className="button-container">
            <div className="btn_ctrl btn_ctrl-cancel" onClick={cancle}>
              {" "}
              취소
            </div>
            <div className="btn_ctrl btn_ctrl-confirm" onClick={close}>
              선택
            </div>
          </div>
        </StyledDatePicker>
        
      )}
    />
  );
};
  
export default Calendar;


const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  height: 48px;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  padding: 20px;
  background-color: transparent;
  color: #707070;
  ::placeholder {
    color: #989898;
  }

  ::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: #707070;
  }

  .react-datepicker__portal {
    width: 512px !important;
  }
  


`;


