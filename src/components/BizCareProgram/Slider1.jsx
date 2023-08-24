import React from 'react'
import styled from 'styled-components';
import step1 from '../../assets/icon/bizcareStep1.png';
import step2 from '../../assets/icon/bizcareStep2.png';
import step3 from '../../assets/icon/bizcareStep3.png';

const cardData = [
  {
    id: 1,
    icon: step1,
    step: '1단계',
    title: '진 단',
    discription: 'CEO인터뷰 및 진단프로그램 활용',
    list1: '경영전략',
    list2: '재무관리',
    list3: '금융',
    list4: '기업신용등급',
    cost: '※ 인슈로보 비용부담',
    class: 'step1'
  },
  {
    id: 2,
    icon: step2,
    step: '2단계',
    title: '자문&실행',
    discription: '개선과제도출 및 개선방향설정 &\n 합의된 개선과제 실행',
    cost: '※ 상호 협의에 의해 수익자 비용 부담',
    class: 'step2'
  },
  {
    id: 3,
    icon: step3,
    step: '3단계',
    title: '사후관리',
    discription: '개선과제 결과 점검 및 사후서비스',
    cost: '※ 인슈로보 비용부담',
    class: 'step3'
  },
]
function Slider1() {
  return (
    <>
      <SlideTitle>비즈케어 프로그램</SlideTitle>
      <Discription>
        기업경영 각 분야에 대한 진단과 개선을 위한 자문,<br /> 계획 실행 및 사후 서비스를 통해 고객사의 안정적인<br /> 성장을 지원하는 인슈로보
        전문가그룹의&nbsp;
        <span>기업경영 토탈케어 프로그램</span>
      </Discription>
      <Discription>
        강남구, 연세대학, 고용진흥원 등이 소재 기업 및 가족 <br />기업에 제공하는 검증된 진단프로그램<br />(기업체 6백 곳 이상)
      </Discription>
      <CardList>
        {cardData.map(data => (
          <Card key={data.id}>
            <TopBox>
              <Icon><img src={data.icon} alt='icon'/></Icon>
              <TitleBox>
                <span>{data.step}</span>
                <p>{data.title}</p>
              </TitleBox>
            </TopBox>
            <BottomBox>
              <CardDiscription className={data.class}>
                <p>{data.discription}</p>
                {data.list1 && (<span>{data.list1}</span>)}
                {data.list2 && (<span>{data.list2}</span>)}
                {data.list3 && (<span>{data.list3}</span>)}
                {data.list4 && (<span>{data.list4}</span>)}
              </CardDiscription>
              <Cost>{data.cost}</Cost>
            </BottomBox>
          </Card>
        ))}
      </CardList>
    </>
  )
}

export default Slider1

const SlideTitle = styled.p`
  /* font-size: 2.078vw; */
  font-size: 2.1vw;
  font-weight: 700;
  color: #404040;

  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
  }
`;

const Discription = styled.p`
  padding-top: 1.8%;
  letter-spacing: -0.5px;
  font-size: 1.2vw;

  ::before {
    content: '';
    display: block;
    width: 1.05vw;
    height: 0.27vw;
    background: #4053CD;
    margin-bottom: 0.265vw;
  }
  > span {
    color: #4053CD;
    font-weight: 700;
  }
  > br {
    display: none;
  }

  ${(props) => props.theme.window.mobile} {
    font-size: 11px;
    line-height: 147%;
    padding-top: 15px;
    ::before {
      width: 15px;
      height: 3px;
      margin-bottom: 5px;
    }
    > span {
      display: block;
    }
    > br {
      display: block;
    }
  }
`;

const CardList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 2.27vw 0 1.3vw;
  
  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    padding: 15px 0;
 
  }
`;


const Card = styled.li`
  width: 19.28vw;
  height: 20.35vw;
  background: #F2F2F2;
  padding: 1.26vw 1.1vw;
  /* padding: 2% 1.75% 2.1%; */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  box-sizing: border-box;
  :first-child > div > div > img {
    width: 3.05vw;
  }
  :nth-child(2) > div > div > img {
    width: 4.38vw;
  }
  :last-child > div > div > img {
    width: 2.47vw;
  }
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 13vh;
    flex-direction: row;
    padding: 7px 17px 8px;
    /* padding: 17px 17px 8px; */
    margin-bottom: 11px;
    :first-child > div > div > img {
      width: 3.3vh;
    }
    :nth-child(2) > div > div > img {
      width: 4.9vh;
    }
    :last-child > div > div > img {
      width: 2.6vh;
    }
  }
`;

const Icon = styled.div`
  width: 5.25vw;
  height: 5.25vw;
  border-radius: 50%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 27px 0 rgba(109, 109, 109, 0.2);
  
  ${(props) => props.theme.window.mobile} {
    width: 6vh;
    height: 6vh;
  }
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${(props) => props.theme.window.mobile} {
    width: 20%;
    /* flex-direction: row; */
  }
`;

const BottomBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) => props.theme.window.mobile} {
    width: 80%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  
  > p {
    font-size: 1.303vw;
    color: #4053CD;
    margin-left: 1.2vw;
    line-height: 3vw;
    font-weight: 700;
    
  }
  > span {
    font-size: 0.94vw;
    color: #B5B5B5;
  }

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    margin-top: 3px;
    > p {
      font-size: 10px /*15px*/;
      line-height: 11px;
      
      margin-left: 0;
    }
    > span {
      font-size: 11px /*13px*/;
    }
  }
`;

const CardDiscription = styled.div`
  align-self: center;
  &.step1 {
   width: 88.02702702702703%;
  }
  &.step2 {
    width: 74.32432432432432%;
   /* width: 275px; */
  }
  &.step3 {
    width: 55.40540540540541%;
   /* width: 205px; */
  }
  > p {
    font-size: 1.045vw;
    font-weight: 700;
    text-align: center;
    color: #404040;
    padding-bottom: 0.7vw;
  }
  > span {
    font-size: 1.045vw;
    font-weight: 400;
    display: flex;
    align-items: center;
    line-height: 1.49vw;
    ::before {
      content: '';
      display: block;
      width: 0.26vw;
      height: 0.26vw;
      border-radius: 50%;
      background: #3E3E3E;
      margin-right: 0.5vw;
    }
  }

  ${(props) => props.theme.window.mobile} {
    height: 84%;
    align-self: flex-start;
    margin-left: 15px;
    &.step1 {
      width: auto;
      display: flex;
      margin: 0 0 0 16px;
      flex-direction: column;
      > p {
        margin-bottom: 7px;
      }
      > span {
        align-self: flex-start;
      }
    }
    &.step2, &.step3 {
      width: auto;
      display: flex;
      align-items: center;
    }
    &.step2 {
    }
    &.step3 {
    }
    > p {
      font-size: 10px /*13px*/;
      margin: 0;
      line-height: 13px;
      text-align: start;
      letter-spacing: -1px;
      white-space: pre-wrap;
    }
    > span {
      display: flex;
      align-items: center;
      font-size: 10px /*13px*/;
      line-height: 11px /*19.11px*/;
      
      ::before {
        width: 3px;
        height: 3px;
        margin: 0 7px;
      }
    }
  }
`;

const Cost = styled.p`
  font-size: 0.78vw;
  color: #EA5555;
  text-align: end;
  ${(props) => props.theme.window.mobile} {
    height: 16%;
    font-size: 1vw; /*10px*/;
    /* transform: translate(-0%, -0%) scale(0.8); */

  }
`;