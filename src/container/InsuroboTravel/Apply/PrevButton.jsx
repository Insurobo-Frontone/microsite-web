import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import prevIcon from "../../../assets/icon/insuJoinPrevIcon.png";

const PrevButton = ({ type, step, join }) => {
  const navigate = useNavigate();
  const onClickPrev = () => {
    navigate(`/insuroboTravel/apply?step=${step}`, {
      state: {
        type: type,
        step: step,
        join: join,
      }
    })
  }
  return (
    <Button onClick={onClickPrev}><span />이전</Button>
  );
}
 
export default PrevButton;


const Button = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
  color: #333333;
  > span {
    display: inline-block;
    width: 36px;
    height: 36px;
    background-image: url(${prevIcon});
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 4px;
    
  }


  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 24px;
    > span {
      width: 24px;
      height: 24px;
      background-size: 9px;
    }
  }
`;
