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
  const { watch, setValue } = useFormContext();
  useEffect(() => {
    setValue('ptyBizNm', data?.bizName)
    setValue('ptyKorNm', data?.ceoName)
  }, [data]);

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
              <TextInput
                name='telNo'
                required='휴대폰번호를 다시 입력해주세요'
                autoFocus
                pattern={{
                  value: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/,
                  message: '휴대폰 번호를 확인해주세요'
                }}
                onKeyUp={() => setValue('telNo', watch('telNo').replace(/[^0-9]/g, ""))}
              />
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
