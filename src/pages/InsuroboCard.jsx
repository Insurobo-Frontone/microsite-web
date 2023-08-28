import React from "react";
import styled from "styled-components";
import Layout from "../layout";

import logo from '../assets/img/shinhancard/best-logo_onesh.png';
import insu_logo from '../assets/img/shinhancard/logo_insurobo.png';
import hi_point from '../assets/img/shinhancard/cdCreaditAFI9U6.png';
import simple_platinum from '../assets/img/shinhancard/cdCreaditBA7A3X.png';

const InsuroboCard = () => {
  return (
    <Layout>
      <Wrap>
        <Section>
          <BestCard>
            <BestTop>
              <h1>ShinhanCard</h1>
              <div>
                <span>인슈로보</span>
                &nbsp;x 신한카드
              </div>
            </BestTop>
            <ItemList>
              <ItemWrap>
                <Card>
                  <img src={hi_point} alt="신한카드 Hi-Point MyShop"/>
                </Card>
                <p>신한카드 Hi-Point MyShop</p>
                <div className="item-info1">
                  <p>연회비</p>
                  <div>
                    <span>국내전용 1만원</span>
                    <br />
                    <span>해외겸용 1만 5천원</span>
                  </div>
                </div>
                <div className="item-info2">
                  <p>
                    사업성경비P <b>1~5% 적립</b>
                    <br />
                      주유소 포인트 <b>60P/ℓ 적립</b>
                    <br />
                    카드론/현금서비스 <b>이자율 우대</b> 
                  </p>
                </div>
                <div className="btn-cover">
                  <a href="https://www.shinhancard.com/pconts/html/card/apply/credit/1188417_2207.html?empSeq=513&btnApp=dp01" >
                    카드신청하기
                  </a>
                </div>
              </ItemWrap>
              <ItemWrap>
                <Card>
                  <img src={simple_platinum} alt="신한카드 Simple Platinum#"/>
                </Card>
                <p>신한카드 Simple Platinum#</p>
                <div className="item-info1">
                  <p>연회비</p>
                  <div>
                    <span>국내전용 2만 7천원</span>
                    <br />
                    <span>해외겸용 3만원</span>
                  </div>
                </div>
                <div className="item-info2">
                  <p>
                    국내외가맹점 <b>1% 캐시백</b>
                    <br />
                    대중교통 <b>추가 0.7% 캐시백</b>
                    <br />
                    잔돈할인 <b>월 10회</b> 
                  </p>
                </div>
                <div className="btn-cover">
                  <a href="https://www.shinhancard.com/pconts/html/card/apply/credit/1188273_2207.html?empSeq=585&btnApp=dp01" >
                    카드신청하기
                  </a>
                </div>
              </ItemWrap>
            </ItemList>
          </BestCard>
        </Section>
      </Wrap>
    </Layout>
  )
}

export default InsuroboCard;

const Wrap = styled.div`
  width: 100%;
  background-color: #e6eaf3;
  position: relative;
  z-index: 1;
  padding-bottom: 380px;
    ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 380px;
    background: #4f67d9;
    top: 0;
    left: 0;
    z-index: -1;
  }
  ${(props) => props.theme.window.iframe} {
    

  }
`;

const Section = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
`;


const BestCard = styled.div`
  transition: all .4s;
  max-width: 800px;
  margin: 0 auto;
`;

const BestTop = styled.div`
  
  > h1 {
    color: transparent;
    margin-bottom: 10px;
    height: 20px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  > div {
    font-size: 38px;
    color: #FFFFFF;
    margin-top: 30px;
    text-align: center;
    font-weight: 400;
    line-height: 38px;
    > span {
      color: transparent;
      background-size: 140px;
      margin-top: 10px;
      background-image: url(${insu_logo});
      background-repeat: no-repeat;
      font-size: 38px;
      display: inline-block;
      margin-top: 10px;
    }
  }
`;

const ItemList = styled.div`
  width: 100%;
  padding-top: 10px;
  display: flex;
`;

const ItemWrap = styled.div`

`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 60px 35px 30px;
  position: relative;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.10);
  text-align: center;
  color: #111;
`;


// https://www.shinhancard.com/pconts/html/landing/insurobo_card.html