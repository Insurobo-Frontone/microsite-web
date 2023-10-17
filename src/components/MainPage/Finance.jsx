import React, { useState } from 'react'
import TitleSet from '../TitleSet'
import styled, { css } from 'styled-components';
import loan from '../../assets/img/loan.png';
import card from '../../assets/img/card.png';
import { useNavigate } from 'react-router-dom';
import ContentInner from '../../layout/ContentInner';

const FinanceWrap = styled.div`
  padding: 70px 0;
  ${(props) => props.theme.window.mobile} {
    padding: 30px 0;
  }
`;

const GoodsList = styled.ul`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    
  }
`;

const Card = styled.li`
  display: flex;
  justify-content: space-between;
  width: 570px;
  height: 312px;
  padding: 30px;
  border: 2px solid #F4F4F4;
  border-radius: 15px;
  background-repeat: no-repeat;
  background-position: 367px bottom;
  cursor: pointer;
  :first-child {
    background-image: url(${loan});
  }
  :last-child {
    background-image: url(${card});
  }
  > div {
    > h2 {
      font-size: 20px;
      color: #393939;
      padding-bottom: 28px;
    }
    > div {
      > p {
        color: #6C6C6C;
        padding-bottom: 16px;
        line-height: 1.5;
        > b {
          position: relative;
          display: inline-block;
          ::after {
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            background-color: #4575F5;
            border-radius: 50%;
            position: absolute;
            top: -5px;
            left: 5px;
          }
        }
      }
      > span {
        color: #6C6C6C;
        display: block;
        font-size: 10px;
        padding-bottom: 16px;
      }
      > div {
        font-size: 26px;
        font-weight: 700;
        color: #393939;
        > span {
          color: #4575F5;
          font-weight: 700;
        }
      }
    }
  }
  > p {
    font-size: 10px;
    color: #6C6C6C;
  }

  ${(props) => props.theme.window.mobile} {
    display: none;
    width: 100%;
    padding: 30px 27px;
    background-position: calc(100% - 7px) bottom;
    background-size: 100px;
    > div {
      > h2 {
        padding-bottom: 24px;
      }
      > div {
        > span {
          padding-bottom: 15px;
        }
      }
    }
    ${props => props.open && css`
      display: block;
      
    `}
  }
`;

const TabBar = styled.div`
  display: none;
  ${(props) => props.theme.window.mobile} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 5px;
  }
`;

const TabMenu = styled.div`
  ${(props) => props.theme.window.mobile} {
    width: 50%;
    border-bottom: 2px solid #F4F4F4;
    text-align: center;
    color: #393939;
    font-weight: 700;
    line-height: 33px;
    ${props => props.open && css`
      border-color: #2EA5FF;
    `}
  }
`;


function Finance() {
  const navigate = useNavigate();
  const [tabNum, setTabNum] = useState(1);

  const goToLink = (link) => {
    switch (link) {
      case 'texReturn' :
        window.open('https://bznav.com/tax/refund/?utm_source=partner&utm_medium=affillates&utm_campaign=insurobo_landingPage&utm_content=promotion&utm_term=2pro');
        break;
      case 'card' :
        navigate('/insuroboCard');
        break;
      default: break;
    }
    
  }
  return (
    <ContentInner>
      <FinanceWrap>
        <TitleSet
          title='세무진단 받고 전용카드 발급 받으세요!'
          text='내지말고 이제 돌려 받으세요~'
          label='Ok!'
        />
        <TabBar>
          <TabMenu open={tabNum === 1 ? true : false} onClick={() => setTabNum(1)}>소상공인 세금 환급</TabMenu>
          <TabMenu open={tabNum === 2 ? true : false} onClick={() => setTabNum(2)}>소상공인 전용카드</TabMenu>
        </TabBar>
        <GoodsList>
          <Card onClick={() => goToLink('texReturn')} open={tabNum === 1 ? true : false}>
            <div>
              <h2>소상공인 세금 환급</h2>
              <div>
                <p>
                  세제 혜택 변동도,<br />
                  바뀌는 사업 상황에도 걱정없어요!
                </p>
                <span>
                  개인.법인사업자,<br />
                  그리고 폐업자도 환급 받으실 수 있습니다.<br />
                  환급액 조회, 30초면 충분해요.
                </span>
                <div>
                  <span>세금환급</span>도<br />지금 바로 확인하세요!
                </div>
              </div>
            </div>
            <p>*법인사업자는 공동인증서로 가능</p>
          </Card>
          <Card onClick={() => goToLink('card')} open={tabNum === 2 ? true : false}>
            <div>
              <h2>소상공인 전용카드</h2>
              <div>
                <p>
                  다양한 혜택을 한 카드로!<br />
                  본인에게 맞는 전용카드 필수!
                </p>
                <span>
                  연매출 3억원 이하 소상공인 누구나!<br />
                  자동맞춤 최대 30%할인<br />
                  카드 매출액의 0.8%에 해당하는 금액 지금 등등
                </span>
                <div>
                  많이 쓰는 영역<br /><span>맞춤 할인 </span>혜택
                </div>
              </div>
            </div>
            <p>*대출금액에 따라 상환기간 상이</p>
          </Card>
        </GoodsList>
      </FinanceWrap>
    </ContentInner>
      
  
  )
}

export default Finance