import React from "react";
import styled from "styled-components";
import { NavLink, useSearchParams } from "react-router-dom";

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
  return (
    <TabMenuWrap>
      {menu.map((dep) => (
        <li key={dep.id}>
          <NavLink
            to={`/insuroboTravel/apply?type=${type}&step=${dep.id}`}
            style={() => {
              if (step === dep.id) {
                return {
                  backgroundColor: '#2EA5FF',
                  color: '#FFFFFF'
                }
              } else {
                return {
                  backgroundColor: '#FFFFFF',
                  color: '#2EA5FF'
                }
              }
            }}
          >{dep.title}</NavLink>
        </li>
      ))}
    </TabMenuWrap>
  )
}

export default TabMenu;

const TabMenuWrap = styled.ul`
  display: flex;
  align-items: flex-end;
  > li {
    margin-right: 6px;
    :last-child {
      margin-right: 0px;
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 150px;
      height: 54px;
      font-size: 20px;
      border-radius: 5px 5px 0 0;
      border: 1.5px solid #2EA5FF;
    }
  }

`;
