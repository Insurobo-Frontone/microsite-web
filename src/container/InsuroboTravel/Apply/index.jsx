import React from "react";
import styled from "styled-components";
import Local from "./Local";
import Over from "./Over";


const Apply = ({ type }) => {
  return (
    <ApplyWrap>
      {type === 'local' ? (
        <Local type={type} />
      ) : type === 'over' && (
        <Over />
      )}
    </ApplyWrap>
  )
}

export default Apply;

const ApplyWrap = styled.div`
  
`;
