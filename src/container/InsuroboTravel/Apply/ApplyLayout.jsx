import React from "react";
import styled from "styled-components";
import TabMenu from "./TabMenu";
import local from '../../../assets/img/insuroboTravel/local_trip.png';
import over from '../../../assets/img/insuroboTravel/overseas_trip.png';

const ApplyLayout = ({ type, children }) => {
  return (
    <Wrap>
      <Header>
        <TitleWrap>
          <TitleImage type={type}>
            <img src={type === 'local' ? local : over} alt='icon' />
          </TitleImage>
          <TextBox>
            <h2>{type === 'local' ? '국내 여행자 보험' : '해외 여행자 보험'}</h2>
            <p>{type === 'local' ? '보험료 간편 조회 후 결제까지!' : '태풍/지진 등 천재지변도 보상!'}</p>
          </TextBox>
        </TitleWrap>
        <TabMenu type={type} />
      </Header>
      {children}
    </Wrap>
  )
}

export default ApplyLayout;

const Wrap = styled.div`
  
`;

const Header = styled.div`
  display: flex;
  padding: 40px 0 0 40px;
  border-bottom: 1px solid #F0F0F0;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 29px;
  padding-right: 124px;
`;

const TitleImage = styled.div`
  margin-right: 10px;
  transform: ${props => props.type === 'local' ? 'translateY(-10px)' : ''};
  > img {
    width: 114px;
    height: 114px;
  }
`;

const TextBox = styled.div`
  > h2 {
    font-size: 24px;
    margin-bottom: 4px;
  }
  > p {
    font-size: 14px;
  }
`;

