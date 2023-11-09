import React, { useRef } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from "react-hook-form";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth } from "date-fns";
import { ko } from 'date-fns/esm/locale';
import arrowIconPrev from '../../../assets/icon/calenderArrowPrev.svg';
import arrowIconNext from '../../../assets/icon/calenderArrowNext.svg';
import closeIcon from '../../../assets/icon/calenderClose.png';
import MbcloseIcon from '../../../assets/icon/travelMobileCloseIcon.png';
import inputIcon from '../../../assets/icon/calenderInputIcon.svg';


const Calendar = ({ 
  minDate,
  maxDate,
  startDate,
  endDate,
  required,
  onFocus,
  readOnly,
  validate,
  name, 
  placeholder,
  title,
}) => {
  registerLocale("ko", ko)
  const { control } = useFormContext(); 
  const ref = useRef(null);
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
    <>
      <Wrap>
        <Controller
          name={name}
          control={control}
          rules={{ required: required
          }}
          render={({ field: { value, onChange }}) => (
          <DatePicker
            readOnly={readOnly}
            ref={ref}
            locale={ko}
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="yyyy-MM-dd"
            shouldCloseOnSelect={true}
            useWeekdaysShort={false}
            selected={value}
            startDate={startDate}
            endDate={endDate}
            onFocus={onFocus}
            onChange={(data) => {
              onChange(data)
            }}
            placeholderText={placeholder}
            withPortal
            showIcon
            icon={<CalenderInput />}
            renderCustomHeader={({
              date,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              decreaseMonth,
              increaseMonth,
            }) => (
              <>
                <ButtonContainer>
                  <h2>{title}</h2>
                  <div className="btn_ctrl btn_ctrl-cancel" onClick={() => {ref.current?.setOpen(false)}} />
                </ButtonContainer>
              <div className='month-wrap'>
                <div
                  className="btn_month btn_month-prev"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <img src={arrowIconPrev} alt='이전' />
                </div>
                <div className="month-day">
                  {getYear(date)}년 {months[getMonth(date)]}
                </div>
                <div
                  className="btn_month btn_month-next"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <img src={arrowIconNext} alt='다음' />
                </div>
              </div>
              </>
            )}
          >
          </DatePicker>
          
        )}
      />
      </Wrap>
    </>
  );
};
  
export default Calendar;

const ButtonContainer = styled.div`
  background-color: #2EA5FF;
  display: flex;
  justify-content: space-between;
  padding: 30px 24px 32px 30px;
  > h2 {
    color: #FFFFFF;
    font-size: 20px;
  }
  ${(props) => props.theme.window.mobile} {
    align-items: center;
    > h2 {
      font-size: 18px;
      line-height: 27px;
    }
  }

`;

const Wrap = styled.div`
  .react-datepicker__view-calendar-icon {
    padding: 0;
    > input {
      padding: 0;
    }
  }

  .react-datepicker {
    border: none;
    border-radius: 15px;
    overflow: hidden;
    width: 512px;
    height: auto;
  }
  .react-datepicker__portal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__header {
    padding: 0;
    background-color: #FFFFFF;
    border-bottom: 0;
  }

  .btn_ctrl.btn_ctrl-cancel {
    width: 32px;
    height: 32px;
    background-image: url(${closeIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  .month-wrap {
    padding: 45px 30px 38px;
    display: flex;
    justify-content: space-between;
    .btn_month {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .month-day {
      font-size: 24px;
      color: #333333;
      font-weight: 700;
    }
  }
  .react-datepicker__day-names {
    margin-bottom: 0;
    .react-datepicker__day-name {
      width: 60px;
      height: 46px;
      font-size: 16px;
      margin: 0;
    }
  }
  .react-datepicker__month {
    margin: 0;
    padding-bottom: 45px;
    .react-datepicker__week {
      .react-datepicker__day {
        width: 60px;
        height: 36px;
        margin: 0;
        line-height: 36px;
        font-size: 16px;
        box-sizing: content-box;
        font-weight: 400;
      }
    }
  }
  .react-datepicker__day--keyboard-selected ,
  .react-datepicker__day.react-datepicker__day--selected {
    width: 30px !important;
    height: 30px !important;
    margin: 4px 15px 2px !important;
    line-height: 30px !important;
    color: #FFFFFF;
    border-radius: 50%;
    background-color: #2EA5FF;
    
  }
  .react-datepicker__day--disabled {
    color: #B4B4B4;
  }
  .react-datepicker__input-container {
    display: flex;
  }
  .react-datepicker__input-container {
    .react-datepicker__calendar-icon {
      top: 3px;
      right: 0;
      padding: 0;
      width: 24px;
      height: 24px;
    }
  }
  
  ${(props) => props.theme.window.mobile} {
    .react-datepicker__input-container {
      .react-datepicker__calendar-icon {
        top: 1px;
        right: 0;
        padding: 0;
        width: 20px;
        height: 20px;
      }
    }
    .react-datepicker {
      width: 312px;
    }
    .btn_ctrl.btn_ctrl-cancel {
      width: 24px;
      height: 24px;
      background-image: url(${MbcloseIcon});
    }
    .month-wrap {
      padding: 40px 20px;
      align-items: center;
      
      .month-day {
        font-size: 18px;
      }
    }
    .react-datepicker__day-names {
      margin: 0 3px;
      .react-datepicker__day-name {
        width: 36px;
        height: 36px;
      }
    }
    .react-datepicker__month {
      padding-bottom: 40px;
      .react-datepicker__week {
        .react-datepicker__day {
          width: 36px;
          height: 36px;
        }
      }
    }
    .react-datepicker__day--keyboard-selected ,
    .react-datepicker__day.react-datepicker__day--selected {
      margin: 5px !important;
    }
  } 
`;

const CalenderInput = styled.div`
  background-image: url(${inputIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  
`;
