import React, { useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";
import { CommonAPI } from "../api/CommonAPI";
import { Text } from "../components/Font";
import Input from "../components/Input";
import AuthLayout from "../components/Auth/AuthLayout";
import CustomButton from "../components/Button/CustomButton";
import Timer from "../components/Timer";

import insurobo from '../assets/icon/email-svg.svg';
import kakao from '../assets/img/kakaoIcon.png';
import naver from '../assets/icon/naver-icon.png';


const Form = styled.form`
  padding-top: 80px;
  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
  }
`;

const ButtonWrap = styled.div`
  ${(props) => props.theme.window.mobile} {
    padding-top: 0;
  }
`;

const ResultWrap = styled.div`
  padding-top: 60px;
  > input {
    width: 100%;
    border: 1px solid #2f2f2f;
    height: 80px;
    margin-bottom: 50px;

    ::placeholder {
      color: #2f2f2f;
    }
  }
  ${(props) => props.theme.window.mobile} {
    > input {
      height: 50px;
    }
  }
`;

const PhoneGroup = styled.div`
  position: relative;
  margin-bottom: 100px;
  > div {
    display: flex;
    justify-content: space-between;
    > .button {
      width: 40%;
      height: 80px;
      margin-left: 27px;
      background-color: #989898;
      border-radius: 10px;
      align-self: flex-end;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    > .button.disabled {
      opacity: 0.2;
    }
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      > .button {
        height: 50px;
        margin-bottom: 20px;
        margin-left: 5px;
      }
    }
  }
`;

const SmsCheckBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  > div {
    width: 75%;
    height: 50px;
    border-bottom: 1px solid #989898;
    position: relative;
    input {
      width: 100%;
    }
  }
  .confirmButton {
    width: 20%;
    height: 50px;
    background-color: #989898;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  padding-top: 5px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  position: absolute;
  bottom: -20px;
  ${(props) => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const DataWarp = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  width: 100%;
`

const DataContent = styled.div`

`

const DataValue = styled.div`
  &:not(first-child){
    margin-top: 16px;
  }
  width: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  gap: 12px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(229, 229, 229);
  padding: 15px 12px;
`

const AccountIcon = styled.div`
  width: 32px;
  height: 32px;
  /* border: 1px solid rgb(235, 235, 235); */
  /* border-radius: 24px; */
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-shrink: 0;
`

const AccTextWarp = styled.div`
  overflow: hidden; 
`

const EmailText = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 26px;
  font-weight: 600;
  color: rgb(33, 35, 34);
`

const RegDate = styled.div`
  font-size: 12px;
  line-height: 19px;
  font-weight: 400;
  color: rgb(100, 100, 100);
`

function FindAccount() {
  const {
    handleSubmit,
    watch,
    setError,
    setFocus,
    register,
    formState: { errors },
  } = useFormContext();
  const [button, setButton] = useState(true);
  const [messageId, setMessageId] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [email, setEmail] = useState("");
  const [smsCheckOpen, setSmsCheckOpen] = useState(false);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [codeValidate, setCodeValidate] = useState(false);

  const openSmsSend = async () => {
    const data = {
      mobile: watch("phoneRole")
    }
    setIsActiveTimer(false);
    try {
      const res = await CommonAPI.post("/api/public/sms_send",data);
      setMessageId(res.data.data.messageId);
      setSmsCheckOpen(true);
      setFocus("confirmCode");
      setIsActiveTimer(true);
    } catch (error){
      console.log(error)
    }
  };

  const openSmsCheck = async () => {
    
    try{
        const res = await CommonAPI.get(`/api/public/sms_check?messageId=${messageId}&authKey=${watch("confirmCode")}`);
        setMessage(res.data.message);
        alert("인증이 완료되었습니다.");
        setCodeValidate(true);
        setSmsCheckOpen(false);
        setButton(false);

    }catch (error){
      console.log(error);
      setMessage(error.response.data.message);
      setCodeValidate(false);
      if (error.response.data.message === "인증번호가 일치하지 않습니다.") {
        setError("confirmCode", {
          type: "custom",
          message: "인증번호가 일치하지 않습니다.",
        });
      }
      if (
          error.response.data.message === "인증번호 시간이 만료 되었습니다."
      ) {
        setError("confirmCode", {
          type: "custom",
          message: "인증번호 시간이 만료 되었습니다.",
        });
      }
    }


  };
  const onSubmit = async () => {
    try{
        const res = await CommonAPI.get(`/api/public/findEmail?mobile=${watch("phoneRole")}&messageId=${messageId}`);
          setStatus(res.data.status);
          setMessage(res.data.message);
          setEmail(res.data.data)
    }catch (error){
          setMessage(error.response.data.message);
    }

  };

  const onError = (error) => {
    console.log(error);
  };

  return (
    <AuthLayout
      title="계정찾기"
      subTitle={
        status === 200
          ? "회원님의 계정을 찾았습니다."
          : `계정을 찾기 위해서\n휴대폰번호를 입력해주세요`
      }
    >
      {status === 200 ? (
        <ResultWrap>
          <DataWarp>
           <DataContent>

          {email.map((data, index) => (
              <DataValue>
                <AccountIcon>
                  {data.loginType === 'insurobo' ? <img src={insurobo} alt='insurobo'/> : null}
                  {data.loginType === 'naver' ? <img src={naver} alt='naver' /> : null}
                  {data.loginType === 'kakao' ? <img src={kakao} alt='kakao' /> : null}
                </AccountIcon>
                <AccTextWarp>
                  <EmailText>{data.userId}</EmailText>
                  <RegDate>{data.createdDate} 가입</RegDate>
                </AccTextWarp>
              </DataValue>
            // <input value={data.userId} readOnly key={index} />
          ))}
           </DataContent>
          </DataWarp>
          <ButtonWrap>
            <CustomButton bgColor="GRAY" width="100%">
              <Link to="/">
                <Text color="WHITE" bold="200">
                  메인으로 돌아가기
                </Text>
              </Link>
            </CustomButton>
          </ButtonWrap>
        </ResultWrap>
      ) : (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <PhoneGroup>
            <div>
              <Input
                label="휴대폰번호"
                type="phone"
                name="phoneRole"
                placeholder="‘-’없이 번호만 입력해주세요"
                require="*필수 입력 사항입니다."
                maxLength={11}
                pattern={{
                  value:
                    /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                  message: "규칙에 맞는 휴대폰 번호를 입력해 주세요.",
                }}
              />
              <div
                className={button ? "button" : "button disabled"}
                onClick={button ? handleSubmit(openSmsSend) : null}
              >
                <Text color="WHITE" bold="200">
                  인증번호받기
                </Text>
              </div>
            </div>
            {smsCheckOpen && (
              <SmsCheckBox>
                <div>
                  <input
                    type="number"
                    placeholder="인증번호를 입력해주세요"
                    {...register("confirmCode", {
                      required: "*필수 입력 사항입니다.",
                    })}
                  />
                  {isActiveTimer && <Timer active={isActiveTimer} />}
                </div>
                {errors.confirmCode?.message && (
                  <ErrorText>{errors.confirmCode?.message}</ErrorText>
                )}
                <div className="confirmButton" onClick={openSmsCheck}>
                  <Text color="WHITE" bold="200">
                    확인
                  </Text>
                </div>
              </SmsCheckBox>
            )}
          </PhoneGroup>
          <ButtonWrap>
            <CustomButton bgColor="GRAY" width="100%" type="submit">
              <Text color="WHITE" bold="200">
                이메일로 계속하기
              </Text>
            </CustomButton>
          </ButtonWrap>
        </Form>
      )}
    </AuthLayout>
  );
}

export default FindAccount;
