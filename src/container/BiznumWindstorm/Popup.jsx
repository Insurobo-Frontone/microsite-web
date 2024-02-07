import React from "react";
import styled from "styled-components";

const Popup = ({ close, children }) => {
  return (
    <>
      <Overay>
        <Wrap>
          <div>
            <h2>안내</h2>
            {children}
          </div>
          <CheckButton onClick={close}>확인</CheckButton>
        </Wrap>
      </Overay>
    </>
  );
}

export default Popup;

const Overay = styled.div`
  position: fixed;
  inset: 0;
  width: 100% !important;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 324px;
  overflow: hidden;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 4px 6px 16px 0px rgba(0, 0, 0, 0.25);
  > div {
    padding: 22px 24px 22px;
    text-align: center;
    > h2 {
      font-size: 16px;
      color: #333333;
      padding-bottom: 14px;
    }
    > p {
      font-size: 14px;
      color: #666666;
      font-weight: 400;
    }
  }
  

  ${(props) => props.theme.window.mobile} {

  }
`;


const CheckButton = styled.p`
  background-color: #6262EF;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  ${(props) => props.theme.window.mobile} {

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
