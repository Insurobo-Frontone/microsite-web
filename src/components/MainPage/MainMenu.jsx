import React from "react";
import styled from "styled-components";

import icon1 from "../../assets/icon/bell.png";
import icon2 from "../../assets/icon/speaker.png";
import icon3 from "../../assets/icon/wallet.png";

const MainMenuWrap = styled.div`
  width: 416px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    > div {
      border-radius: 15px;
      padding: 20px;
      box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.10);
      > h2 {
        font-size: 20px;
      }
      > p {
        font-size: 14px;
        padding-top: 10px;
      }
    }
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    > div:first-child  {
      > div {
        padding: 19px 16px;
        > h2 {
          font-size: 18px;
        }
        > p {
          padding-top: 2px;
        }
      }
    }
    > div:last-child  {
      > div {
        
        padding: 9px 12px;
        > h2 {
          font-size: 16px;
        }
        > p {
          padding-top: 2px;
          font-size: 12px;
          /* > br {
            display: none;
          } */
        }
      }
    }
  }
`;

const TopMenu = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 172px;
    background-image: url(${icon1});
    background-repeat: no-repeat;
    background-position: 257px -4px;
    
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      height: 86px;
      background-position: calc(100% + 6px) -4px;
      background-size: 95.74px;
      margin-bottom: 10px;
    }
  }
`;

const BottomMenu = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 198px;
    height: 172px;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:first-child {
      background-image: url(${icon2});
      background-position: -17px 74px;
      align-items: flex-end;
      text-align: end;
    }
    &:last-child {
      background-image: url(${icon3});
      background-position: 127px 100px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      width: 48.4%;
      height: 86px;
      &:first-child {
        align-items: flex-end;
        text-align: end;
        background-image: none;
        position: relative;
        overflow: hidden;
        ::before {
          content: '';
          position: absolute;
          display: block;
          background-repeat: no-repeat;
          background-size: contain;
          top: -7px;
          left: 2px;
          transform: rotate(90deg);
          width: 35px;
          height: 41px;
          z-index: -1;
          background-image: url(${icon2});
        }
      }
      &:last-child {
        background-position: calc(100% + 28px) 50%;
        background-size: 53px;
        position: relative;
      }
      > h2 {
        font-size: 16px;
      }
    }
  }
`;

const MainMenu = () => {
  return (
    <MainMenuWrap>
      <TopMenu>
        <div>
          <h2>간편보험가입</h2>
          <p>업종별 의무보험,꼭! 챙기세요</p>
        </div>
      </TopMenu>    
      <BottomMenu>
        <div>
          <h2>기업경영건강검진</h2>
          <p>기업도 검진이<br />필요합니다.</p>
        </div>
        <div>
          <h2>제휴서비스</h2>
          <p>세금환급과<br />혜택이 있는 카드?</p>
        </div>
      </BottomMenu>
    </MainMenuWrap>
  )
}

export default MainMenu;
