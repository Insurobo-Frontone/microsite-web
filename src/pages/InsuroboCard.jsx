import React from "react";
import styled from "styled-components";
import Layout from "../layout";

import logo from '../assets/img/shinhancard/best-logo_onesh.png';
import insu_logo from '../assets/img/shinhancard/logo_insurobo.png';
import hi_point from '../assets/img/shinhancard/cdCreaditAFI9U6.png';
import simple_platinum from '../assets/img/shinhancard/cdCreaditBA7A3X.png';
import footer_shinhan from '../assets/img/shinhancard/oneshinhan_logo.png';

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
                  <a 
                    href="https://www.shinhancard.com/pconts/html/card/apply/credit/1188417_2207.html?empSeq=513&btnApp=dp01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    카드 신청하기
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
                  <a 
                    href="https://www.shinhancard.com/pconts/html/card/apply/credit/1188273_2207.html?empSeq=585&btnApp=dp01"
                    target="_blank"
                    rel="noreferrer"
                  >
                    카드 신청하기
                  </a>
                </div>
              </ItemWrap>
            </ItemList>
            <BottomTextBox>
              <p>준법감시 심의필 제20230803-Cpi-010호<br />(2023.08.03~2024.08.02)</p>
            </BottomTextBox>
          </BestCard>
        </Section>
      </Wrap>
      <Footer>
        <p>Copyright 2020. SHINHANCARD CO.,LTD. All rights reserved.</p>
        <a 
          href="https://www.shinhancard.com/pconts/html/main.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src={footer_shinhan} alt="신한카드"/>
        </a>
      </Footer>
    </Layout>
  )
}

export default InsuroboCard;

const Wrap = styled.div`
  width: 100%;
  background-color: #e6eaf3;
  position: relative;
  z-index: 1;
  
  /* padding-bottom: 380px; */
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
  
  @media (max-width: 1100px) {
    ::before {
      height: 335px;
    }
  }
`;

const Section = styled.div`
  padding-top: 30px;
  padding-bottom: 60px;
  @media (max-width: 1100px) {
    padding-bottom: 30px;
  }

`;


const BestCard = styled.div`
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

  @media (max-width: 1100px) {
    > h1 {
      height: 15px;
    }
    > div {
      font-size: 22px;
      margin-top: 20px;
      line-height: 22px;
      > span {
        background-size: 81px;
        margin-top: 5px;
        font-size: 22px;
      }
    }
  }
`;

const ItemList = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  * {
    transition: all .4s;
  }
  @media (max-width: 1100px) {
    max-width: 800px;
    padding: 10px 20px 0;
    flex-direction: column;
  }
`;

const ItemWrap = styled.div`
  max-width: 380px;
  flex: 0 0 50%;
  padding: 60px 35px 30px;
  margin: 30px 10px 10px 10px;
  background-color: #FFFFFF;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.10);
  border-radius: 8px;
  position: relative;
  > p {
    font-size: 24px;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 21px;
    width: 100%;
    margin-top: 0;
    text-align: center;
  }
  > .item-info1 {
    max-width: 360px;
    margin: 12px auto 0;
    margin-top: 30px;
    min-height: 81px;
    padding-bottom: 15px;
    display: flex;
    justify-content: center;
    > p {
      font-size: 18px;
      font-weight: 700;
      color: #111;
    }
    > div {
      margin-left: 20px;
      > span {
        margin-left: 6px;
        font-size: 16px;
        font-weight: 500;
        color: #111;
        display: block;
      }
    }
  }
  > .item-info2 {
    padding-top: 15px;
    border-top: 1px solid #ddd;
    min-height: 94px;
    font-size: 16px;
    text-align: center;
    > p {
      color: #111;
      font-weight: 500;
      > b {
        color: #4868e1;
        font-weight: 700;
      }
    }
  }
  > .btn-cover {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    > a {
      display: inline-block;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      background-color: #476eff;
      border: 1px solid #4868e1;
      min-width: 180px;
      height: 48px;
      line-height: 45px;
      padding: 1px 30px;
      white-space: nowrap;
      color: #FFFFFF;
      ::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-left: 5px;
        border: solid #fff 1px;
        border-bottom: none;
        border-right: none;
        transform: rotate(135deg);
        opacity: 0.4;
      }
    }
  }

  @media (max-width: 1100px) {
    max-width: 100%;
    margin: 30px 0 0 0;
    padding: 30px 35px;
    > p {
      font-size: 18px;
      padding: 0 30px;
    }
    > .item-info1 {
      min-height: auto;
      > p {
        font-size: 16px;
      }
    }
    > .item-info2 {
      min-height: auto;
      max-width: 400px;
      margin: 0 auto;
    }

    > .btn-cover {
      max-width: 360px;
      margin: 20px auto 0;
      > a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

const Card = styled.div`
  position: relative;
  text-align: center;
  color: #111;
  padding-top: 15px;
 
  > img {
    width: 73%;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.10);
    border-radius: 10px;
    margin: 0 auto;
  }

  @media (max-width: 1100px) {
    padding-top: 37px;
    max-width: 380px;
    margin: 0 auto;
  }
`;

const BottomTextBox = styled.div`
  padding: 30px 20px 0px;
  font-size: 16px;
  color: #000;
  max-width: 800px;
  > p {
    font-weight: bold;
    text-align: right;
    margin-top: 10px;
    padding-top: 10px;
    > br {
      display: none;
    }
  }
  @media (max-width: 1100px) {
    > p {
      padding: 0 10px;
      > br {
        display: block;
      }
    }
  }
`;

const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  font-size: 11px;
  border-top: 1px solid #eee;
  position: relative;
  z-index: 1;
  background: #fff;
  > p {
    color: #111;
    font-weight: 700;
  }
  > a {
    display: flex;
    justify-content: center;
    > img {
      height: 36px;
      margin-top: 15px;
    }
  }
`;



// https://www.shinhancard.com/pconts/html/landing/insurobo_card.html