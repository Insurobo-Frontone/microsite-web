import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import AuthLayout from '../components/Auth/AuthLayout';
import LoginFailModal from "../components/Modal/LoginFailModal";
import Input from '../components/Input';
import { useFormContext } from 'react-hook-form';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import { setAccessToken } from '../container/Storage/Auth';
import { CommonAPI } from "../api/CommonAPI";
import naverIcon from '../assets/img/naverIcon.png';
import kakaoIcon from '../assets/img/kakaoIcon.png';
import AuthButton from '../components/Auth/AuthButton';

const SocialLoginGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 80px;

  > button {
    display: flex;
    align-items: center;
    width: 46.6%;
    padding: 22px 4.67%;
    white-space: nowrap;
    
    > img {
      margin-right: 34px;
    }
    > p {
      font-size: 23px;
      color: #FFFFFF;
    }
  }
  > button:first-child > p {
      color: #545454;
  }

  ${props => props.theme.window.mobile} {
    flex-direction: column;
    padding: 55px 0 24px;
    > button {
      width: 100%;
      padding: 0 0 0 42px;
      
      > p {
        line-height: 22px;
        font-size: 15px;
      }
      > img {
        margin-right: 18.5%;
      }
      :first-child img {
        width: 23.16px;
        height: 21.28px;
      }
      :last-child {
        margin-top: 15px;
      }
      :last-child img {
        width: 20px;
        height: 20px;
      }
    }
    
  }
`;

const Linear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 110px;
  > span {
    font-size: 23px;
    color: #545454;
  }

  > hr {
    border: 0;
    width: 43.3%;
    height: 2px;
    background: #F5F5F5;
  }

  ${props => props.theme.window.mobile} {
    height: 50px;
    > hr {
      width: 40%;
    }
    > span {
      font-size: 1rem;
    }
  }
`;

const Form = styled.form`
  padding: 14px 0 18px;
  ${props => props.theme.window.mobile} {
    div:nth-child(2) {
      margin: 10px 0;
    }
  }
  
`;


const TextLink = styled(Link)`
  color: #2f2f2f;
  display: flex;
  justify-content: center;
  padding-top: 22px;
  font-size: 20px;
  ${props => props.theme.window.mobile} {
    padding-top: 16px;
    font-size: 15px;
  }
`;

function Login() {
  const { width }= useWindowSize();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState(); //로그인 타입 (kakao, naver, email)
  const [type_kor, setType_kor] = useState(); //로그인 타입 한글 (kakao, naver, email)
  const { handleSubmit, reset, setError, setFocus } = useFormContext();
  const path = localStorage.getItem("@pathname");

  useEffect(() => {
    reset();
    const loginCode = searchParams.get("loginCode");
    const accessToken = searchParams.get("token");

    if (loginCode !== null && loginCode === 'fail') {
      setShowPopup(true);
      setType(searchParams.get("type"));
      switch (searchParams.get("type")) {
        case "kakao":
          setType_kor("카카오");
          break;
        case "naver":
          setType_kor("네이버");
          break;
        default:
          setType_kor("이메일");
      }
    }
    if (loginCode !== null && loginCode === 'success') {
      setAccessToken(accessToken);
      if (path) {
        navigate(path);
      } else {
        navigate('/');
      }
    }
  }, []);

  
  const onError = (error) => { 
    // console.log(error)
  }

  const onSubmit = async (data) => {
    const loginData = 
      {
        userId: data.userId,
        userPw: data.userPw
      }
 
    const req = JSON.stringify(loginData)
    // console.log(JSON.stringify(loginData))
    try {
      const res = await CommonAPI.post('/api/public/login', req)

      if(res.status === 200){
        setAccessToken(res.data.data.accessToken);
        if (path) {
          navigate(path);
        } else {
          navigate('/');
        }
      }
    } catch (error) {
      // console.log(error)
      setFocus('userPw')
      setError('userPw', {
        type: 'custom',
        message: '비밀번호가 일치하지 않습니다'
      })
    }
  }

  const onKakaoLogin = () => {
    const KAKAO_REDI_URL = process.env.REACT_APP_SERVER_HOST+"/api/oauth2/authorization/kakao";
    window.location.href =  KAKAO_REDI_URL;
  }
  const onNaverLogin = () => {
    const NAVER_REDI_URL = process.env.REACT_APP_SERVER_HOST+"/api/oauth2/authorization/naver";
    window.location.href =  NAVER_REDI_URL;
  }

  return (
    <AuthLayout
      title='로그인'
      subTitle={width > 768 ? `소상공인의 성공을 지원하는 \n소상공인 도우미 방문을 환영합니다.` : `소상공인의 성공을 지원하는 \n소상공인 도우미 방문을\n환영합니다.`}
    >
    <SocialLoginGroup>
      <CustomButton bgColor='YELLOW' onClick={onKakaoLogin}>
        <img src={kakaoIcon} alt='카카오톡' />
        <p>카카오톡 로그인</p>
      </CustomButton>
      <CustomButton bgColor='GREEN' onClick={onNaverLogin}>
        <img src={naverIcon} alt='네이버' />
        <p>네이버 로그인</p>
      </CustomButton>
    </SocialLoginGroup>
    <Linear>
      <hr /><span>또는</span><hr />
    </Linear>
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input
        label='이메일'
        name='userId'
        placeholder='이메일주소를 입력하세요'
        require='*필수 입력 사항입니다.'
        pattern={{
          value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: '규칙에 맞는 이메일 주소를 입력해주세요.'
        }}
      />
      <Input
        name='userPw'
        type='password'
        placeholder='비밀번호를 입력하세요'
        require='*필수 입력 사항입니다.'
      />
      <AuthButton text='이메일로 계속하기' />
      <TextLink to='/login/findAccount'>계정정보를 잊으셨나요?</TextLink>
    </Form>
      {showPopup &&
        <LoginFailModal type={type} kor_name={type_kor} onClick={()=> setShowPopup(false)}></LoginFailModal>
      }
  </AuthLayout>
  )
}

export default Login;
