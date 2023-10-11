import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import WarningText from "./WarningText";
import AuthButton from "./AuthButton";
import Timer from '../Timer';

const SmsCheckWrap = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 20px;
  position: relative;
  > div {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    input {
      width: 100%;
      height: 80px;
      ::placeholder {
        font-size: 16px;
      }
    }
  }
  > div:first-child {
    border-bottom: 1px solid #989898;
  }

  ${props => props.theme.window.mobile} {
    margin-top: 10px;
    > div {
      input {
        height: 50px;
        ::placeholder {
          font-size: 15px;
          
        }
      }
    }
  }
`;

const SmsCheck = ({ active, onClick }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <SmsCheckWrap>
      <div>
        <input
          type="number"
          placeholder="인증번호를 입력해주세요"
          {...register("confirmCode", {
            required: "*필수 입력 사항입니다.",
          })}
        />
         {active && <Timer active={active} />}
      </div>
      <ErrorMessage
        errors={errors}
        name={'confirmCode'}
        render={({message}) => <WarningText text={message} error />}
      />
      <AuthButton
        sendType
        text='확인'
        className="confirmButton"
        onClick={onClick}
      />
    </SmsCheckWrap>
  )
}

export default SmsCheck;