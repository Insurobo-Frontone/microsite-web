import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import theme from '../style/Theme';
import ScrollToTop from "./ScrollToTop";
import PageScrollToTop from "./pageScrollToTop";
import { Outlet } from 'react-router-dom';
import QuickMenu from "./QuickMenu";

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${props => theme.color[props.color] || '#FFFFFF'};
`;


const Layout = ({children, color}) => {
  
  return (
    <>
      <ScrollToTop />
      <PageScrollToTop />
      <QuickMenu />
      <Wrap color={color}>
        <Header/>
          <Outlet />
          {children}
        <Footer />
      </Wrap>
    </>
  )
}

export default Layout;