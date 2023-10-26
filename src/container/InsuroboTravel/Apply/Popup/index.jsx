import React from "react";
import styled, { css } from "styled-components";

const Popup = ({ close, children, type }) => {
  return (
    <>
      <Overay>
        <Wrap type={type}>
          {type === 'alert' || 'info' && (
            <>
              <div>
                {children}
              </div>
              <CheckButton onClick={close}>확인</CheckButton>
            </>
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

  ${props => props.type === 'info' && css`
    > div {
      padding: 30px 30px 40px;
      > h2 {
        font-size: 20px;
        color: #000000;
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
`;

const CheckButton = styled.div`
  background-color: #2EA5FF;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 20px;
`;


