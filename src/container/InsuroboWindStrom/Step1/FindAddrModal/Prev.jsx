import React from "react";
import styled from "styled-components";

const Prev = () => {

  const SearchHelperDate = [
    {
      id: 1,
      title: '도로명 + 건물번호',
      text: '예) 판교역로 235, 제주 첨단로 242',
    },
    {
      id: 2,
      title: '지역명(동/리) + 번지',
      text: '예) 삼평동 681, 제주 영평동 2181',
    },
    {
      id: 3,
      title: '지역명(동/리) + 건물명(아파트명)',
      text: '예) 분당 주공, 연수동 주공3차',
    },
    {
      id: 4,
      title: '사서함명 + 번호',
      text: '예) 분당우체국사서함 1~100',
    },
  ]
  return (
    <Wrap>
      <p>아래와 같은 조합으로 검색하세요.</p>
      {SearchHelperDate.map((cur) => {
        return (
          <TextContainer key={cur.id}>
            <p>{cur.title}</p>
            <span>{cur.text}</span>
          </TextContainer>
        )})
      }
    </Wrap>
  )
}

export default Prev;

const Wrap = styled.div`
  padding: 0px 16px;
  margin-top: 40px;
  margin-bottom: 85px;

  > p {
    font-weight: 700;
    letter-spacing: 0px;
    white-space: pre-wrap;
    color: #000000;
    font-size: 15px;
    line-height: 27px;
  }
`;

const TextContainer = styled.div`
  margin-top: 10px;
  > p {
    font-size: 15px;
    color: #000000;
    font-weight: 400;
  }
  > span {
    display: block;
    font-size: 12px;
    color: #2EA5FF;
    font-weight: 400;
  }
`;





