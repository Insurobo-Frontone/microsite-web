import React, { useState } from 'react';

import TextInput from '../container/BiznumWindstorm/Input/TextInput';
import styled from 'styled-components';
import Button from "../container/BiznumWindstorm/Button";
import logo from '../assets/img/insurobo.png';
import { useFormContext } from 'react-hook-form';

function Staff() {
  const [login, setLogin] = useState(false);
  const [success, setSuccess] = useState(false);
  const { watch, setError } = useFormContext();
  const userPw = 'insurobo1!';
  const onClickLogin = () => {
    if (userPw !== watch('staff_pwd')) {
      setError('staff_pwd', {
        type: 'custom',
        message: '비밀번호가 일치하지 않습니다.'
      });
      return false;
    }
    else {
      setLogin(true);
    }
  }
  return (
    <Wrap>
      {!login ? (
        <LoginWrap>
          <img src={logo} alt='인슈로보' />
          <InputGroup>
            <TextInput name='staff_pwd' placeholder='비밀번호' type='password' />
          </InputGroup>
          <Button title='로그인' onClick={() => onClickLogin()}/>
        </LoginWrap>
      ) : (
        <SearchFormWrap>
          <h2>풍수해보험 신청자 조회</h2>
          <InputGroup>
            <TextInput name='search_biznum' placeholder='사업자번호' />
          </InputGroup>
          <Button title='조회' />
        </SearchFormWrap>
      )}
      {login && success && (
        <ResultWrap>

        </ResultWrap>
      )}
      
    </Wrap>
  )
}

export default Staff

const Wrap = styled.div`
  padding: 300px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const LoginWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  > img {
    margin-bottom: 30px;
  }
`;

const SearchFormWrap = styled.div`
  > h2 {
    text-align: center;
  }
`;

const InputGroup = styled.div`
  padding: 10px 0;
  > input {
    width: 350px;
    height: 50px;
  }
`;

const ResultWrap = styled.div``;

