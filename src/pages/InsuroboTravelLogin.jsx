import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import Layout from "../layout";
import ContentInner from "../layout/ContentInner";
import logo from '../assets/img/mainLogo.png';
import naverIcon from '../assets/img/insuroboTravel/naverIcon2.png';
import kakaoIcon from '../assets/img/insuroboTravel/kakaoIcon2.png';
import googleIcon from '../assets/img/insuroboTravel/googleIcon.png';

const Wrap = styled.div`
  padding: 140px 0 249px;

  ${(props) => props.theme.window.mobile} {
    padding: 100px 0 106px;
  }
`;

const LogoBox = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  > img {
    width: 183px;
  }
  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

const SocialLoginGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SocialLoginButton = styled.button`
  width: 480px;
  height: 66px;
  border-radius: 5px;
  padding: 0 12px;
  font-size: 20px;
  position: relative;
  color: #333333;
  margin-bottom: 10px;
  ::before {
    content: '';
    width: 56px;
    height: 56px;
    position: absolute;
    top: 5px;
    left: 12px;
    background-repeat: no-repeat;
    background-position: center;
  }
  ${props => props.type === 'naver' && css`
    background-color: #03CF5D;
    color: #FFFFFF;
    ::before {
      background-image: url(${naverIcon});
    }
  `}

  ${props => props.type === 'kakao' && css`
    background-color: #F9E000;
    ::before {
      background-image: url(${kakaoIcon});
    }
  `}

  ${props => props.type === 'google' && css`
    border: 1px solid #CECECE;
    margin-bottom: 0;
    ::before {
      background-image: url(${googleIcon});
    }
  `}

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 62px;
    font-size: 16px;
    ::before {
      width: 36px;
      height: 36px;
      top: 13px;
      left: 20px;
    }

    ${props => props.type === 'naver' && css`
      ::before {
        background-size: 16.15px;
      }
    `};
    ${props => props.type === 'kakao' && css`
      ::before {
        background-size: 25.9px;
      }
    `};
    ${props => props.type === 'google' && css`
      ::before {
        background-size: 21.86px;
      }
    `};
  }
`;

 
const InsuroboTravelLogin = () => {
  const location = useLocation();
  const pageState = location.state
  useEffect(() => {
    console.log(pageState)
    window.scrollTo(0, 0);
  }, [location.search, pageState]);

  return (
    <Layout>
      <Wrap>
        <ContentInner>
          <LogoBox>
            <img src={logo} alt='insurobo' />
          </LogoBox>
          <SocialLoginGroup>
            <SocialLoginButton type='naver'>
              네이버 로그인
            </SocialLoginButton>
            <SocialLoginButton type='kakao'>
              카카오 로그인
            </SocialLoginButton>
            <SocialLoginButton type='google'>
              구글 로그인
            </SocialLoginButton>
          </SocialLoginGroup>
        </ContentInner>
      </Wrap>
    </Layout>
  )
}

export default InsuroboTravelLogin;

