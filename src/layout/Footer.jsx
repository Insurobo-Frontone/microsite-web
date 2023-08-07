import React from 'react';
import styled from 'styled-components';
import Section from '../components/Content';
import { Text } from '../components/Font';
import cs from '../assets/img/customer_service_center_icon.png';
import useWindowSize from '../hooks/useWindowSize';
import { Link } from 'react-router-dom';


const FooterWrap = styled.footer`
  display: flex;
  justify-content: space-between;


  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Menu = styled.ul`
  display: flex;

  > li, a {
    color: #FFFFFF;
    font-size: 0.78vw;
    font-weight: 400;
    position: relative;
    margin-right: 0.7vw;
  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 9%;
    > li {
      font-size: 0.8666666666666667rem;
    }
  }
`;

const Info = styled.div`
  margin-bottom: 9.5%;
  > div {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  p {
    color: #FFFFFF;
    font-size: 0.78vw;
    font-weight: 400;
    display: flex;
    > span {
      color: #FFFFFF;
      position: relative;
      margin-right: 1vw;
    }
  }
  br {
    display: none;
  }

  ${(props) => props.theme.window.mobile} {
    margin-bottom: 11%;
    > div {
      width: 80%;
    }
    p {
      font-size: 0.8666666666666667rem;
    }

    br {
      display: block;
    }
  }
`;

const RightContent = styled.div`
  > div {
    display: flex;
    padding-bottom: 24%;
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      padding-bottom: 11%;
    }
  }
`;


const Icon = styled.div`
  width: 3.23vw;
  height: 3.4vw;
  background-image: url(${cs});
  background-size: contain;
  margin-right: 18px;

  ${(props) => props.theme.window.mobile} {
    width: 30px;
    height: 31px;
    margin-right: 14px;
    align-self: center;
  }
`;


function Footer() {
  const {width} = useWindowSize();
  return (
    <Section
      color='BG_BLACK'
      top={width > 768 ? '5%' : '6.2%'}
      bottom={width > 768 ? '2%' : '15.451%'}
    >
      <FooterWrap>
        <LeftContent>
          <Menu>
            <li><Link to='/policy/service'>이용안내</Link></li>
            <li><Link to='/policy/privacy'>개인정보처리방침</Link></li>
          </Menu>
          <Info>
            <div>
              <p><span>상 호 명 |</span>(주)인슈로보</p>
              <p><span>대 표 |</span>서 민</p>
            </div>
            <div>
              <p><span>이 메 일 |</span>info@insurobo.com</p>
            </div>
            
            <p>06247 ) <br />서울특별시 강남구 논현로75길 10 4층</p>
            <p>사업자등록번호 690-87-01268</p>
          </Info>
        </LeftContent>
        <RightContent>
          <div>
            <Icon />
            <div>
              <Text size='0.78vw' color='WHITE' bold='350'>고객센터</Text>
              <Text size='1.2vw' color='WHITE' bold='700'>070-4126-3333</Text>
            </div>
          </div>
          <Text size='0.78vw' color='WHITE' bold='400'>Copyright@INSUROBO All Rights Reserved.</Text>
        </RightContent>
      </FooterWrap>
    </Section>
  )
}

export default Footer
