import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TitleSet from '../TitleSet';
import { Title } from '../Font';

import duty from '../../assets/img/duty.png';
import must from '../../assets/img/must.png';
import invest from '../../assets/img/invest.png';
import ContentInner from '../../layout/ContentInner';
import windstorm from '../../assets/icon/freeApplyBtnIcon.png';

const data = [
  {
    id: 1,
    title: '의무보험',
    text: `<p>업종별 의무보험<br /><span>꼭!</span> 챙기세요</p>`,
    link: '/insuranceInfo?item=duty',
    img: duty,
    class: 'duty'
  },
  {
    id: 2,

    title: '필수보험',
    text: `<p>사업장 <span>안전!</span><br />선택이 아닌 <span>필수</span></p>`,
    link: '/insuranceInfo?item=must',
    img: must,
    class: 'must'
  },
  {
    id: 3,
 
    title: '재테크보험',
    text: `<p>저축과 <span>위험 보장</span>을<br />동시에!</p>`,
    link: '/insuranceInfo?item=invest',
    img: invest,
    class: 'invest'
  },
];

const PlazaWrap = styled.div`
  padding: 70px 0;

  ${(props) => props.theme.window.mobile} {
    padding: 30px 0;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  
  ${(props) => props.theme.window.mobile} {
    display: block;
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;
  
  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    > a {
      display: block;
      margin-bottom: 10px;
      :last-child {
        margin-bottom: 0;
      }
    }
  }

`;

const Card = styled.div`
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
  &.invest {
    background-position: -98px 0;
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

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 132px;
    background-size: 103.2051282051282%;
    &.duty {
      background-position: calc(100% + 5px) calc(100% + 57px);
    }
    &.must {
      background-position: calc(100% + 5px) calc(100% + 62px);
    }
    &.invest {
      background-position: center calc(100% + 24px);
    }
    > div {
      > p {
        font-size: 16px;
        line-height: 23px;
      }
    }
    h1 {
      font-size: 24px;
      align-self: flex-end;
    }
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
  return (
    <ContentInner>
      <PlazaWrap>
        <TitleWrap>
          <TitleSet
            title='사장님! 꼭 들어야 하는 보험이 있어요!'
            text='의무적으로 들어야 하는 보험 확인하세요.'
            label='Go!'
          />
        </TitleWrap>
        <CardList>
          {data.map((dt) => (
            <Link to={dt.link} key={dt.id} >
              <Card 
                bgImg={dt.img}
                className={dt.class}
              >
                <Overlay />
                <div dangerouslySetInnerHTML={{ __html: dt.text }} />
                <Title>{dt.title}</Title>
            </Card>
          </Link>
          ))}
        </CardList>
      </PlazaWrap>
    </ContentInner>
      

  )
}

export default Plaza;