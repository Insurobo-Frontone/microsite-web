import React from "react";
import styled from "styled-components";
import Calendar from "../../Input/Calender";
import Input from "../../Input";

const Step1 = () => {
  return (
    <Wrap>
      <Input>
        <Calendar
          name='overStart'
          placeholder='가는날짜'
        />
      </Input>
    </Wrap>
  )
}

export default Step1;

const Wrap = styled.div`
  
`;

