import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import TextInput from "./Input/TextInput";
import RadioButton from "./Input/RadioButton";
import Step3 from "./Step3";
import SectionWrap from "./SectionWrap";
import Step4 from "./Step4";
import Step5 from "./Step5";
import { useEffect } from "react";


const Step2 = ({ data }) => {
  const { watch, setFocus, setValue } = useFormContext();
  useEffect(() => {
    setValue('ptyBizNm', data?.bizName)
    setValue('ptyKorNm', data?.ceoName)
  }, [data])
  const gender = [
    {
      id: 'men',
      value: '1',
      title: '남자'
    },
    {
      id: 'women',
      value: '2',
      title: '여자'
    },
  ]

  return (
    <>
      <SectionWrap bgColor='GRAY'>
        {data && (
          <>
            <InputGroup>
              <p>상호명<b>*</b></p>
              <TextInput
                name='ptyBizNm'
                readOnly
                required={true}
              />
            </InputGroup>
            <InputGroup>
              <p>대표자명*</p>
              <TextInput 
                name='ptyKorNm'
                readOnly
              />
            </InputGroup>
            <InputGroup>
              <p>휴대폰 번호*</p>
              <div>
                <TextInput
                  type='number'
                  name='telNo1'
                  required='휴대폰번호를 입력해주세요'
                  autoFocus
                  onKeyUp={() => watch('telNo1').length === 3 && setFocus('telNo2')}
                />
                <span>-</span>
                <TextInput 
                  type='number'
                  name='telNo2'
                  required='휴대폰번호를 입력해주세요'
                  onKeyUp={() => watch('telNo2').length === 4 && setFocus('telNo3')}
                />
                <span> - </span>
                <TextInput
                  type='number'
                  name='telNo3'
                  required='휴대폰번호를 입력해주세요'
                />
              </div>
            </InputGroup>
            <InputGroup>
              <p>생년월일<b>*</b></p>
              <TextInput 
                name='inrBirth'
                type='number'
                placeholder='ex) 880321'
                required='생년월일을 입력해주세요'
                pattern={{
                  value:  /^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/,
                  message: '생년월일을 확인해주세요'
                }}
                maxLength={{
                  value: 6,
                  message: '생년월일을 다시 입력해주세요'
                }}
                minLength={{
                  value: 6,
                  message: '생년월일을 다시 입력해주세요'
                }}
              />
            </InputGroup>
            <InputGroup>
              <div>
                <p>성별<b>*</b></p>
                <div><RadioButton name='inrGender' data={gender} /></div>
              </div>
            </InputGroup>
          </>
        )}
      </SectionWrap>
      <SectionWrap
        title='사업장 정보'
        comment='필수항목'
      >
        <Step3 data={data} />
      </SectionWrap>
      <Step4 />
      <Step5 />
    </>
  )
}

export default Step2;

const InputGroup = styled.div`
  
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      height: 20px;
      display: block;
      padding: 0 7px;
    }
    > div {
      display: flex;
      justify-content: space-between;
      :last-child label {
        margin-left: 16px;
      }
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
