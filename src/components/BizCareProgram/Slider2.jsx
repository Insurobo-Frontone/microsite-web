import React from 'react'
import styled from 'styled-components';
import titleIcon from '../../assets/icon/titleIcon.png';

const cardData = [
  {
    id: 1,
    title: '주요내용',
    list1: '비즈케어 : 3개년 재무제표 분석을 통한 기업의 경영상태 파악 및 현재와 미래 기업가치 평가',
    list2: '기업의 현재상황/위험/문제점 등을 파악',
    class: 'disc'
  },
  {
    id: 2,
    title: '기대효과',
    list1: '경영상 이슈 발견 및 문제 해결',
    list2: '기업 신용 개선으로 경쟁력 강화 및 경영 체질 개선',
    list3: '유동성 확보를 위한 사전 점검 지표로 활용',
    list4: '가결산 및 결산전 기초자료로 활용',
    list5: '기업의 건전한 성장 및 발전',
    class: 'disc'
  },
  {
    id: 3,
    title: '진행절차',
    list1: '희망 기업 신청서 접수',
    list2: '접수 기업과 일정 조율 후 방문',
    list3: '비즈케어 보고서 제공',
    list4: '희망 기업 대상 절세 방안 및 자금조달 등 실무 진행',
    class: 'decimal'
  },
]
function Slider2() {
  return (
    <Wrapper>
      <MainTitle>
        <SlideTitle>비즈케어 프로그램&nbsp;</SlideTitle>
        <SlideTitle bold='700'>주요내용, 기대효과, 진행절차</SlideTitle>
        <Line />
      </MainTitle>
      <CardList>
        {cardData.map(data => (
          <Card key={data.id}>
            <TitleBox>
              <h2>{data.title}</h2>
            </TitleBox>
            <ListBox className={data.class}>
              {data.list1 && (<li>{data.list1}</li>)}
              {data.list2 && (<li>{data.list2}</li>)}
              {data.list3 && (<li>{data.list3}</li>)}
              {data.list4 && (<li>{data.list4}</li>)}
              {data.list5 && (<li>{data.list5}</li>)}
            </ListBox>
          </Card>
        ))}
      </CardList>
      <TextBox>
        <p># 진단 단계(1~3) : 희망 기업에 한해 인슈로보에서 비용 부담</p>
        <p># 개선 단계(4) : 진단에 따른 개선 및 결과에 대한 비용은 협의 후 수혜 기업 부담</p>
      </TextBox>
    </Wrapper>
  )
}

export default Slider2;

const Wrapper = styled.div`
  overflow: hidden;
`;

const MainTitle = styled.div`
  display: flex;
  flex-flow: row wrap;
  ${(props) => props.theme.window.mobile} {
    flex-flow: column;
  }
`;
const SlideTitle = styled.p`
  font-size: 2.1vw;
  color: #404040;
  font-weight: ${props => props.bold || 400};
  line-height: 2.815vw;
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
    line-height: 22px;
  }
`;



const Line = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 0.267vw;
  ::before {
    content: '';
    display: block;
    width: 40.16vw;
    height: 0.365vw;
    background: #6F85E3;
    margin-right: 10px;
  }
  ::after {
    content: '';
    display: block;
    width: 1.88vw;
    height: 1.46vw;
    background-image: url(${titleIcon});
    background-repeat: no-repeat;
    background-size: contain;
  }
  ${(props) => props.theme.window.mobile} {
    margin-top: 0;
    justify-content: flex-start;
    align-items: center;
    ::before {
      width: 61%;
      height: 3px;
      margin: 6px 5px 0 0;
    }
    ::after {
      width: 18px;
      height: 13px;
      background-size: contain;
    }
  }
`;

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2.345vw 0 1.825vw;
  /* padding: 3.56% 0 2.9%; */
  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    padding: 15px 0 5px;
  }
`;

const Card = styled.li`
  width: 19.74vw;
  height: 21.36vw;
  background: #FFFFFF;
  padding: 2.345vw 0.835vw 1.305vw;
  /* padding: 3.74% 1.35% 0; */
  align-items: center;
  box-shadow: 0 4px 19px 0 rgba(0, 0, 0, 0.25);

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 68.08510638297872%;
    padding: 8px 10px;
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 13px 0 rgba(0, 0, 0, 0.25);
  }
`;

const ListBox = styled.ul`
  > li {
    display: flex;
    position: relative;
    /* line-height: 140%; */
    font-weight: 400;
  }
  &.disc > li {
    margin-left: 1.045vw;
    font-size: 1.045vw;
    ::before {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0.68vw;
      left: -0.94vw;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #3E3E3E;
      
    }
    
  }
  &.decimal {
    counter-reset: my-counter;
    > li {
      font-size: 1.045vw;
      ::before {
        counter-increment: my-counter;
        content: counter(my-counter);
        margin: 0 0.785vw;
      }
      ::after {
        content: '.';
        display: inline-block;
        position: absolute;
        left: 1.356vw;
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    padding: 0 8%;
    > li {
      font-size: 10px;
      line-height: 13.11px;
    }
    &.disc > li {
      margin-left: 5px;
      ::before {
        width: 3px;
        height: 3px;
        top: 5px;
        left: -10px;
      }
    }
    &.decimal {
    > li {
      ::before {
        margin: 0 10px 0 0;
      }
      ::after {
        left: 7px;
      }
    }
  }
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > h2 {
    font-size: 1.305vw;
    color: #FFFFFF;
    line-height: 3.13vw;
    padding: 0 21px;
    background: #404040;
    margin-bottom: 2.66vw;
  }
  > span {
    font-size: 0.94vw;
    color: #B5B5B5;
  }

  ${(props) => props.theme.window.mobile} {
    > h2 {
      font-size: 10px;
      padding: 0 10px;
      line-height: 23px;
      margin-bottom: 6px;
    }
  }
`;

const TextBox = styled.div`
  > p {
    font-weight: 700;
    line-height: 1.668vw;
    font-size: 1.045vw;
  }

  ${(props) => props.theme.window.mobile} {
    > p {
      font-size: 10px;
      line-height: 14.7px;
    }
  }
`;

