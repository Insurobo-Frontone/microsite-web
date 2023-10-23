import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import prevIcon from "../../../assets/icon/insuJoinPrevIcon.png";
import InsuJoinStep1 from "./InsuJoinStep1";
import InsuJoinStep2 from "./InsuJoinStep2";
import InsuJoinStep3 from "./InsuJoinStep3";

const InsuJoin = ({ type }) => {
  const { watch } = useFormContext();
  const [searchParams] = useSearchParams();
  const join = searchParams.get("join");
  const navigate = useNavigate();
  const menu = [
    { id: '1', title: '신청' },
    { id: '2', title: '확인' },
    { id: '3', title: '결제' }
  ];

  useEffect(() => {
    if (watch('personType') === '1') {

    }
  }, []);

  const nextStep = (step) => {
    switch (step) {
      case '1' :
        navigate(`/insuroboTravel/apply?type=${type}&step=2&join=${step}`);
      break;
      case '2' :
        navigate(`/insuroboTravel/apply?type=${type}&step=2&join=${step}`);
      break;
      case '3' :
        navigate(`/insuroboTravel/apply?type=${type}&step=2&join=${step}`);
      break;
      default: break;
    }
  }

  return (
    <>
      <JoinStepNav>
        <PrevButton onClick={() => navigate(-1)}><span />이전</PrevButton>
        <ul>
          {menu.map((dep) => (
            <MenuButton 
              key={dep.id} 
              onClick={() => nextStep(dep.id)}
              active={join === dep.id}
            >
              {dep.title}
            </MenuButton>
          ))}
        </ul>
      </JoinStepNav>
      {join === '1' ? (
        // 신청
        <InsuJoinStep1 type='local' />  
      ) : (
        // 확인
        join === '2' ? (
          <InsuJoinStep2 type='local' />
        ) : (
          join === '3' && (
            <InsuJoinStep3 type='local' />
          )
        )
      )}
        
    </>
  );
}
 
export default InsuJoin;

const JoinStepNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > ul {
    display: flex;
  }
`;

const PrevButton = styled.div`
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
`;

const MenuButton = styled.li`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 16px;
  border-radius: 50%;
  background-color: #E5E5E5;
  color: #FFFFFF;
  ${props => props.active && css`
    background-color: #2EA5FF;
  `}
  :last-child {
    margin-right: 0px;
  }
`;



