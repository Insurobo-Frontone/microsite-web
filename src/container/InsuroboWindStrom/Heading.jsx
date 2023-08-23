import React from "react";
import styled from "styled-components";

const Heading = ({children}) => {
  return (
    <HeadingContainer>
      <CustomTitle>
        {children}
      </CustomTitle>
    </HeadingContainer>
  )
}

export default Heading;

const HeadingContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 60px 0px;
`;

const CustomTitle = styled.h1`
  position: relative;
  width: fit-content;
  z-index: 1;
  font-size: 26px;
  > p {
    color: #1A1A1A;
    > span {
      font-weight: 700;
      color: inherit;
    }
  }
  ::before {
    content: '';
    display: block;
    width: 100%;
    height: 15px;
    background-color: rgb(197, 230, 255);
    position: absolute;
    bottom: 0px;
    left: 0;
    z-index: -1;
  }

  ${(props) => props.theme.window.mobile} {
    font-size: 20px;
    line-height: 29px;
  }
`;

