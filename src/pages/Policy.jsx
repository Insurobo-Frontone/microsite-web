import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Layout from '../layout';
import Privacy from '../components/Policy/Privacy';
import Service from '../components/Policy/Service';

const Content = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  ${(props) => props.theme.window.mobile} {
    width: 92%;
  }
`;

function Policy() {
  const location = useLocation();
  return (
    <Layout>
      <Content>
        {location.pathname === '/policy/privacy' ? (<Privacy />) : 
          <>
            {location.pathname === '/policy/service' ? (<Service />) : null}
          </>
        } 
      </Content>
    </Layout>
  );
};

export default Policy;

