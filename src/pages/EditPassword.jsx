import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from "react-hook-form";
import { Text } from '../components/Font';

import Input from '../components/Input';
import AuthLayout from '../components/Auth/AuthLayout';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';



const Form = styled.form`
  padding-top: 80px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 20px;
  }
`;

const ButtonWrap = styled.div`
  padding-top: 20px;

  ${(props) => props.theme.window.mobile} {
    padding-top: 30px;

  }
`;


function EditPassword() {
  const auth = localStorage.getItem("@access-Token");
  let navigate = useNavigate();

  const onSubmit = async (data) => {
    axios({
      url: 'http://localhost:8080/api/private/pwdUpdate',
      method: 'put',
      headers: { 
        "Content-Type": `application/json`,
          Authorization : `Bearer ${auth}`
      },
      data: JSON.stringify(data)
    }).then(function (response) {
      console.log(response)
      alert('비밀번호 변경이 완료되었습니다.')
      navigate('/')
      window.location.reload()
    }).catch(function (error) {
      console.log(error)
    })
  }

  const onError = (error) => {
    console.log(error);
  }

  const { handleSubmit, watch } = useFormContext();
  const { width } = useWindowSize();
  const passwordCheck = () => {
    if (watch('newUserPw') === watch('newUserPwCheck')) {
      return true;
    } else {
      return false;
    }
  }
  return (
      <AuthLayout
        title='비밀번호 변경'
        subTitle='비밀번호를 변경해 주세요'
      >
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            name='userPw'
            label='기존 비밀번호'
            type='password'
            placeholder='변경할 비밀번호를 입력해주세요'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          />
          <Input
            name='newUserPw'
            label='비밀번호'
            type='password'
            placeholder='변경할 비밀번호를 입력해주세요'
            require='*필수 입력 사항입니다.'
            pattern={{
              value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/,
              message: '규칙에 맞는 비밀번호를 입력해주세요.'
            }}
          />
          <Input
            name='newUserPwCheck'
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
          <ButtonWrap>
            <CustomButton bgColor='GRAY' width='100%' type='submit'>
              <Text color='WHITE' bold='200'>
                비밀번호 변경하기
              </Text>
            </CustomButton>
          </ButtonWrap>
        </Form>
    </AuthLayout> 
  )
}

export default EditPassword