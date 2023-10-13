import React from "react";
import styled from "styled-components";
import Calendar from "../../Input/Calender";
import { useState } from "react";

const Step1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Wrap>
      
      <Calendar
        name='overStart'
        placeholder='가는날짜'
      />
    </Wrap>
  )
}

export default Step1;

const Wrap = styled.div`
`;

