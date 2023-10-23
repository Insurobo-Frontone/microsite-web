import React from "react";
import styled from "styled-components";
import Input from ".";
import BasicInput from "./BasicInput";
import selectIcon from '../../../assets/icon/insuroboTravelSelectIcon.png';

const PolicyButton = ({ name, onClick, value, active }) => {
  return (
    <>
      <Input onClick={onClick} type='button'>
        <BasicInput
          name={name}
          value={value}
          readOnly
        />
        <SelectArrow active={active} />
      </Input>
    </>
  );
}

export default PolicyButton;

const SelectArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 28px;
  top: 21px;
`;
