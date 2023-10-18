import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { useSearchParams, useNavigate } from "react-router-dom";
import TravelPageContext from "../../../context/travelPageContext";

const TabMenu = ({ type }) => {
  const menu = [
    {
      id: '1',
      title: '간편계산',
    },
    {
      id: '2',
      title: '보험가입',
    },
    {
      id: '3',
      title: '마이페이지',
    },
    {
      id: '4',
      title: 'Q&A',
    },
  ];

  const [searchParams] = useSearchParams();
  const step = searchParams.get("step");
  const navigate = useNavigate();
  const { state, actions } = useContext(TravelPageContext);
  const nextStep = (step) => {
    switch (step) {
      case '1' :
        actions.setPage(1);
        navigate(`/insuroboTravel/apply?type=${type}&step=1`);
      break;
      case '2' :
        if (state.page === 1) {
          alert('간편계산을 먼저 진행해주세요');
        } else {
          actions.setPage(2);
          navigate(`/insuroboTravel/apply?type=${type}&step=2`);
        }
         
      break;
    }
  }
  return (
    <TabMenuWrap>
      {menu.map((dep) => (
        <MenuButton 
          key={dep.id} 
          onClick={() => nextStep(dep.id)}
          active={step === dep.id}
        >
          {dep.title}  
        </MenuButton>
      ))}
    </TabMenuWrap>
  )
}

export default TabMenu;

const TabMenuWrap = styled.ul`
  display: flex;
  align-items: flex-end;
`;

const MenuButton = styled.li`
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 54px;
  font-size: 20px;
  border-radius: 5px 5px 0 0;
  border: 1.5px solid #2EA5FF;
  background-color: #FFFFFF;
  color: #2EA5FF;
  ${props => props.active && css`
    background-color: #2EA5FF;
    color: #FFFFFF;
  `}
  :last-child {
    margin-right: 0px;
    
    
  }
`;

