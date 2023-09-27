import React from "react";
import styled from "styled-components";

const LabelBox = styled.div`
  height: 27px;
  line-height: 27px;
  padding: 0 6px;
  border-radius: 5px;
  font-weight: 700;
  color: ${props => props.theme.color[props.color] || '#FFFFFF'};
  background-color: ${props => props.theme.color[props.bgColor] || '#176FFF'};

  ${(props) => props.theme.window.mobile} {
    font-size: 14px;
    height: 24px;
    line-height: 24px;
  }
`;

const Label = ({label, color, bgColor}) => {
  return (
    <LabelBox color={color} bgColor={bgColor}>
      {label}
    </LabelBox>
  )
}

export default Label;