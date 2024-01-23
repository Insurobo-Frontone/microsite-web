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

  const onClickSearch = () => {
    setSuccess(true)
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
          <Button title='조회' onClick={() => onClickSearch()}/>
        </SearchFormWrap>
      )}
      {login && success && (
        <ResultWrap>
          <Table>
            <thead>
              <tr>
                <th>제휴코드</th>
                <td>yogiyo</td>
              </tr>
              <tr>
                <th>상호명</th>
                <td>인슈로보</td>
              </tr>
              <tr>
                <th>사업자번호</th>
                <td>690-87-01268</td>
              </tr>
              <tr>
                <th>대표자명</th>
                <td>서민</td>
              </tr>
              <tr>
                <th>영위업종</th>
                <td>휴계음식점</td>
              </tr>
              <tr>
                <th>휴대폰번호</th>
                <td>010-5678-2707</td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>930508</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>여</td>
              </tr>
              <tr>
                <th>건물구분</th>
                <td>일반(상가)</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>서울특별시 강남구 논현로 75길 10, 영창빌딩 4층</td>
              </tr>
              <tr>
                <th>실사용면적</th>
                <td>77</td>
              </tr>
              <tr>
                <th>임차여부</th>
                <td>임차인</td>
              </tr>
              <tr>
                <th>사업장 위치</th>
                <td>1/1</td>
              </tr>
              <tr>
                <th>건물 구조정보</th>
                <td>콘크리트/콘크리트/콘크리트</td>
              </tr>
              <tr>
                <th>상시 근로자수</th>
                <td>12명</td>
              </tr>
              <tr>
                <th>연평균 매출액</th>
                <td>1,000,000</td>
              </tr>
            </thead>
          </Table>
        </ResultWrap>
      )}
      
    </Wrap>
  )
}

export default Staff

const Wrap = styled.div`
  padding: 300px 0;
  display: flex;
  flex-direction: column;
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

const ResultWrap = styled.div`
  padding: 50px 0;
`;

const Table = styled.table`
  border: 1px solid #E2E2E2;
  tr {
    border-bottom: 1px solid #E2E2E2;
  }
  th {
    padding: 10px;
    border-right: 1px solid #E2E2E2;
    background-color: #CEDAEF;
    font-weight: 500;
  }
  td {
    padding: 10px;
  }
`;


