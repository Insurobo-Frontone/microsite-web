import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import InsuJoinStep1 from "./InsuJoinStep1";
import InsuJoinStep2 from "./InsuJoinStep2";
import InsuJoinStep3 from "./InsuJoinStep3";
import PrevButton from "../PrevButton";
import { getTravelMenu, setTravelMenu } from "../../../Storage/InsuTravel";

const InsuJoin = ({ type }) => {
  const location = useLocation();
  const pageState = location.state;
  const menu = [
    { id: '1', title: '신청' },
    { id: '2', title: '확인' },
    { id: '3', title: '결제' }
  ];
  const travelLocation = {
    path: location.pathname,
    search: location.search,
    state: location.state
  }
  useEffect(() => {
    setTravelMenu(travelLocation);
  }, [pageState]);
  return (
    <>
      <JoinStepNav>
        <PrevButton 
          link={pageState.join === '1' ? '/insuroboTravel/apply?step=1' : false}
          state={pageState.join === '1' ? {
            type: type,
            step: '1',
          } : false}
        />
        <ul>
          {menu.map((dep) => (
            <MenuButton 
              key={dep.id} 
              active={pageState.join === dep.id}
            >
              {dep.title}
            </MenuButton>
          ))}
        </ul>
      </JoinStepNav>
      {pageState.join === '1' ? (
        // 신청
        <InsuJoinStep1 type={type} />  
      ) : (
        // 확인
        pageState.join === '2' ? (
          <InsuJoinStep2 type={type} />
        ) : (
          // 결제 
          pageState.join === '3' && (
            <InsuJoinStep3 type={type} />
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

  ${(props) => props.theme.window.mobile} {
    margin-right: 8px;
    width: 32px;
    height: 32px;
    font-size: 12px;
    line-height: 1;
  }
`;



