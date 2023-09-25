import React from 'react'
import TitleSet from '../TitleSet'
import styled from 'styled-components';
import { Text, Title } from '../Font';
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
`;

function Finance() {
  const navigate = useNavigate();
  const goToLink = (link) => {
    navigate(link)
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
          <Card>
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
          <Card onClick={() => goToLink('/insuroboCard')}>
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