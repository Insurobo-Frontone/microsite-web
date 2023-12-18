import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import Button from "./Button";
import { useFormContext } from "react-hook-form";
import Popup from "./Popup";


const Step1 = () => {
  const [close, setClose] = useState(true);
  const { watch, setValue, setError, handleSubmit, formState: { isValid, isDirty, errors } } = useFormContext();
  const overlap = [
    {
      id: 1,
      value: 'N',
      title: '아니요'
    },
    {
      id: 2,
      value: 'Y',
      title: '예(가입 불가)'
    },
  ];

  useEffect(() => {
    if (watch('overlap') === 'Y') {
      setClose(false);
    } 
    setValue('bizNo', watch('bizNo1')+watch('bizNo2')+watch('bizNo3'));
    console.log(watch('bizNo'))
  }, [watch('bizNo1'), watch('bizNo2'), watch('bizNo3'), watch('overlap')]);

  // 조회하기 버튼 클릭
  const onClickSearch = () => {
    const number = watch('bizNo');
    const regsplitNum = number.replace(/ /gi,"").split('').map(function (d){
      return parseInt(d, 10);
    });
    if(regsplitNum.length === 10){
      const regkey = [1, 3, 7, 1, 3, 7, 1, 3, 5];
      let regNumSum = 0;
  
      for (var i = 0; i < regkey.length; i++) {
        regNumSum += regkey[i] * regsplitNum[i];
      }
  
      regNumSum += parseInt((regkey[8] * regsplitNum[8]) / 10, 10);
      const regCheck = (Math.floor(regsplitNum[9])) === ((10 - (regNumSum % 10) ) % 10);
      return regCheck
    }
    
  };
  setError('bizNo', {
    message: "사업자번호를 다시 입력해주세요"
  })
  const onError = (e) => {
    console.log(e)
 
  };

  return (
    <form onSubmit={handleSubmit(onClickSearch, onError)}>
      <InputGroup>
        <div>
          <p>타 풍수해보험 가입 여부<b>*</b></p>
          <RadioButton name='overlap' data={overlap} />
        </div>
      </InputGroup>
      <InputGroup>
        <p>사업자번호<b>*</b></p>
        <div>
          <TextInput 
            name='bizNo1'
            required='사업자번호를 다시 입력해주세요'
            maxLength={{
              value: 3,
              message: '사업자번호를 다시 입력해주세요'
            }}
            minLength={{
              value: 3,
              message: '사업자번호를 다시 입력해주세요'
            }}
          />
          <span>-</span>
          <TextInput 
            name='bizNo2'
            required='사업자번호를 다시 입력해주세요'
            maxLength={{
              value: 2,
              message: '사업자번호를 다시 입력해주세요'
            }}
            minLength={{
              value: 2,
              message: '사업자번호를 다시 입력해주세요'
            }}
          />
          <span> - </span>
          <TextInput 
            name='bizNo3'
            required='사업자번호를 다시 입력해주세요'
            maxLength={{
              value: 5,
              message: '사업자번호를 다시 입력해주세요'
            }}
            minLength={{
              value: 5,
              message: '사업자번호를 다시 입력해주세요'
            }}
          />
        </div>
        {
          errors.bizNo1 ? <ErrorMessage>{errors.bizNo1.message}</ErrorMessage> :  
          errors.bizNo2 ? <ErrorMessage>{errors.bizNo2.message}</ErrorMessage> :
          errors.bizNo3 ? <ErrorMessage>{errors.bizNo3.message}</ErrorMessage> :
          errors.bizNo && <ErrorMessage>{errors.bizNo.message}</ErrorMessage>
        }
      </InputGroup>
      {!close && (
        <Popup close={() => setClose(true)}>
          <p>다른 소상공인 풍수해보험에<br />가입 시 중복 가입이 불가합니다.</p>
        </Popup>
      )}
      <Button 
        title='조회하기' 
        type='submit' 
        disabled={!isDirty || !isValid || watch('overlap') === 'Y'}
      />
    </form>
  )
}

export default Step1;

const InputGroup = styled.div`
  margin-bottom: 23px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      height: 20px;
      display: block;
      padding: 0 7px;
    }
  }
  p {
    color: #666666;
    font-size: 14px;
    > b {
      color: #6262EF;
    }
  }
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  color: #FF0000;
  font-weight: 300;
  padding-top: 10px;
`;
