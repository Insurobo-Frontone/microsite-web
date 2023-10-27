import React from "react";
import styled, { css } from "styled-components";
import TabMenu from "./TabMenu";
import local from '../../../assets/img/insuroboTravel/Apply_local_trip.png';
import over from '../../../assets/img/insuroboTravel/overseas_trip.png';
const ApplyHeader = ({ type }) => {
  return (
    <>
      <Header>
        <TitleWrap>
          <TitleImage type={type}>
            <img src={type === 'local' ? local : over} alt='icon' />
          </TitleImage>
          <TextBox style={type === 'local' ? {
            marginTop: '6px'
          }: { marginTop: 0 }}>
            <h2>{type === 'local' ? '국내 여행자 보험' : '해외 여행자 보험'}</h2>
            <p>{type === 'local' ? '여행출발 1시간 전까지 가입가능!' : '태풍/지진 등 천재지변도 보상!'}</p>
          </TextBox>
        </TitleWrap>
        <TabMenu type={type} />
      </Header>
    </>
  );
}

export default ApplyHeader;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #F0F0F0;
  height: 183px;
  padding-right: 80px;

  ${(props) => props.theme.window.mobile} {
    height: 54px;
    background-color: #2EA5FF;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TitleImage = styled.div`
  margin: 0 10px 0 40px;

  > img {
    width: 114px;
    height: 114px;
  }
  ${props => props.type === 'local' && css`
    transform: translateY(-15px);
    margin: 0 4px 0 33px;
    > img {
      width: 127px;
      height: 127px;
    }
  `}
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

