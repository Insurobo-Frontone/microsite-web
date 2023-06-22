import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import AuthLayout from '../components/Auth/AuthLayout';
import { Text } from '../components/Font';
import CustomButton from '../components/Button/CustomButton';
import Input from '../components/Input';
import HookFormCheckbox from '../components/Input/HookFormCheckbox';
import useWindowSize from '../hooks/useWindowSize';
import Timer from '../components/Timer';
import { CommonAPI } from '../api/CommonAPI';
import { useFormContext } from "react-hook-form";

const ButtonWrap = styled.div`
  padding-top: 50px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 30px;
  }
`;

const Form = styled.form`
  padding-top: 54px;
  
  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 30px;

  .label {
    display: block;
    margin-bottom: 15px;
    color: #2f2f2f;
  }
  position: relative;
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
  }
  
`;

const PhoneGroup = styled.div`
  position: relative;
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

  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;




function Register() {
  const { width } = useWindowSize();
  const location = useLocation();
  const [codeValidate, setCodeValidate] = useState(false);
  const [button, setButton] = useState(true);
  const [messageId, setMessageId] = useState('');
  const [smsCheckOpen, setSmsCheckOpen] = useState(false);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  
  const { handleSubmit, watch, setFocus, reset, setError, register, formState: {errors} } = useFormContext({ 
    mode: 'onBlur'
  });
  useEffect(() => {
    reset()
  }, [location, reset]);
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    if (codeValidate) {
      try {
        const res = await CommonAPI.post('/api/public/join', {
          userId: data.userId,
          userPw: data.userPw,
          userName: data.userName,
          phoneRole: data.phoneRole,
          marketing_yn: data.marketing_yn === true ? 'Y' : 'N'
        })
        if (res.status === 200) {
          await CommonAPI.post('/api/public/kakaoAPI',{userId: data.userId,userName: data.userName, phoneRole: data.phoneRole })
          alert('회원가입이 완료되었습니다')
          navigate('/')
        } 
        
      } catch (error) {
        console.log('에러', error)
        alert('본인인증이 완료되지 않았습니다.')
        setFocus('confirmCode')
      }
    }
  }

  const onError = (error) => {
    console.log(error)
  }

  const openEmailCheck = async () => {
    try {
      await CommonAPI.get('/api/public/email', {
        params: {
          email: watch('userId')
        }
      })
    } catch (error) {
      setError('userId', { 
        type: 'custom', 
        message: '이미 등록된 이메일입니다'
      });
    }
  }

  const passwordCheck = () => {
    if (watch('userPw') === watch('userPwCheck')) {
      return true;
    } else {
      return false;
    }
  }

 // 본인인증 문자 전송
  const openSmsSend = async () => {
    setIsActiveTimer(false);
    try {
      const res = await CommonAPI.post('/api/public/sms_send', {
        mobile: watch('phoneRole')
      })
      if (res.status === 200) {
        console.log(res)
        setSmsCheckOpen(true);
        setMessageId(res.data.data.messageId);
        setFocus('confirmCode')
        setIsActiveTimer(true);
      }
    } catch (error) {
      console.log('에러', error)
    }
  }

  
  const openSmsCheck = async () => {
    try {
      const res = await CommonAPI.get('/api/public/sms_check', {
        params: {
          messageId: messageId,
          authKey: watch('confirmCode')
        }
      })
      if (res.data.status === 200) {
        alert('인증이 완료되었습니다.')
        setCodeValidate(true)
        setSmsCheckOpen(false)
        setButton(false)
      }
    } catch (error) {
      setCodeValidate(false)
      if (error.response.data.message === '인증번호가 일치하지 않습니다.') {
        setError('confirmCode', {
          type: 'custom',
          message: '인증번호가 일치하지 않습니다.'
        })
      }
      if (error.response.data.message === '인증번호 시간이 만료 되었습니다.') {
        setError('confirmCode', {
          type: 'custom',
          message: '인증번호 시간이 만료 되었습니다.'
        })
      }
    }
  }
  
  return (
    <AuthLayout title='회원가입'>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <InputGroup>
          <label className='label'>이메일</label>
          <input
            className='primary'
            placeholder='AAA.@HJJJJ.COM'
            {...register('userId', {
              required: '*필수 입력 사항입니다.',
              pattern: {
                value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: '규칙에 맞는 이메일 주소를 입력해주세요.'
              },
              validate: {
                check:  () => openEmailCheck() ? true : false
              }
            })}
          />
          {errors.userId?.message && (<ErrorText>{errors.userId?.message}</ErrorText>)}
        </InputGroup>
        <InputGroup>
          <Input 
            label='비밀번호' 
            name='userPw'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          />
          <Input 
            name='userPwCheck'
            type='password'
            placeholder='비밀번호를 다시 한번 입력해주세요'
            require='*필수 입력 사항입니다.'
            validate={{
              check: () => passwordCheck() ? true : '비밀번호가 일치하지 않습니다.'
            }}
          />
            <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
              *영문 숫자, 특수문자를 조합해 8자리 이상 16자리 이하로 입력해주세요
            </Text>
          </InputGroup>
          <InputGroup>
            <Input
              label='이름' 
              name='userName'
              placeholder='이름을 입력해주세요'
              require='*필수 입력 사항입니다.'
            />
          </InputGroup>
          <PhoneGroup>
            <div>
              <Input
                label='휴대폰번호'
                type='phone'
                name='phoneRole' 
                placeholder='‘-’없이 번호만 입력해주세요'
                require='*필수 입력 사항입니다.'
                pattern={{
                  value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                  message: '규칙에 맞는 휴대폰 번호를 입력해 주세요.'
                }}
              />
              <div className={button? 'button' : 'button disabled'} onClick={button ? openSmsSend : null}>
                <Text color='WHITE' bold='200'>인증번호받기</Text>
              </div>
            </div>
            {smsCheckOpen && (
              <SmsCheckBox>
                <div>
                  <input
                    type='number'
                    placeholder='인증번호를 입력해주세요'
                    {...register('confirmCode', {
                      required: '*필수 입력 사항입니다.'
                    })}
                  />
                 {isActiveTimer && (
                    <Timer active={isActiveTimer} />
                 )}
                </div>
                {errors.confirmCode?.message && (<ErrorText>{errors.confirmCode?.message}</ErrorText>)}
                <div className='confirmButton' onClick={openSmsCheck}>
                  <Text color='WHITE' bold='200'>확인</Text>
                </div>
              </SmsCheckBox>
            )}
          </PhoneGroup>
            
          <HookFormCheckbox />

          <Text size={width > 768 ? '0.9rem' : '0.86rem'} color='WARNING_MESSAGE'>
            *선택 항목을 동의하지 않아도 가입이 가능합니다.
          </Text>
          <ButtonWrap>
            <CustomButton bgColor='GRAY' width='100%' type='submit'>
              <Text color='WHITE' bold='200'>
                이메일로 가입하기
              </Text>
            </CustomButton>
          </ButtonWrap>
      </Form>
    </AuthLayout>
  )
}
export default Register;