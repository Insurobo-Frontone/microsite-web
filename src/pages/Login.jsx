import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import AuthLayout from '../components/Auth/AuthLayout';
import LoginFailModal from "../components/Modal/LoginFailModal";
import Input from '../components/Input';
import { Text } from '../components/Font';
import { useFormContext } from 'react-hook-form';
import CustomButton from '../components/Button/CustomButton';
import useWindowSize from '../hooks/useWindowSize';
import { setAccessToken, setUser } from '../container/Auth';
import { CommonAPI } from "../api/CommonAPI";

import naverIcon from '../assets/img/naverIcon.png';
import kakaoIcon from '../assets/img/kakaoIcon.png';
import UserContext from '../container/user';
import { useContext } from 'react';

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
      margin-right: 14.3%;
    }
  }

  ${props => props.theme.window.mobile} {
    flex-direction: column;
    padding: 55px 0 24px;
    > button {
      width: 100%;
      padding: 12px 13% 16px;
      
      > p {
        line-height: 22px;
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
    font-size: 1.15rem;
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
const ButtonWrap = styled.div`
   padding-top: 0;

`;

const Form = styled.form`
  padding: 14px 0 18px;
`;


const TextLink = styled(Link)`
  color: #2f2f2f;
  display: flex;
  justify-content: center;
  padding-top: 22px;
  ${props => props.theme.window.mobile} {
    padding-top: 16px;
  }
`;

function Login() {
  const { width }= useWindowSize();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPopup, setShowPopup] = useState(false);
  const [type, setType] = useState(); //로그인 타입 (kakao, naver, email)
  const [type_kor, setType_kor] = useState(); //로그인 타입 한글 (kakao, naver, email)
  const { handleSubmit, reset, setError, setFocus } = useFormContext();


  useEffect(() => {
    reset();
    const loginCode = searchParams.get("loginCode");

    if (loginCode !== null && loginCode === 'fail'){
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
        const accessToken = searchParams.get("token");
        const name = searchParams.get("name");
        setAccessToken(accessToken);
        setUser(name);
        myProfile()
        navigate('/');
    }
  }, []);
  const auth = localStorage.getItem("@access-Token");
  
  const myProfile = async () => {
    const res = await CommonAPI.get("/api/private/profile", {
      Authorization: `Bearer ${auth}`,
   })
   if(res.status === 200){
      setUser(res.data.data)
      const getUser = localStorage.getItem("@user");
    const user = JSON.parse(getUser);
   }
  }
  const onError = (error) => {
    console.log(error)
  }

  const onSubmit = async (data) => {
    const req = JSON.stringify(data)
    try {
      const res = await CommonAPI.post('/api/public/login', req)
      if(res.status === 200){
        setAccessToken(res.data.data.accessToken);
        myProfile()
        navigate('/')
      }
    } catch (error) {
      console.log(error)
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
        <Text size={width > 768 ? '1.15rem' : '1rem'} color='BLACK4'>카카오톡 로그인</Text>
      </CustomButton>
      <CustomButton bgColor='GREEN' onClick={onNaverLogin}>
        <img src={naverIcon} alt='네이버' />
        <Text size={width > 768 ? '1.15rem' : '1rem'} color='WHITE'>네이버 로그인</Text>
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
      <ButtonWrap>
        <CustomButton bgColor='GRAY' width='100%' type='submit'>
          <Text color='WHITE' bold='200'>
            이메일로 계속하기
          </Text>
        </CustomButton>
      </ButtonWrap>
      <TextLink to='/login/findAccount'>계정정보를 잊으셨나요?</TextLink>
    </Form>
      {showPopup &&
        <LoginFailModal type={type} kor_name={type_kor} onClick={()=> setShowPopup(false)}></LoginFailModal>
      }
  </AuthLayout>
  )
}

export default Login;
