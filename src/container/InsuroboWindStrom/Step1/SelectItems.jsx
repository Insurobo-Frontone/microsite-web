import React, { useState } from "react";
import styled, { css } from "styled-components";
import store from '../../../assets/icon/insuroboWindstorm/store.png';
import factory from '../../../assets/icon/insuroboWindstorm/factory.png';
import circleCheckIcon from '../../../assets/icon/insuroboWindstorm/circleCheckIcon.png';

const SelectItems = () => {
  const [click, setClick] = useState(true);

  return (
    <Wrap>
      <div onClick={() => setClick(true)}>
        <Icon color={click}>
          <img src={store} alt='일반상가' />
          {click && (
            <CircleIcon />
          )}
        </Icon>
        <Title>일반상가</Title>
      </div>
      <div onClick={() => setClick(false)}>
        <Icon color={!click}>
          <img src={factory} alt='공장' />
          {!click && (
            <CircleIcon />
          )}
        </Icon>
        <Title>공장</Title>
      </div>
    </Wrap>
  ) 
}

export default SelectItems;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 60px;
  > div {
    text-align: center;
  }
  > div:first-child {
    margin-right: 40px;
  }
  > div:last-child {
    margin-left: 40px;
  }
`;

const Title = styled.p`
  font-size: 14px;
  line-height: 26px;
  font-weight: 700;
  color: #808080;
`;

const Icon = styled.div`
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid #F0F0F0;
  ${props => props.color && css`
    border: 2px solid #2EA5FF;
  `}
  > img {
    max-width: 50.55px;
  }
`


const CircleIcon = styled.div`
  width: 22.5px;
  height: 22.5px;
  background-image: url(${circleCheckIcon});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
`;






