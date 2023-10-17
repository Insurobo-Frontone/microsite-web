import React, { useState } from "react";
import styled, { css } from "styled-components";
import InsuInfo from "../InsuInfo";

const Step1 = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrap info open={open}>
      <InsuInfo />
    </Wrap>

  )
}

export default Step1;

const Wrap = styled.div`
  position: relative;
  

  ${props => props.info && css`
    padding: 40px 80px 82px;
    margin-bottom: ${props => props.open ? '20px' : '50px'}
  `}

`;


