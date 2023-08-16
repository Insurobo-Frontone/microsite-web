import React from "react";
import styled from "styled-components";

const ItemInfo = ({
  zipCode,
  roadAddr,
  jibunAddr,
  onClick
}) => {
  return (
    <Wrap onClick={onClick}>
      <ZipCode>{zipCode}</ZipCode>
      <BadgeWrap>
        <Badge>도로명</Badge>
        <p>{roadAddr}</p>
      </BadgeWrap>
      <BadgeWrap>
        <Badge>지번</Badge>
        <p>{jibunAddr}</p>
      </BadgeWrap>
    </Wrap>
  )
}

export default ItemInfo;

const Wrap = styled.div`
  margin-top: 10px;
  padding: 15px;
  background-color: #FFFFFF;
  cursor: pointer;
`;

const ZipCode = styled.p`
  font-weight: 700;
  letter-spacing: 0px;
  white-space: pre-wrap;
  color: rgb(255, 96, 96);
  font-size: 15px;
  line-height: 27px;
`;


const BadgeWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  > p {
    font-weight: 400;
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: #000000;
    font-size: 12px;
    line-height: 18px;
  }
`;

const Badge = styled.div`
  width: 55px;
  height: 26px;
  margin-right: 10px;
  background-color: #FFFFFF;
  color: #2EA5FF;
  border-radius: 5px;
  border: 1px solid #F0F0F0;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;


