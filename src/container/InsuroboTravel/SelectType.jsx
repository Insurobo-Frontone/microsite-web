import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import local from '../../assets/img/insuroboTravel/local_trip.png';
import over from '../../assets/img/insuroboTravel/overseas_trip.png';

const SelectType = () => {
  const data = [
    {
      idx: '1',
      title: '국내 여행자 보험',
      text: '보험료 간편 조회 후 결제까지!',
      img: local,
      link: '/insuroboTravel/apply?type=local&step=1'
    },
    {
      idx: '2',
      title: '해외 여행자 보험',
      text: '태풍/지진 등 천재지변도 보상!',
      img: over,
      link: '/insuroboTravel/apply?type=over&step=1'
    }
  ];

  const navigate = useNavigate();

  return (
    <SelectTypeWrap>
      {data.map((type) => {
        return (
          <SelectCard onClick={() => navigate(type.link)}>
            <div>
              <h2>{type.title}</h2>
              <p>{type.text}</p>
            </div>
            <img src={type.img} alt={type.title} />
          </SelectCard>
        );
      })}
    </SelectTypeWrap>
  );
}

export default SelectType;


const SelectTypeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 130px;
  background-color: #FFFFFF;
  border-radius: 15px;
  margin-bottom: 20px;
  > div:first-child > img {
    bottom: 30px;
    right: 10px;
  }
  > div:last-child > img {
    top: 0;
    right: 14px;
  }
`;

const SelectCard = styled.div`
  display: flex;
  position: relative;
  width: 416px;
  height: 172px;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
  border-radius: 15px;
  padding: 56px 35px;
  > div {
    > h2 {
      color: #393939;
      font-size: 25px;
    }
    > p {
      color: 545454;
      font-size: 14px;
    }
  }
  > img {
    position: absolute;
  }
  :hover {
    background-color: #2EA5FF;
    > div {
      > h2, p {
        color: #FFFFFF;
      }

    } 
  }
`;

