import React from "react";
import styled from "styled-components";
import { StorageGetInsruance } from "../../../Storage/Insurance";

const ModalTextList = () => {
  const InsuroboWindstorm = StorageGetInsruance();

  const BuildingInfoData = [
    {
      id: 1,
      title: '건축물 명칭',
      content: InsuroboWindstorm.insurance?.bld_name
    },
    { id: 2, title: '층수', content: InsuroboWindstorm.insurance?.flr_name },
    { id: 3, title: '세대수', content: InsuroboWindstorm.insurance?.cnt_sedae },
    {
      id: 4,
      title: '전체 연면적',
      content: `${InsuroboWindstorm.insurance?.total_area}m²`,
    },
    { id: 5, title: '주구조', content: InsuroboWindstorm.insurance?.main_struct },
    { id: 6, title: '지붕', content: InsuroboWindstorm.insurance?.roof_name },
  ]
  return (
    <Wrap>
      {BuildingInfoData.map((cur) => {
        return (
          <div>
            <Title key={cur.id}>
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



