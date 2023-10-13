import React from "react";
import styled from "styled-components";
import theme from "../style/Theme";

const ContentInnerWrap = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 1280px;
  padding: 0 60px;
  margin: 0 auto;
  border-bottom: ${props => props.borderBottom && '1px solid #F0F0F0'};
  border-top: ${props => props.borderTop && '1px solid #F0F0F0'};
  ${(props) => props.theme.window.mobile} {
    padding: 0 24px;
    max-width: 100%;
    min-width: 0;
    border-bottom: 0;
  } 
`;


const ContentInner = ({ children, borderBottom, borderTop }) => {
  return (
    <ContentInnerWrap borderTop={borderTop} borderBottom={borderBottom}>
      {children}
    </ContentInnerWrap>
  )
}

export default ContentInner;