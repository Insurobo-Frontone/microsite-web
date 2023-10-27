import React from "react";
import styled, { css } from "styled-components";

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

    ${props => props.apply && css`
      padding: 0;
    `}
  } 
`;


const ContentInner = ({ children, borderBottom, borderTop, apply }) => {
  return (
    <ContentInnerWrap borderTop={borderTop} borderBottom={borderBottom} apply={apply}>
      {children}
    </ContentInnerWrap>
  )
}

export default ContentInner;
