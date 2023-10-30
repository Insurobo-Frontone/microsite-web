import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import icon1 from "../../assets/icon/bell.png";
import icon2 from "../../assets/icon/speaker.png";
import icon3 from "../../assets/icon/wallet.png";
import useWindowSize from "../../hooks/useWindowSize";

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
        padding: 20px 16px;
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
        > h2 {
          font-size: 14px;
        }
        > p {
          padding-top: 0;
          font-size: 12px;
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
    cursor: pointer;
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      height: 86px;
      justify-content: space-between;
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
    cursor: pointer;
    &:first-child {
      background-image: url(${icon2});
      background-position: -17px 74px;
      align-items: flex-end;
      text-align: end;
      padding: 10px 12px 10px 0;
    }
    &:last-child {
      background-image: url(${icon3});
      background-position: 127px 100px;
      padding: 10px 0 10px 16px;
    }
  }

  ${(props) => props.theme.window.mobile} {
    > div {
      width: 48.4%;
      height: 62px;
      &:first-child {
        align-items: flex-end;
        text-align: end;
        background-image: none;
        position: relative;
        overflow: hidden;
        padding: 12px 12px 12px 0;
        ::before {
          content: '';
          position: absolute;
          display: block;
          background-repeat: no-repeat;
          background-size: contain;
          top: -9px;
          left: 0;
          transform: rotate(90deg);
          width: 35px;
          height: 41px;
          z-index: -1;
          background-image: url(${icon2});
        }
      }
      &:last-child {
        background-position: calc(100% + 18px) 50%;
        background-size: 53px;
        position: relative;
        padding: 12px 0 12px 12px;
      }
      > h2 {
        font-size: 16px;
      }
    }
  }
`;

const MainMenu = () => {
  const { width } = useWindowSize();
  let navigate = useNavigate();

  const goToLink = (link) => {
    switch (link) {
      case 'bizcare' :
        window.open('http://www.insrb.com:7070/bizcare/short');
        break;
      case 'duty' :
        navigate('/insuranceInfo?item=duty');
        break;
      case 'card' :
        navigate('/insuroboCard');
        break;
      default: break;
    }
    
  }
  return (
    <MainMenuWrap>
      <TopMenu>
        <div onClick={() => goToLink('duty')}>
          <h2>간편보험가입</h2>
          <p>업종별 의무보험,꼭! 챙기세요</p>
        </div>
      </TopMenu>    
      <BottomMenu>
        <div onClick={() => goToLink('bizcare')}>
          {width > 767.98 ? (<h2>기업경영건강검진</h2>) : (<h2>기업경영검진</h2>)}
          {width > 767.98 ? (<p>기업도 검진이<br />필요합니다</p>) : (<p>기업, 검진이 필요합니다</p>)}
        </div>
        <div onClick={() => goToLink('card')}>
          <h2>제휴서비스</h2>
          {width > 767.98 ? (<p>세금환급과<br />혜택이 있는 카드?</p>) : (<p>세금환급, 카드 혜택</p>)}
        </div>
      </BottomMenu>
    </MainMenuWrap>
  )
}

export default MainMenu;
