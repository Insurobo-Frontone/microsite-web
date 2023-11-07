import React from "react";
import styled, { css } from "styled-components";
import closeIcon from '../../../../assets/icon/travelCloseBtn_Black.png';

const Popup = ({ close, children, type, onClickYse }) => {
  return (
    <>
      <Overay>
        <Wrap type={type}>
          <div>
            {children}
          </div>
          
          {type === 'select' ? (
            <ButtonWrap>
              <CheckButton onClick={onClickYse}>예</CheckButton>
              <CheckButton onClick={close}>아니요</CheckButton>
            </ButtonWrap>
          ) : (
            <CheckButton onClick={close}>확인</CheckButton>
          )}
        </Wrap>
      </Overay>
    </>
  );
}

export default Popup;

const Overay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 512px;
  overflow: hidden;
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);
  > div:last-child {
    padding: 0;
  }
  > div {
    padding: 30px 30px 50px;
    > p {
      font-size: 20px;
      color: #000000;
      font-weight: 400;
    }
  }
  ${props => props.type === 'select' && css`
     > div {
      padding: 60px 30px;
     }
  `}
  ${props => props.type === 'info' && css`
    > div {
      padding: 30px 30px 40px;
      > h2 {
        font-size: 20px;
        color: #000000;
        &.close-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          > span {
            display: block;
            width: 29px;
            height: 29px;
            background-image: url(${closeIcon});
            background-position: center;
            background-repeat: no-repeat;
          }
        }
      }
      > div {
        padding-top: 40px;
        color: #333333;
        > span {
          color: #333333;
          border-bottom: 1px solid #333333;
        }
        > ul {
          counter-reset: number 0;
          > li {
            display: flex;
            color: #333333;
            margin-bottom: 20px;
            :last-child {
              margin-bottom: 0;
            }
            ::before {
              content: counter(number)'.';
              display: block;
              counter-increment: number 1;
              margin-right: 5px;
            }
          }
        }
      }
    }
  `}

  ${(props) => props.theme.window.mobile} {
    width: 312px;
    text-align: center;
    > div {
      padding: 44px 0;
      > p {
        font-size: 16px;
      }
    }
    ${props => props.type === 'info' && css`
      > div {
        padding: 20px;
        > h2 {
          font-size: 16px;
          text-align: start;
          &.close-header {
            > span {
              width: 24px;
              height: 24px;
              background-size: 12.02px;
            }
          }
        }
        > div {
          padding-top: 10px;
          font-size: 14px;
          text-align: start;
          > ul {
            > li {
              margin-bottom: 10px;
            }
          }
        }
      }
    `}
  }
`;

const CheckButton = styled.div`
  background-color: #2EA5FF;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 20px;
  ${(props) => props.theme.window.mobile} {
    font-size: 16px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;

  > div {
    width: 50%;
    :first-child {
      background-color: #FFFFFF;
      color: #2EA5FF;
    }
  }
`;
