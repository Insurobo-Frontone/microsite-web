import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const TabMenu = () => {
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

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <TabMenuWrap>
      {step.map((dep) => (
        // <li onClick={() => navigate(`/insuroboTravel/apply${location.search}${dep.id}`)}>
        //   {dep.title}
        <li></li>
        // </li>
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
