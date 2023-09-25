import React from "react";
import styled from "styled-components";

const ContentInnerWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 1280px;
  padding: 0 60px;
  margin: 0 auto;
`;


const ContentInner = ({ children }) => {
  return (
    <ContentInnerWrap>
      {children}
    </ContentInnerWrap>
  )
}

export default ContentInner;
