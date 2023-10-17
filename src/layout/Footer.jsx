import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ContentInner from './ContentInner';
import logo from '../assets/img/mainLogo.png';

const FooterWrap = styled.footer`
  padding-top: 30px;
  padding-bottom: 24px;
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 10px;
  }
`;

const Gnb = styled.ul`
  display: flex;
  padding-bottom: 20px;
  > li > a {
    display: block;
    color: #2D2D2D;
    font-size: 14px;
    font-weight: 700;
    position: relative;
    margin-right: 30px;
  }

  ${(props) => props.theme.window.mobile} {
    > li > a {
      margin-right: 20px;
    }
  }
`;

const Info = styled.div`
  padding-bottom: 20px;
  > p {
    font-size: 12px;
    font-weight: 400;
    display: flex;
    color: #2D2D2D;
  }
`;

const PolicyArea = styled.div`
  font-size: 12px;
  color: #2D2D2D;
  padding-bottom: 51px;
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 30px;
  }
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  > p {
    padding-left: 20px;
    color: #2D2D2D;
    font-size: 14px;
    font-weight: 500;
  }
  ${(props) => props.theme.window.mobile} {
    > img {
      width: 81px;
    }
    > p {
      letter-spacing: -0.5px;
    }
  }
`;


function Footer() {
  return (
    <ContentInner borderTop>
      <FooterWrap>
        <Gnb>
          <li><Link to='https://company.insurobo.co.kr'>회사소개</Link></li>
          <li><Link to='/policy/privacy'>개인정보처리방침</Link></li>
          <li><Link to='/policy/service'>이용약관</Link></li>
        </Gnb>
        <Info>
          <p>(주)인슈로보 서울특별시 강남구 논현로 75길 10, 영창빌딩 4층</p>
          <p>사업자등록번호 690-87-01268</p>
          <p>대표자:서 민 대표번호: 070-4126-3333 메일:info@insurobo.com</p>
        </Info>
        <PolicyArea>
          (주)인슈로보(이하‘회사’라 한다.)는 인슈로보 앱 서비스(이하 ‘서비스’라 한다.)를 제공함에 있어 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 “정보통신망법”이라 한다.), 개인정보보호법, 인용정보 이용 및 보호에 관한<br />
          법률 등 개인정보 보호 법령을 철저히 준수하면 관련 법규에 의거한 개인정보취급방침을 다음과 같이 두고 있습니다. 회사는 개인정보취급방침을 개정하는 경우 회사가 운영하는 사이트(이하 “사이트”라 한다.) 혹은 서비스의 공지사항<br />
          (또는 개별공지)를 통해 공지할 것입니다. 
        </PolicyArea>
        <Foot>
          <img src={logo} alt='insurobo' />
          <p>⒞ INSUROBO All Rights Reserved.</p>
        </Foot>
      </FooterWrap>
    </ContentInner>
  )
}

export default Footer
