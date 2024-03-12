import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import Button from "./Button";
import { useFormContext } from "react-hook-form";
import Popup from "./Popup";
import { MoneypinBizInfo } from "../../api/BizWindStormAPI";
import Step2 from "./Step2";
import SectionWrap from "./SectionWrap";
import ErrorMessage from "./ErrorMessage";
import { useSearchParams } from "react-router-dom";

const Step1 = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [popUpClose, setPopupClose] = useState(true);
  const [searchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  const { watch, setValue, setError, formState: { errors } } = useFormContext();
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
    setOpen(false);
    if (watch('overlap') === 'Y') {
      setPopupClose(false); 
    } 

  }, [watch('overlap'), watch('bizNo')]);

  // 조회하기 버튼 클릭
  const onClickSearch = useCallback(() => {
    if (bizNumValidate()) {
      // clearErrors('bizNo')
      MoneypinBizInfo(watch('bizNo')).then((res) => {
        // console.log(res.data[0].info)
        setData(res.data[0].info)
        setOpen(true)
      }).catch((e) => console.log(e))
     
    } else {
      setError('bizNo', {
        message: '사업자번호를 다시 입력해주세요'
      })
      
    }
  }, [watch('bizNo')]);

  // 사업자번호 유효성 검사
  const bizNumValidate = () => {
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
      // console.log(regCheck)
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
              <div>
                <RadioButton name='overlap' data={overlap} />
              </div>
            </div>
          </InputGroup>
          <InputGroup>
            <p>사업자번호<b>*</b></p>
            <TextInput
              name='bizNo'
              required='사업자번호를 다시 입력해주세요'
              autoFocus
              onKeyUp={() => setValue('bizNo', watch('bizNo').replace(/[^0-9]/g, ""))}
            />
            {/* <div>
              <TextInput 
                name='bizNo1'
                required='사업자번호를 다시 입력해주세요'
                autoFocus
                maxLength={{
                  value: 3,
                  message: '사업자번호를 다시 입력해주세요'
                }}
                minLength={{
                  value: 3,
                  message: '사업자번호를 다시 입력해주세요'
                }}
                onKeyUp={() => watch('bizNo1').length === 3 && setFocus('bizNo2')}
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
                onKeyUp={() => watch('bizNo2').length === 2 && setFocus('bizNo3')}
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
            </div> */}
            {errors.bizNo && <ErrorMessage message={errors.bizNo.message} />}
          </InputGroup>
          {!popUpClose && (
            <Popup close={() => setPopupClose(true)}>
              <p>다른 소상공인 풍수해보험에<br />가입 시 중복 가입이 불가합니다.</p>
            </Popup>
          )}
          <Button 
            title={jehuCd === 'yogiyo' ? '풍수해보험 무료신청하기' : '조회하기'}
            type='button'
            className={jehuCd}
            onClick={() => onClickSearch()}
            disabled={
              !watch('bizNo') || 
              watch('overlap') === 'Y'
            }
          />
        </div>
        <TextArea>
          {jehuCd === 'yogiyo' && (
            <div>
              <p>*행정안전부 운영지침에 따른 지원 대상은 사업장이 <span>전통시장 소속</span>이거나,<span>일반 상가 지하층</span> 또는 <span>1층 소재</span> 건물입니다.</p>
              <p>(세가지 조건 중 하나만 해당되면 지원대상)</p>
            </div>
          )}
          <ul>
            <li>*지원 대상이 아닌 경우 별도의 통지없이 반려될 수 있습니다.</li>
            <li>*보험 기간은 보험개시일로부터 1년간 입니다. (1년 소멸성)</li>
            <li>*사고보험금 지급 시 자기부담금은 제외한 후 보상됩니다.</li>
          </ul>
        </TextArea>
      </SectionWrap>
      {open && <Step2 data={data} />}
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
    > div {
      display: flex;
      justify-content: space-between;
      width: 180px;
    }
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

  ${(props) => props.theme.window.mobile} {
    > div {
      > div {
        width: 170px;
      }
    }
  }
`;

const TextArea = styled.div`
  > ul {
    padding: 10px 0;
    > li {
      font-size: 18px;
      color: #333333;
      font-weight: 300;
    }
  }
  > div {
    padding-bottom: 20px;
    > p {
      color: #333333;
      font-size: 12px;
      font-weight: 300;
      > span {
        color: #FF0000;
        font-weight: 300;
      }
    }
  }
`;
