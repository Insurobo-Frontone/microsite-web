import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "../../Input/Calender";
import Input from "../../Input";

const Step1 = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <Wrap>
      <Input>
        <Calendar
          name='overStart'
          placeholder='가는날짜'
          startDate={startDate}
          setStartDate={setStartDate}
        />
      </Input>
      
    </Wrap>
  )
}

export default Step1;

const Wrap = styled.div`
  
`;

