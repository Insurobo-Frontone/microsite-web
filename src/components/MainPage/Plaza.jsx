import React from 'react'
import styled from 'styled-components'
import Content from '../Content';
import TitleSet from '../TitleSet';

import icon1 from '../../assets/img/bell.png';
import icon2 from '../../assets/img/speaker.png';
import icon3 from '../../assets/img/wallet.png';
import { Text, Title } from '../Font';
import { useScroll } from '../../hooks/useScroll';
import bg_R from '../../assets/img/bg_Img_R.png';

import useWindowSize from '../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';


const data = [
  {
    id: 1,
    icon: icon1,
    title: '의무보험',
    text: '업종별 의무보험\n꼭! 챙기세요',
    link: '/insuranceInfo?item=duty',
    className: 'delay1'
  },
  {
    id: 2,
    icon: icon2,
    title: '필수보험',
    text: '사업장 안전!\n선택이 아닌 필수',
    link: '/insuranceInfo?item=must',
    className: 'delay2'
  },
  {
    id: 3,
    icon: icon3,
    title: '재테크보험',
    text: '저축과\n위험보장을 동시에',
    link: '/insuranceInfo?item=invest',
    className: 'delay3'
  },
]

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 8.76% 0;

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 18.5% 0 18.3%;
  }
`;

const Card = styled.li`
  /* width: 29.71768202080238%; */
  width: 27.77777777777778%;
  /* min-width: 210px; */
  border-radius: 18px;
  background-color: #FFFFFF;
  box-shadow: 0 0 26px 0 rgba(0, 0, 0, 0.1);
  padding: 2.3% 2%;
  opacity: 0;
  transform: translate(0, 50px);
  transition: transform 1.5s ease, opacity 1s ease;
  flex-shrink: 1;
  cursor: pointer;
  &.delay1 {
    transform: translate(0, 0);
    opacity: 1;
    transition-delay: 0.4s;
  }
  &.delay2 {
    transform: translate(0, 0);
    opacity: 1;
    transition-delay: 0.6s;
  }
  &.delay3 {
    transform: translate(0, 0);
    opacity: 1;
    transition-delay: 0.8s;

  }
  > p {
    white-space: pre-wrap;
    padding-top: 17.3%;
    padding-bottom: 13.5%;
    font-size: 1.2vw;
  }
  > h1 {
    text-align: end;
    font-size: 1.6vw;
  }

  ${(props) => props.theme.window.mobile} {
    width: 93.75%;
    margin-bottom: 45px;
    padding: 23px;

    :last-child {
      margin-bottom: 0;
    }

    > p {
      padding-top: 12px;
      padding-bottom: 27px;
      font-size: 15px;
    }
    > h1 {
      font-size: 18px;
    }
  }
`;

const ImgWrap = styled.div`
  width: 26.9%;
  
  ${(props) => props.theme.window.mobile} {
    width: 71px;
    height: 61px;
  }
`;

function Plaza({scrollY}) {
  let navigate = useNavigate();
  const { y } = useScroll();
  const { width } = useWindowSize();
  return (
    <Content 
      top={width > 768 ? '10.66%' : '16.5%'} 
      bottom={width > 768 ? '5.8%' : '0%'}
      bgImg={bg_R}
      scrollY={scrollY}
      // min={width > 768 && '1440px'}
    >
      <TitleSet
        small_title='사업장 안전지킴이'
        big_title1='사장님 보험'
        big_title2='Plaza'
      />
      <CardList>
        {data.map((dt) => (
          <Card 
            key={dt.id} 
            className={y > scrollY ? `${dt.className}` : null}
            onClick={() => navigate(dt.link)}
          >
            <ImgWrap>
              <img src={dt.icon} alt='아이콘' />
            </ImgWrap>
            <Text bold='400' color='BLACK4'>{dt.text}</Text>
            <Title>{dt.title}</Title>
          </Card>
        ))}
      </CardList>
    </Content>
  )
}

export default Plaza