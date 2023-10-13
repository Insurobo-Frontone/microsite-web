import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TabMenu = ({ type }) => {
  const step = [
    {
      id: 1,
      title: '간편계산',
    },
    {
      id: 2,
      title: '간편계산',
    },
    {
      id: 3,
      title: '마이페이지',
    },
    {
      id: 4,
      title: 'Q&A',
    },
  ];

  return (
    <TabMenuWrap>
      {step.map((dep) => (
        <li>
          <NavLink 
            to={`/insuroboTravel/apply?${type}=${dep.id}`}
            style={({isActive}) => {
              return {
                backgroundColor: isActive ? '#2EA5FF' : '#FFFFFF',
                color: isActive ? '#FFFFFF' : '#2EA5FF'
              }
            }}
            end
          >{dep.title}</NavLink>
        </li>
      ))}
    </TabMenuWrap>
  )
}

export default TabMenu;

const TabMenuWrap = styled.ul`
  display: flex;
  > li {
    
  }

`;
