import React from "react";
import styled, { css } from "styled-components";
import yogiyoAppIcon from '../../../../assets/img/yogiyo_AppCi.png';
import insuAppIcon from '../../../../assets/img/insuroboApp_icon.png';
import main1 from '../../../../assets/img/yogiyoWindstormMain.png';
import manual1 from '../../../../assets/img/yogiyoWindstormSection2-1.png';
import manual2 from '../../../../assets/img/yogiyoWindstormSection2-2.png';
import manual3 from '../../../../assets/img/yogiyoWindstormSection2-3.png';
import insuMessageBox from '../../../../assets/icon/insuroboWindstorm/messageBoxTail.svg';
import userMessageBox from '../../../../assets/icon/insuroboWindstorm/userMessageBoxTail.svg';
import insuChatIcon from '../../../../assets/img/insuroboChat_icon.png';
import userChatIcon from '../../../../assets/img/userChat_icon.png';

import Button from "../../Button";

const manual = [
  {
    id: 1,
    title: `“무료가입”\n버튼을 클릭하세요`,
    img: manual1
  },
  {
    id: 2,
    title: `무료가입신청서 작성 후\n“가입신청” 누르면 끝!`,
    img: manual2
  },
  {
    id: 3,
    title: `아래의 QR코드로\n바로 접속 가능합니다`,
    img: manual3
  },

]
const Guide = ({ jehuCd }) => {
  return (
    <Wrap>
      <Section gradient='gra1'>
        <div>
          <AppIconWrap>
            <img src={yogiyoAppIcon} alt="요기요" />
            <img src={insuAppIcon} alt="인슈로보" />
          </AppIconWrap>
          <TextWrap>
            <h2>
              <b>풍수해보험</b><br />
              <span>무료 가입</span> 하세요
            </h2>
            <p>
              1월00일 ~2월00일<br />
              <span>(요기요X인슈로보가 함께합니다)</span>
            </p>
          </TextWrap>
        </div>
        <div>
          <img src={main1} alt='풍수해보험 이미지' />
        </div>
      </Section>
      <Section>
        <Title>
          <Label>가입대상</Label>
          <p>소상공인이라면 누구나 가능합니다</p>
        </Title>
        <CardWrap>
          {manual.map((dt) => (
            <li key={dt.id}>
              <Card >
                <img src={dt.img} alt="manual" />
              </Card>
              <p>{dt.title}</p>
            </li>
          ))}
        </CardWrap>
        <Button jehuCd={jehuCd}>풍수해보험 무료 가입하기</Button>
      </Section>
      <Section gradient='gra2'>
        <Title>
          <Label>이벤트 유의사항</Label>
        </Title>
        <ChatWrap>
          <div>
            <MessageBox insurobo>
              <p>풍수해보험이란?</p>
              <p>
                국가 및 지자체에서 보험료 일부 지원하는<br />
                보험으로 행정안전부가 관장하고 민영보험사가<br />
                판매하는 정책보험입니다.
              </p>
              <p>
                지진, 태풍, 홍수, 호우, 강풍 등으로 인한 사고<br />
                발생 시 실손비용을 보장하는 보험이예요.
              </p>
            </MessageBox>
            <img src={insuChatIcon} alt="인슈로보" />
          </div>
          <div>
            <img src={userChatIcon} alt="고객" />
            <MessageBox user>
              <p>그럼 나머지 일부 보험료는 제가 지불해야하나요?</p>
            </MessageBox>
          </div>
          <div>
            <MessageBox insurobo>
              <p>아니요! 이벤트 주최사인 저희 인슈로보에서<br />보험료 전부를 지원합니다.</p>
            </MessageBox>
            <img src={insuChatIcon} alt="인슈로보" />
          </div>
        </ChatWrap>
      </Section>
      <Section>
        <Title>
          <Label>가입시 유의사항</Label>
          <p>가입 전에 꼭 한 번 확인하세요!</p>
        </Title>
        <ListWrap>
          <li>일반금융소비자는 금융상품판매업자로부터 충분한 설명을 받을 권리가 있으며 그 설명을 이해하신 후 가입하시기 바랍니다.</li>
          <li>이 자료는 요약된 것이므로 가입 전 해당 상품의 약관 및 상품설명서를 반드시 확인하세요.</li>
          <li>본 보험은 비씨카드 회원을 대상으로 인슈로보가 보험료를 지불하고 현대해상화재보험에서 보장하는 “풍수해보험VI” 입니다.</li>
          <li>보험개시는 가입일로부터 약월부터 개시됩니다.</li>
          <li>가입대상이 아닌 경우 보험가입 거절되거나 해지 시 보험 계약은 취소될 수 있습니다.</li>
          <li>해지 또는 취소 시에도 환급보험료는 발생하지 않습니다.</li>
        </ListWrap>
        <HashTagWrap>
          <div># 보험기간 1년</div>
          <div># 완전 무료</div>
          <div># 소상공인 상가 및 공장</div>
        </HashTagWrap>
      </Section>
    </Wrap>
  )
}

export default Guide

const Wrap = styled.div`
  width: 768px;
  margin: 0 auto;
`;

const Section = styled.div`
  background-color: #FFFFFF;
  padding: 32px 206px;
  display: flex;
  flex-direction: column;

  ${props => props.gradient === 'gra1' && css`
    flex-direction: row;
    align-items: flex-end;
    padding: 80px 0 80px 206px;
    background: linear-gradient(180deg, #6262EF 55.93%, rgba(52, 170, 196, 0.61) 99.99%, rgba(0, 0, 206, 0.32) 99.99%, rgba(1, 1, 213, 0.01) 100%, rgba(0, 0, 213, 0.00) 100%);
  `}

  ${props => props.gradient === 'gra2' && css`
    background: linear-gradient(180deg, rgba(52, 170, 196, 0.61) 0%, rgba(0, 0, 206, 0.32) 100%);
  `}
`;

const AppIconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 74px;
`;

const TextWrap = styled.div`
  padding-top: 18px;
  > h2 {
    color: #FFFFFF;
    font-weight: 100;
    font-size: 28px;
    ::after {
      content: '';
      display: block;
      width: 40px;
      height: 1px;
      margin-top: 26px;
      background-color: #FFFFFF;
    }
    > b {
      color: #FFFFFF;
      font-weight: 700;
    }
    > span {
      color: #FFFFFF;
      position: relative;
      font-weight: 100;
      z-index: 0;
      ::before {
        content: '';
        position: absolute;
        bottom: 3px;
        height: 4px;
        width: 100%;
        border-radius: 5px;
        background-color: #858FFC;
        z-index: -1;
      }
    }
  }
  > p {
    font-size: 14px;
    font-weight: 100;
    color: #FFFFFF;
    padding-top: 24px;
    > span {
      display: inline-block;
      color: #E2E2E2;
      font-weight: 100;
      padding-top: 4px;
    }
  }
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #6262EF;
  background-color: #FFFFFF;
  border: 1.5px solid #6262EF;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 14px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > p {
    font-size: 18px;
    font-weight: 700;
    color: #333333;
    padding-top: 16px;
  }
`;

const CardWrap =  styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 28px;
  > li {
    > p {
      font-size: 10px;
      text-align: center;
      white-space: pre;
      padding-top: 8px;
      color: #333333;
    }
  }
`;

const Card = styled.div`
  width: 110.88px;
  height: 110.88px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #F4F4F4;
`;

const ChatWrap = styled.div`
  padding-top: 32px;
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 30px;
    > img {
      display: block;
      width: 48px;
      height: 48px;
    }
  }
`;

const MessageBox = styled.div`
  border-radius: 10px;
  position: relative;
  > p {
    font-weight: 300;
    font-size: 13px;
    color: #333333;
    :nth-child(2) {
      padding-top: 10px;
    }
    :nth-child(3) {
      padding-top: 20px;
    }
  }
  ${props => props.insurobo && css`
    background-color: #6262EF;
    padding: 16px 16px 18px;
    margin-right: 13px;
    > p {
      color: #FFFFFF;
    }
    ::after {
      content: '';
      display: block;
      position: absolute;
      top: 18px;
      right: -11px;
      width: 11px;
      height: 13px;
      background-image: url(${insuMessageBox});
    }
  `}

  ${props => props.user && css`
    background-color: #FFFFFF;
    padding: 16px;
    margin-left: 12px;
    ::before {
      content: '';
      display: block;
      position: absolute;
      left: -11px;
      top: 17px;
      width: 11px;
      height: 13px;
      background-image: url(${userMessageBox});
    }
  `}
`;

const ListWrap = styled.ul`
  padding: 32px 0;
  > li {
    font-size: 14px;
    color: #666666;
    font-weight: 300;
    padding-left: 20px;
    margin-bottom: 20px;
    position: relative;
    :last-child {
      margin-bottom: 0;
    }
    ::before {
      content: '';
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 3px;
      height: 3px;
      background-color: #666666;
      border-radius: 50%;
    }
  }
`;

const HashTagWrap = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    background-color: #6262EF;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 8px 12px;
    font-size: 13px;
    font-weight: 300;
  }
`;
