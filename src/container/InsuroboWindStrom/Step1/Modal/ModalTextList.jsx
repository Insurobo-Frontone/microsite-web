import React from "react";
import styled from "styled-components";
import { StorageGetInsurance } from "../../../Storage/Insurance";

const ModalTextList = () => {
  const InsuroboWindstorm = StorageGetInsurance();

  const BuildingInfoData = [
    {
      id: 1,
      title: '건축물 명칭',
      content: InsuroboWindstorm.getCover?.bldNm
    },
    { id: 2, 
      title: '층수', 
      content: `지하${InsuroboWindstorm.getCover?.ugrndFlrCnt}층/지상${InsuroboWindstorm.getCover?.grndFlrCnt}층`
    },
    { id: 3, 
      title: '세대수', 
      content: InsuroboWindstorm.getCover?.totSedae
    },
    {
      id: 4,
      title: '전체 연면적',
      content: `${InsuroboWindstorm.getCover?.totArea}m²`,
    },
    { id: 5, 
      title: '주구조', 
      content: InsuroboWindstorm.getCover?.strctCdNm 
    },
    { id: 6, 
      title: '지붕', 
      content: InsuroboWindstorm.getCover?.roofStrc 
    },
  ]
  return (
    <Wrap>
      {BuildingInfoData.map((cur) => {
        return (
          <div key={cur.id}>
            <Title>
              {cur.title}
            </Title>
            <Text>{cur.content}</Text>
          </div>
        )
      })}
    </Wrap>
  )
}

export default ModalTextList;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #F0F0F0;
  & > *:not(:last-of-type) {
    margin-bottom: 20px;
  }
  > div {
    width: 100%;
    display: flex;
    > p {
      margin-right: 40px;
    }
  }
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`;

const Text = styled.span`
  font-size: 15px;
  font-weight: 400;
`;



