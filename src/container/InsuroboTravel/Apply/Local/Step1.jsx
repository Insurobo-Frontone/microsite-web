import React, { useRef, useState } from "react";
import styled from "styled-components";
import Calendar from "../../Input/Calender";
import Input from "../../Input";

const Step1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currentDate, setCurrentDate] = useState();
  const calendar = useRef(null);

  const cancelDatePicker = () => {
    setStartDate(currentDate);
    calendar.current.setOpen(false);
  };
  
  const openDatePicker = () => {
    calendar.current.setOpen(true);
  };
  
  const closeDatePicker = () => {
    setCurrentDate(startDate);
    calendar.current.setOpen(false);
  };

  return (
    <Wrap>
      <InputWrap>
        <Input label='출발일'>
          <Calendar
            name='localStart'
            placeholder='출발일'
            startDate={startDate}
            setStartDate={setStartDate}
            ref={calendar}
          />
        </Input>
        <Input label='도착일'>
          <Calendar
            name='localEnd'
            placeholder='도착일'
          />
        </Input>
      </InputWrap>
      
      
    </Wrap>
  )
}

export default Step1;

const Wrap = styled.div` 
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between ;
`;
