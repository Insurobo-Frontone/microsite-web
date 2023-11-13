import React from "react";
import styled from "styled-components";
import { ReactComponent as CloseBtn } from '../../../../../assets/icon/addrModalCloseBtn.svg';
import Button from "../../../Button";
import InfoData from './info';

const TermsModal = ({onClick, id}) => {
  return (
    <TermsModalWrap>
      <Content>
        <TitleWrap>
          <p>이용약관</p>
          <div>
            <StyledCloseBtn onClick={onClick} />
          </div>
        </TitleWrap>
        <Info dangerouslySetInnerHTML={{
            __html: InfoData.find((cur) => cur.id === id).textData
          }} 
        />
        <Button onClick={onClick}>확인</Button>
      </Content>
    </TermsModalWrap>
  )
}
export default TermsModal;


const TermsModalWrap = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
`;

const Content = styled.div`
  min-width: 375px;
  max-width: 395px;
  max-height: 600px;
  border-radius: 5px;
  background-color: #FFFFFF;
  overflow: scroll;
  padding: 20px 16px 30px;
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    border-radius: 0;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;
  > p {
    font-size: 26px;
    line-height: 42px;
    font-weight: 700;
    width: 80%;
    text-align: center;
  }
  > div {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) => props.theme.window.mobile} {
    > p {
      font-size: 20px;
    }

  }
`;

const StyledCloseBtn = styled(CloseBtn)`
  stroke: #000;
`;

const Info = styled.div`
  margin-top: 10px;
  width: 100%;
  color: #808080;
  padding-bottom: 20px;
  h1 {
    font-size: 15px;
    font-weight: bold;
    margin: 3px 0px;
    color: #808080;
  }
  p,
  span {
    font-size: 12px;
    font-weight: 300;
    padding: 2px 0px;
    line-height: 15px;
  }
  p {
    padding: 2px 4px;
    margin-bottom: 0;
  }
`;
