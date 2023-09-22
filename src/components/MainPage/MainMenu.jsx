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
