import React from "react";
import styled from "styled-components";
import Local from "./Local";
import Over from "./Over";

const Apply = ({ query }) => {
  return (
    <ApplyWrap>
      {query === 'local' ? (
        <Local />
      ) : query === 'over' && (
        <Over />
      )}
    </ApplyWrap>
  )
}

export default Apply;

const ApplyWrap = styled.div`
  
`;
