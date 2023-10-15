import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../Input/Calender";
import Input from "../../Input";

const Step1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <Wrap>
      <InputWrap>
        <Input label='출발일'>
          <Calendar
            name='localStart'
            placeholder='출발일'
            startDate={startDate}
            setStartDate={setStartDate}
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
