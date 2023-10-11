import React from "react";
import styled from "styled-components";
import CustomButton from "../Button/CustomButton";

const AuthButtonWrap = styled.div`
  > button {
    > p {
      color: #FFFFFF;
      font-weight: 300;
      font-size: 20px;
    }
   }
  
  &.auth-code {
    width: 254px;
    margin-top: 44px;
  }
  &.auth-code.disabled {
    opacity: 0.2;
  }
  &.confirmButton {
    width: 150px;
  }

  ${(props) => props.theme.window.mobile} {
    > button {
      > p {
        font-size: 15px;
      }
    }
    &.auth-code {
      width: 30%;
      margin-top: 39px;
    }
    &.confirmButton {
      width: 30%;
    }
  }
`;


const AuthButton = ({text, sendType, className, onClick}) => {
  return (
    <AuthButtonWrap className={className} onClick={onClick}>
      <CustomButton bgColor={sendType ? 'GRAY3' : 'GRAY'} width='100%'>
        <p>{text}</p>
      </CustomButton>
    </AuthButtonWrap>
  )
}

export default AuthButton;
