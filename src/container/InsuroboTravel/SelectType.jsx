import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import local from '../../assets/img/insuroboTravel/local_trip.png';
import over from '../../assets/img/insuroboTravel/overseas_trip.png';
import messageTail from '../../assets/img/insuroboTravel/messageBoxTail.png';

const SelectType = () => {
  const data = [
    {
      idx: '1',
      title: '국내 여행자 보험',
      text: '보험료 간편 조회 후 결제까지!',
      img: local,
      link: '/insuroboTravel/apply?step=1',
      type: 'local',
    },
    {
      idx: '2',
      title: '해외 여행자 보험',
      text: '서비스 준비중',
      img: over,
      link: '#',
      type: 'over'
    }
  ];

  const navigate = useNavigate();
  const checkLogin = (link, type) => {
    navigate(link, {
      state: {
        type: type,
        step: '1',
      }
    });
  }
  return (
    <SelectTypeWrap>
      <MessageBox>
        간단한 보험료 조회,&nbsp;<span>걱정없이 떠나세요!</span>
      </MessageBox>
      {data.map((type) => {
        return (
          <SelectCard key={type.idx} onClick={() => checkLogin(type.link, type.type)}>
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
  position: relative;

  ${(props) => props.theme.window.mobile} {
    flex-direction: column;
    padding: 0;
    background-color: transparent;
    margin-bottom: 40px;
  }
`;
const MessageBox = styled.p`
  background-color: #2EA5FF;
  border-radius: 15px;
  color: #FFFFFF;
  width: 446px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -129px;
  right: 31px;
  font-size: 24px;
  z-index: 1;
  > span {
    color: #FFFFFF;
    font-weight: 300;
  }

  ::after {
    content: '';
    display: flex;
    position: absolute;
    width: 36px;
    height: 38px;
    background-image: url(${messageTail});
    bottom: -30px;
    left: 371px;
    z-index: 0;
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 50.91px;
    top: -74px;
    right: 0;
    font-size: 16px;
   
    ::after {
      width: 25.19px;
      height: 26.82px;
      background-size: contain;
      bottom: -20px;
      left: 85%;
    }
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
    right: 14px;
    top: 0;
  }
  :hover {
    background-color: #2EA5FF;
    > div {
      > h2, p {
        color: #FFFFFF;
      }

    } 
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 86px;
    box-shadow: none;
    padding: 20px 16px;
    margin-bottom: 10px;
    overflow: hidden;
    :last-child {
      margin-bottom: 0;
    }
    > div {
      > h2 {
        font-size: 18px;
      }
      > p {
        font-size: 12px;
      }
    }
    > img {
      width: 137px;
      right: -10px;
      top: -19px;
    }
    > img:first-child {
      right: 10px;
    }
    
  }
`;

