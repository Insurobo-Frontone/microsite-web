import React from 'react'
import TitleSet from '../TitleSet'
import styled from 'styled-components';
import loan from '../../assets/img/loan.png';
import card from '../../assets/img/card.png';
import { useNavigate } from 'react-router-dom';
import ContentInner from '../../layout/ContentInner';

const FinanceWrap = styled.div`
  padding: 70px 0;
`;

const GoodsList = styled.ul`
  display: flex;
  justify-content: space-between;
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
`;

function Finance() {
  const navigate = useNavigate();
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
          title='세무진단 받고 전용카드 발급받으세요!'
          text='내지말고 이제 돌려 받으세요~'
          label='Ok!'
        />
        <GoodsList>
          <Card onClick={() => goToLink('texReturn')}>
            <div>
              <h2>소상공인 세금환급</h2>
              <div>
                <p>
                  대출 조건 <b>깐</b><b>깐</b>하게<br />
                  따지는 소상공인이라면
                </p>
                <span>
                  연 금리 5.90% ~ 20.90%<br />
                  중도상환수수료 0.0% ~ 1.0%<br />
                  대출기관 최대 10년
                </span>
                <div>
                  <span>대출</span>도<br />남달라야합니다!
                </div>
              </div>
            </div>
            <p>*대출금액에 따라 상환기간 상이</p>
          </Card>
          <Card onClick={() => goToLink('card')}>
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