import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TitleSet from '../TitleSet';
import { Title } from '../Font';

import duty from '../../assets/img/duty.png';
import must from '../../assets/img/must.png';
import invest from '../../assets/img/invest.png';
import ContentInner from '../../layout/ContentInner';

const data = [
  {
    id: 1,
    title: '의무보험',
    text: `<p>업종별 의무보험<br /><span>꼭!</span> 챙기세요</p>`,
    link: '/insuranceInfo?item=duty',
    img: duty
  },
  {
    id: 2,

    title: '필수보험',
    text: `<p>업종별 의무보험<br /><span>꼭!</span> 챙기세요</p>`,
    link: '/insuranceInfo?item=must',
    img: must
  },
  {
    id: 3,
 
    title: '재테크보험',
    text: `<p>업종별 의무보험<br /><span>꼭!</span> 챙기세요</p>`,
    link: '/insuranceInfo?item=invest',
    img: invest
  },
];

const PlazaWrap = styled.div`
  padding: 70px 0;
`;

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  


`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 373px;
  height: 326px;
  padding: 24px;
  border-radius: 15px;
  overflow: hidden;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  z-index: -2;
  
  :last-child {
    background-position: -100px 50%;
  }
  > div {
    > p {
      color: #FFFFFF;
      font-size: 23px;
      white-space: pre-wrap;
      font-weight: 300;
      > span {
        color: #FFFFFF;
        font-weight: 700;
      }
    }
  }
  > h1 {
    color: #FFFFFF;
    font-size: 30px;
    align-self: flex-end;
  }
  
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.58);
  position: absolute;
  inset: 0;
  z-index: -1;
`;


function Plaza() {
  let navigate = useNavigate();

  return (
    <ContentInner>
      <PlazaWrap>
        <TitleSet
          title='사장님! 어떤 보험에 관심이 있으신가요?'
          text='다양한 보험을 직접 확인하고 비교해보세요!'
          label='Go!'
        />
        <CardList>
          {data.map((dt) => (
            <Card 
              key={dt.id} 
              onClick={() => navigate(dt.link)}
              bgImg={dt.img}
            >
              <Overlay />
              <div dangerouslySetInnerHTML={{ __html: dt.text }} />
              <Title>{dt.title}</Title>
            </Card>
          ))}
        </CardList>
      </PlazaWrap>
    </ContentInner>
      

  )
}

export default Plaza