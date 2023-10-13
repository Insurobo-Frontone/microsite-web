import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import { CommonAPI } from '../api/CommonAPI';
import AuthLayout from '../components/Auth/AuthLayout';
import Input from '../components/Input';
import HookFormCheckbox from '../components/Input/HookFormCheckbox';
import AuthButton from '../components/Auth/AuthButton';
import WarningText from '../components/Auth/WarningText';
import SmsCheck from '../components/Auth/SmsCheck';

const Form = styled.form`
  padding-top: 54px;
  > p {
    margin-bottom: 50px;
  }
  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
    > p {
      margin-bottom: 30px;
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
   div:nth-child(2) {
    margin: 10px 0;
  }
  .label {
    display: block;
    margin-bottom: 15px;
    color: #2f2f2f;
    font-size: 20px;
    
  }
  input {
    ::placeholder {
      font-size: 20px;
      color: #989898;
    }

  }
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 20px;
    .label {
      font-size: 15px;
    }
    input {
      ::placeholder {
        font-size: 15px;
      }
    }
  }
`;

const PhoneGroup = styled.div`
  position: relative;
  > div {
    display: flex;
    justify-content: space-between;
    > div {
      width: 469px;
    }
  }
  ${(props) => props.theme.window.mobile} {
    > div {
      > div {
        width: 67.5%;
      }
    }
  }
`;

function Register() {
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
            placeholder='이메일주소를 입력하세요'
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
          {errors.userId?.message && (<WarningText text={errors.userId?.message} error />)}
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
          <WarningText text='*영문 숫자, 특수문자를 조합해 8자리 이상 16자리 이하로 입력해주세요' />
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
              <AuthButton
                sendType
                className={button ? 'auth-code' : 'auth-code disabled'}
                onClick={button ? openSmsSend : null}
                text='인증번호받기'
              />
            </div>
            {smsCheckOpen && (
              <SmsCheck
                active={isActiveTimer}
                onClick={openSmsCheck}
              />
            )}
          </PhoneGroup>
          <HookFormCheckbox />
          <WarningText text='*선택 항목을 동의하지 않아도 가입이 가능합니다.' />
          <AuthButton text='이메일로 가입하기' />
      </Form>
    </AuthLayout>
  )
}
export default Register;