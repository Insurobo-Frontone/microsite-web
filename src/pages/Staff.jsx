import React, { useState } from 'react';
import TextInput from '../container/BiznumWindstorm/Input/TextInput';
import styled from 'styled-components';
import Button from "../container/BiznumWindstorm/Button";
import logo from '../assets/img/insurobo.png';
import { useFormContext } from 'react-hook-form';
import { getWindStormSave } from '../api/BizWindStormAPI';

function Staff() {
  const [login, setLogin] = useState(false);
  const [success, setSuccess] = useState(false);
  const { watch, setError,  formState: { errors } } = useFormContext();
  const [data, setData] = useState();
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
     getWindStormSave(watch('search_biznum'))
     .then((res) => {
        setSuccess(true)
        setData(res.data)
        console.log(res.data)
        if (res.data === '') {
          setError('search_biznum', {
            type: 'custom',
            message: '존재하지 않는 사업자번호입니다'
          })
        }
     })
     .catch((e) => {
       alert('네트워크 에러가 발생했습니다 잠시후 다시 시도해주세요.')
     })
  }
  return (
    <Wrap>
      {!login ? (
        <LoginWrap>
          <img src={logo} alt='인슈로보' />
          <InputGroup>
            <TextInput 
              name='staff_pwd' 
              placeholder='비밀번호' 
              type='password'
              onKeyUp={(e) => e.key === 'Enter' && onClickLogin()}
            />
            
          </InputGroup>
          {errors.staff_pwd && <ErrorText>{errors.staff_pwd.message}</ErrorText>}
          <Button 
            title='로그인' 
            onClick={() => onClickLogin()}
          />
        </LoginWrap>
      ) : (
        <SearchFormWrap>
          <h2>풍수해보험 신청자 조회</h2>
          <InputGroup>
            <TextInput 
              name='search_biznum' 
              placeholder='사업자번호'
              onKeyUp={(e) => e.key === 'Enter' && onClickSearch()}
            />
          </InputGroup>
          {errors.search_biznum && <ErrorText>{errors.search_biznum.message}</ErrorText>}
          <Button title='조회' onClick={() => onClickSearch()}/>
        </SearchFormWrap>
      )}
      {login && success && data && (
        <ResultWrap>
          <Table>
            <thead>
              <tr>
                <th>제휴코드</th>
                <td>{data?.jehuCd}</td>
              </tr>
              <tr>
                <th>상호명</th>
                <td>{data?.biz_name}</td>
              </tr>
              <tr>
                <th>사업자번호</th>
                <td>{data?.biz_no.replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3')}</td>
              </tr>
              <tr>
                <th>대표자명</th>
                <td>{data?.ceo_name}</td>
              </tr>
              <tr>
                <th>휴대폰번호</th>
                <td>{data.phoneNum?.replace(/[^0-9]/g, '').replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3")}</td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>{data?.birthDate}</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>{data?.sex === 'M' ? '남자' : '여자'}</td>
              </tr>
              <tr>
                <th>건물구분</th>
                <td>{data?.building_division === '2' ? '일반(상가)' : '공장'}</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>{data?.address} {data?.detail_address}</td>
              </tr>
              <tr>
                <th>실사용면적</th>
                <td>{data?.area}</td>
              </tr>
              <tr>
                <th>임차여부</th>
                <td>{data?.biz_site_lease_yn}</td>
              </tr>
              <tr>
                <th>사업장 위치</th>
                <td>{data?.input_bld_st}/{data?.input_bld_ed}</td>
              </tr>
              <tr>
                <th>상시 근로자수</th>
                <td>{data?.worker_num}</td>
              </tr>
              <tr>
                <th>연평균 매출액</th>
                <td>{data?.sales.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
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

const ErrorText = styled.p`
  font-size: 12px;
  color: #FF0000;
  font-weight: 300;
  padding-bottom: 10px;
  align-self: flex-start;
`;

const LoginWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  > img {
    margin-bottom: 30px;
  }
  > p {

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
    vertical-align: middle;
  }
  td {
    padding: 10px;
  }
`;


