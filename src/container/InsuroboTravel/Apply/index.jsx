import React from "react";
import styled from "styled-components";
import Local from "./Local";
import Over from "./Over";
import TabMenu from "./TabMenu";


const Apply = ({ query }) => {
  return (
    <ApplyWrap>
      <TabMenu />
      {query === '?local=1' ? (
        <Local />
      ) : query === '?over' && (
        <Over />
      )}
    </ApplyWrap>
  )
}

export default Apply;

const ApplyWrap = styled.div`
  background-color: #FFFFFF;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);
`;
