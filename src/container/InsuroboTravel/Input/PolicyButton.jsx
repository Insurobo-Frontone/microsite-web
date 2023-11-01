import React from "react";
import styled, { css } from "styled-components";
import Input from ".";
import selectIcon from '../../../assets/icon/insuroboTravelSelectIcon.png';

const PolicyButton = ({ onClick, title, active }) => {
  return (
    <>
      <Input onClick={onClick} type='button'>
        <Title>{title}</Title>
        <SelectArrow active={active} />
      </Input>
    </>
  );
}

export default PolicyButton;

const Title = styled.p`
  font-size: 20px;
  color: #333333;
  font-weight: 300;
  line-height: 30px;
  width: 427px;

  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 23px;
    font-weight: 400;
    width: 100%;
  }
`;

const SelectArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 28px;
  top: 21px;

  ${props => props.active && css`
    transform: rotate(-90deg);
  `}

  ${(props) => props.theme.window.mobile} {
    width: 20px;
    height: 20px;
    background-size: 70%;
    right: 10px;
    top: 12px;
    transform: rotate(-90deg);
    ${props => props.active && css`
      transform: rotate(0);
    `}
  }
`;


