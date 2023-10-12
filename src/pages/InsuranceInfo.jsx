import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../layout';
import InfoContent from '../components/Content/InfoContent';
import CustomButton from '../components/Button/CustomButton';
import ApplyModal from '../components/Modal/ApplyModal';
import duty_main from '../assets/img/insuranceInfo/dutyMain.png';
import must_main from '../assets/img/insuranceInfo/mustMain.png';
import invest_main from '../assets/img/insuranceInfo/investMain.png';
import d_icon1 from '../assets/icon/dutyIcon1.png';
import d_icon2 from '../assets/icon/dutyIcon2.png';
import d_icon3 from '../assets/icon/dutyIcon3.png';
import d_icon4 from '../assets/icon/dutyIcon4.png';
import d_icon5 from '../assets/icon/dutyIcon5.png';
import m_icon1 from '../assets/icon/mustIcon1.png';
import m_icon2 from '../assets/icon/mustIcon2.png';
import i_icon1 from '../assets/icon/invest_icon1.png'
import i_icon2 from '../assets/icon/invest_icon2.png'
import i_icon3 from '../assets/icon/invest_icon3.png'
import i_icon4 from '../assets/icon/invest_icon4.png'

const list_duty = [
  {
    id: 1,
    title: '다중이용시설배상책임보험',
    text: 'PC방, 노래방 등의 시설 운영',
    link: 'https://mplatform.hi.co.kr/service.do?m=pipin1000&jehuCd=hyundaipay',
    icon: d_icon1
  },
  {
    id: 2,
    title: '재난배상책임보험',
    text: '예기치 못한 사고에도 걱정없이!',
    link: 'https://mplatform.hi.co.kr/service.do?m=pipim1000&jehuCd=hyundaipay',
    icon: d_icon2
  },
  {
    id: 3,
    title: '학원배상책임보험',
    text: '독서실, 학원 사장님이라면 필수로',
    link: 'https://platform.hi.co.kr/service.do?m=pipih1000&jehuCd=insurobo',
    icon: d_icon3
  },
  {
    id: 4,
    title: '개인정보보호 배상책임보험 II',
    text: '개인정보 관련 사고 위험에 대비',
    link: 'https://platform.hi.co.kr/service.do?m=pipil1000&jehuCd=insurobo',
    icon: d_icon4
  },
  {
    id: 5,
    title: '가스사고배상책임보험',
    text: '가스 누출, 화재 사고 위험에 대비',
    link: 'https://platform.hi.co.kr/service.do?m=pipil1000&jehuCd=insurobo',
    icon: d_icon5
  }
]

const list_must = [
  {
    id: 1,
    title: '사업장 화재보험',
    text: '가까운 곳에서 시작되는 화재',
    link: '',
    class: '',
    icon: m_icon1
  },
  {
    id: 2,
    title: '카디프생명(e)대출안심 보장보험',
    text: '대출상환능력 상실시 대출금 상환',
    link: 'https://insurobowindstorm.com/cardifarea',
    class: 'cadif',
    icon: m_icon2
  }
]

const list_invest = [
  {
    id: 1,
    title: '국산 자동차 구매가격 평균',
    money: '3079만원',
    icon: i_icon1,
    source: '<컨슈머인사이트 2017>'
  },
  {
    id: 2,
    title: '해외여행 경비 평균',
    money: '143.5만원',
    icon: i_icon2,
    source: '<컨슈머인사이트 2017>'
  },
  {
    id: 3,
    title: '결혼자금 평균',
    money: '2억 3천만원',
    icon: i_icon3,
    source: '<듀오웨드 2018>'
  },
  {
    id: 4,
    title: '4년제 대학 1학기 등록금 평균',
    money: '671만원',
    icon: i_icon4,
    source: '<교육부 2018>'
  },
]

const Banner = styled.div`
  background-color: ${props => props.color};
  box-shadow: ${props => props.shadow && '0 0 10px 0 rgba(26,26,26,0.1)'};
  padding: 50px 25px;
  border-radius: 13px;
  margin-bottom: 20px;
  
  > div {

    &.banner-text-box {
      position: absolute;
      span {
        color: #212A5D;
        font-weight: 700;
        font-size: 14px;
      }
      p {
        font-size: 30px;
        font-weight: 700;
        color: #FFFFFF;
      }
      b {
        font-weight: 700;
        color: #212A5D;
      }
    }
    .duty {
      width: 53%;
      margin-left: 47%;
    }
    .must {
      width: 47%;
      margin-left: 53%;
    }
    .invest {
      width: 45%;
      margin-left: 55%;
    }
  }
  > .sub-banner {
      display: flex;
      > img {
        
      }
  }

  ${(props) => props.theme.window.mobile} {
    padding: 25px 16px;
    > div {

    &.banner-text-box {
      position: static;
      span {
        font-size: 10px;
      }
      p {
        font-size: 18px;
      }
      > br {
        display: none;
      }
      > p {
        margin-bottom: 10px;
      }
    }
    .duty {
      width: 53%;
      margin-left: 47%;
      margin-top: 10px;
    }
    .must {
      width: 47%;
      margin-left: 53%;
    }
    .invest {
      width: 45%;
      margin-left: 55%;
    }
    }
    > .sub-banner {
      display: flex;
      > img {
        
      }
    }
  }
`; 

const ItemListWrap = styled.div`
  padding: 20px;
  background-color: #FFF;
  box-shadow: 0 0 10px 0 rgba(26,26,26,0.1);
  border-radius: 10px;
  margin-bottom: 20px;
  /* margin: 20px auto 0; */
  ${(props) => props.theme.window.mobile} {
    padding: 10px;
  }
`;


const ItemList = styled.ul`
  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    :last-child {
      border-bottom: 0;
    }
    .preparing {
      font-size: 12px;
      font-weight: 700;
      color: #808080;
      background-color: #F0F0F0;
      border-radius: 15px;
      width: 61px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left-wrap {
      display: flex;
      align-items: center;
      padding: 30px 0;
      > img {
        margin-right: 10px;
      }
      > div {
        
        > p {
          font-size: 16px;
          color: #1A1A1A;
          font-weight: 700;
          line-height: 28px;
        }
        > span {
          font-size: 12px;
          color: #808080;
          line-height: 18px;
        }
      }
      
    }
  }
  ${(props) => props.theme.window.mobile} {
    > li {
        .left-wrap {
        > img {
          margin-right: 5px;
        }
        > div {
          > p {
            white-space: nowrap;
          }
        }
        .cadif {
          > p {
            font-size: 13px;
          } 
        }
      }
    }
  }
`;

const InvestList = styled.div`
  width: 100%;
  .title {
    display: flex;
    align-items: flex-start;
    color: #2F2F2F;
    font-size: 1.25rem;
    > :first-child {
      margin-right: 10px;
      color: #4575F5;
      line-height: 45px;
    }
  }
  > ul {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    width: 100%;
    margin-top: 20px;
    
    > li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
      
      > h2 {
        font-size: 0.9rem;
        text-align: center;
        padding-bottom: 20px;
        color: #212A5D;
        > span {
          display: block;
          font-size: 0.65rem;
          font-weight: 400;
        }
      }
      > p {
        font-size: 0.5rem;
        color: #808080;
        padding-top: 20px;
      }
    }
  }
  .text-box {
    flex-flow: column;
    border-radius: 20px;
    background-color: #F8F8F8;
    margin-top: 50px;
    padding: 20px;
    > li {
      font-size: 0.95rem;
      width: 100%;
      display: flex;
      align-items: flex-start;
      padding-bottom: 10px;
      font-weight: 300;
    }
  }

  ${(props) => props.theme.window.mobile} {
    .title {
      font-size: 1rem;
      > :first-child {
        margin-right: 5px;
        line-height: 26px;
      }
    }
    > ul {
      flex-flow: row wrap;
      padding: 20px 0 0 0;
      margin-top: 0;
      > li {
        width: 50%;
        > p {
          padding-top: 10px;
          margin-bottom: 20px;
        }
        > h2 {
          padding-bottom: 5px;
        }
        > img {
          transform: scale(0.8);
        }
      }
    }
    .text-box {
      margin-top: 25px;
      padding: 16px;
      border-radius: 5px;
      > li {
        font-size: 0.95rem;
        width: 100%;
        display: flex;
        align-items: flex-start;
        padding-bottom: 10px;
        font-weight: 300;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 700;
  color: #808080;
  background-color: #F0F0F0;
  border-radius: 15px;
  width: 61px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function InsuranceInfo() {
  
  return (
    <Layout color='BG_WHITE'>
      <Item />
    </Layout>
  )
}
export default InsuranceInfo


function Item() {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  if (location.search === '?item=duty') {
    return (
      <InfoContent>
        <Banner color='#2EA5FF' shadow> 
          <div className='banner-text-box'>
            <p>
              사장님!!!<br />
              사업장 안정을 위해<br />
              필수 가입하실 보험입니다.
            </p>
            <br />
            <span>**미가입시 과태로 부과 대상입니다.</span>
          </div>
          <div>
            <img src={duty_main} alt='의무보험' className='duty'/>
          </div>
        </Banner>
        <ItemListWrap>
          <ItemList>
            {list_duty.map((dt) => (
              <li key={dt.id}>
                <div className='left-wrap'>
                  <img src={dt.icon} alt={dt.title} />
                  <div>
                    <p>{dt.title}</p>
                    <span>{dt.text}</span>
                  </div>
                </div>
                <StyledLink to={dt.link}>알아보기</StyledLink>
              </li>
            ))}
          </ItemList>
        </ItemListWrap>
      </InfoContent>
    )
  }
  if (location.search === '?item=must') {
    return (
      <InfoContent>
        <Banner color='#176FFF' shadow>
          <div className='banner-text-box'>
            <p>
              사장님!!!<br />
              사업장 <b>안전</b>을 위해<br />
              필수 가입하실 보험입니다.
            </p>
          </div>
          <div>
            <img src={must_main} alt='필수 보험' className='must'/>
          </div>
        </Banner>
        <ItemListWrap>
          <ItemList>
            {list_must.map((dt) => (
              <li key={dt.id}>
                <div className='left-wrap'>
                  <img src={dt.icon} alt={dt.title} />
                  <div className={dt.class}>
                    <p>{dt.title}</p>
                    <span>{dt.text}</span>
                  </div>
                </div>
                {dt.link ? ((<StyledLink to={dt.link}>알아보기</StyledLink>)) :(
                  <div className='preparing'>준비중</div>
                )}
              </li>
            ))}
          </ItemList>
        </ItemListWrap>
      </InfoContent>
    )
  }
  if (location.search === '?item=invest') {
    return (
      <InfoContent>
        <Banner color='#4575F5' shadow>
          <div className='banner-text-box'>
            <p>
              사장님!!!<br />
              <b>목돈 마련</b>을 위해 적합한 보험입니다.
            </p>
          </div>
          <div>
            <img src={invest_main} alt='재태크보험' className='invest'/>
          </div>
        </Banner>
        <Banner color='#FFFFFF' shadow> 
          <InvestList>
            <h2 className='title'> 
              <h2>01</h2>목적자금!!<br />
              자금 준비계획이 꼭 필요합니다.
            </h2>
            <ul>
              {list_invest.map((dt) => (
                <li key={dt.id}>
                  <h2>
                    <span>{dt.title}</span>
                    {dt.money}
                  </h2>
                  <img src={dt.icon} alt='icon' />
                  <p>{dt.source}</p>
                </li>
              ))}
            </ul>
          </InvestList>
        </Banner>
        <Banner color='#FFFFFF' shadow>
          <InvestList>
            <h2 className='title'>
            <h2>02</h2>목적자금!!<br />
              마련시 꼭 체크하실 내용입니다.
            </h2>
            <ul className='text-box'>
              <li>1. 비과세 혜택과 연복리효과는?</li>
              <li>2. 목돈 필요시 일시 수령 가능여부는?</li>
              <li>3. 노후 준비 필요시 연금 전환 가능여부는?</li>
              <li>4. 보험회사의 안정성은?</li>
            </ul>
          </InvestList>
        </Banner>
        <CustomButton 
          onClick={() => setShowPopup(true)} 
          width='100%'
          bgColor='PRIMARY'
        >
          <p style={{ color: '#FFFFFF' }}>목돈마련 상담신청</p>
        </CustomButton>
        {showPopup && (
          <ApplyModal onClick={() => setShowPopup(false)} />
        )}
      </InfoContent>
    )
  }
}