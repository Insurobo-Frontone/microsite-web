import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import PageScrollToTop from "./pageScrollToTop";
import { Outlet } from 'react-router-dom';
import ContentInner from "./ContentInner";


const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;


const Layout = ({children}) => {
  return (
    <>
      <ScrollToTop />
      <PageScrollToTop />
      <Wrap>
        <Header/>
        <Outlet />
        <ContentInner>
          {children}
        </ContentInner>
        <Footer />
      </Wrap>
    </>
  )
}

export default Layout;