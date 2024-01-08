import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import Button from "./Button";
import { useFormContext } from "react-hook-form";
import Popup from "./Popup";
//import { MoneypinToken } from "../../api/BizWindStormAPI";
import Step2 from "./Step2";
import SectionWrap from "./SectionWrap";
import ErrorMessage from "./ErrorMessage";

const Step1 = () => {
  
  const [close, setClose] = useState(true);
  const [bizToken, setBizToken] = useState();
  const { watch, setValue, setError, clearErrors, formState: { errors } } = useFormContext();
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
  }, [watch('overlap')]);

  // 조회하기 버튼 클릭
  const onClickSearch = useCallback((e) => {
    if (bizNumValidate()) {
      clearErrors('bizNo')
      setBizToken("fake Token")
      // MoneypinToken().then((res) => {
      //   setBizToken(res.data.token)
        
      // }).catch((error) => {
      //   console.log(error);
      //   alert('네트워크 접속이 지연되고 있습니다. 잠시 후 다시 시도해주세요')
      // });
    } else {
      setError('bizNo', {
        message: '사업자번호를 다시 입력해주세요'
      })
    }
  }, [watch('bizNo')]);

  // 사업자번호 유효성 검사
  const bizNumValidate = () => {
    setValue('bizNo', watch('bizNo1') + watch('bizNo2') + watch('bizNo3'));
    let number = watch('bizNo');
    let regsplitNum = number.replace(/ /gi,"").split('').map(function (d){
      return parseInt(d, 10);
    });
    if(regsplitNum.length === 10){
      let regkey = [1, 3, 7, 1, 3, 7, 1, 3, 5];
      let regNumSum = 0;
      for (var i = 0; i < regkey.length; i++) {
        regNumSum += regkey[i] * regsplitNum[i];
      }
      regNumSum += parseInt((regkey[8] * regsplitNum[8]) / 10, 10);
      const regCheck = (Math.floor(regsplitNum[9])) === ((10 - (regNumSum % 10) ) % 10);
      console.log(regCheck)
      return regCheck
    } 
  }
  return (
    <>
      <SectionWrap
        bgColor='GRAY'
        title='사업장 정보'
        comment='필수항목'
      >
        <div>
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
                errors.bizNo1 ? <ErrorMessage message={errors.bizNo1.message} /> :  
                errors.bizNo2 ? <ErrorMessage message={errors.bizNo2.message} /> :
                errors.bizNo3 ? <ErrorMessage message={errors.bizNo3.message} /> :
                errors.bizNo && <ErrorMessage message={errors.bizNo.message} />
              }
            </InputGroup>
            {!close && (
              <Popup close={() => setClose(true)}>
                <p>다른 소상공인 풍수해보험에<br />가입 시 중복 가입이 불가합니다.</p>
              </Popup>
            )}
            <Button 
              title='조회하기'
              type='button'
              onClick={() => onClickSearch()}
              disabled={
                !watch('bizNo1') || 
                !watch('bizNo2') || 
                !watch('bizNo3') || 
                watch('overlap') === 'Y'
              }
            />
          </div>
        </SectionWrap>
      {bizToken && <Step2 token={bizToken} />}
    </>
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
