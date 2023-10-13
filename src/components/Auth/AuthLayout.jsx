import React from 'react'
import styled from 'styled-components'
import Layout from '../../layout';
import ContentInner from '../../layout/ContentInner';

const Wrap = styled.div`
  background-color: #FFFFFF;
  width: 750px;
  padding: 65px 0 100px 0;
  margin: 0 auto;

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    padding: 42px 0 90px 0;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  > h1 {
    font-size: 30px;
    white-space: pre-wrap;
    text-align: center;
    color: #2F2F2F;
    :nth-child(2) {
      margin-top: 60px;
      color: #6F85E3;
    }     
  }

  ${props => props.theme.window.mobile} {
    > h1 {
      font-size: 20px;
      :nth-child(2) {
        margin-top: 20px;
      }     
    }
  }
`;

function AuthLayout({children, title, subTitle}) {
  return (
    <Layout>
      <ContentInner>
        <Wrap>
          <TitleBox>
            <h1>{title}</h1>
            {subTitle && (
              <h1>{subTitle}</h1>
            )}
          </TitleBox>
            {children}
        </Wrap>
      </ContentInner>
    </Layout>
  )
}

export default AuthLayout