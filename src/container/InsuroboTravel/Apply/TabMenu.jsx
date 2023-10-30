import React from "react";
import styled, { css } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";

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

  const location = useLocation();
  const stepNum = location.state.step;
  const navigate = useNavigate();
  const { reset } = useFormContext();

  // apply nav에서 페이지 이동
  const nextStep = (step) => {
    switch (step) {
      case '1' :
        if (stepNum === '2') {
          alert('간편계산을 다시 시작하면\n모든 정보가 초기화됩니다\n그래도 진행하시겠습니까?');
          reset();
          navigate(`/insuroboTravel/apply?step=1`, {
            state: {
              type: type,
              step: '1',
              join: ''
            }
          });
        } else {
          navigate(`/insuroboTravel/apply?step=1`, {
            state: {
              type: type,
              step: '1',
              join: ''
            }
          });
        }
        
      break;
      case '2' :
        if (stepNum === '1') {
          alert('간편계산을 먼저 진행해주세요');
        } else {
          navigate(`/insuroboTravel/apply?step=2`, {
            state: {
              type: type,
              step: '2',
              join: ''
            }
          });
        }
      break;
      case '3' :
        if (stepNum === '1' || '2') {
          navigate(`/insuroboTravel/apply/myPage/login`)
        } else {
          navigate(`/insuroboTravel/apply/myPage`, {
            state: {
              type: type,
              step: '3',
            }
          });
        }
        
        
      break;
      case '4' :
        navigate(`/insuroboTravel/apply/qna`, {
          state: {
            type: type,
            step: '4'
          }
        });
      break;
      default :
      break
    }
  }
  return (
    <TabMenuWrap>
      {menu.map((dep) => (
        <MenuButton 
          key={dep.id} 
          onClick={() => nextStep(dep.id)}
          active={stepNum === dep.id}
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

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    justify-content: center;
  }
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

  ${(props) => props.theme.window.mobile} {
    width: auto;
    height: 43px;
    padding: 10px;
    border: none;
    background-color: #2EA5FF;
    color: #FFFFFF;
    font-size: 16px;
    margin-right: 2px;
    ${props => props.active && css`
      background-color: #FFFFFF;
      color: #393939;
    `}
  }
`;

