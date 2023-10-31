import React from "react";
import styled, { css } from "styled-components";
import TabMenu from "./TabMenu";
import local from '../../../assets/img/insuroboTravel/Apply_local_trip.png';
import over from '../../../assets/img/insuroboTravel/overseas_trip.png';
import useWindowSize from "../../../hooks/useWindowSize";
const ApplyHeader = ({ type }) => {
  const { width }  = useWindowSize();
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
            <h2>
              {width > 767.98 ? (
                <>
                  {type === 'local' ?  "국내 여행자 보험" : '해외 여행자 보험'}
                </>
              ) : (
                <>
                  {type === 'local' ?  "국내여행자보험" : '해외여행자보험'}
                </>
              )}
            </h2>
            {width > 767.98 && (<p>{type === 'local' ? '여행출발 1시간 전까지 가입가능!' : '태풍/지진 등 천재지변도 보상!'}</p>)}
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
    border-bottom: none;
    padding: 0 24px;
    position: relative;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  ${(props) => props.theme.window.mobile} {
    position: absolute;
    bottom: calc(100% + 14px);
    left: calc(50% - 60px);
  }
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

  ${(props) => props.theme.window.mobile} {
    display: none;
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

  ${(props) => props.theme.window.mobile} {
    position: relative;
    > h2 {
      width: 120px;
      background-color: #FFFFFF;
      font-size: 18px;
      margin-bottom: 0;
    }
  }
`;

