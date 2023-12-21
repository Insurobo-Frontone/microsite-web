import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import TextInput from "./Input/TextInput";
import { MoneypinBizInfo } from "../../api/BizWindStormAPI";
import SelectInput from "./Input/SelectInput";
import { getLoBzCdList } from "../../api/WindstormAPI";
import RadioButton from "./Input/RadioButton";
import Step3 from "./Step3";
import SectionWrap from "./SectionWrap";
import Step4 from "./Step4";
import Step5 from "./Step5";

const Step2 = ({ token }) => {
  const [loBzCdList, setLoBzCdList] = useState([]);
  const [data, setData] = useState();
  const { watch } = useFormContext();
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
  useEffect(() => {
    MoneypinBizInfo(watch('bizNo'), token)
    .then((res) => {
      console.log(res.data[0].info)
      setData(res.data[0].info)
      getLoBzCdList()
      .then((res) => {
        setLoBzCdList(res.data.results.codes)
      }).catch((e) => console.log(e)) 
    }).catch((e) => console.log(e))
  }, [watch('bizNo')]);

  return (
    <>
      <SectionWrap bgColor='GRAY'>
        {data && (
          <>
            <InputGroup>
              <p>상호명<b>*</b></p>
              <TextInput 
                name='ptyBizNm'
                value={data.bizName}
                readOnly
              />
            </InputGroup>
            <InputGroup>
              <p>대표자명*</p>
              <TextInput 
                name='ptyKorNm'
                value={data.ceoName}
                readOnly
              />
            </InputGroup>
            <InputGroup>
              <p>영위업종*</p>
              <SelectInput
                placeholder='선택해주세요.'
                name='lobzCd'
                defaultValue=''
              >
                {loBzCdList?.filter((obj) => obj.type === watch('objCat')).map((cur, index) => {
                  return (
                    <option value={cur.code} key={index}>
                      {cur.name}
                    </option>
                  )
                })}
              </SelectInput>
            </InputGroup>
            <InputGroup>
              <p>휴대폰 번호*</p>
              <div>
                <TextInput
                  type='number'
                  name='telNo1'
                  required='필수 입력사항입니다'
                />
                <span>-</span>
                <TextInput 
                  type='number'
                  name='telNo2'
                  required='필수 입력사항입니다'
                />
                <span> - </span>
                <TextInput
                  type='number'
                  name='telNo3'
                  required='필수 입력사항입니다'
                />
              </div>
            </InputGroup>
            <InputGroup>
              <p>생년월일<b>*</b></p>
              <TextInput 
                name='inrBirth'
                placeholder='ex) 880321'
              />
            </InputGroup>
            <InputGroup>
              <div>
                <p>성별<b>*</b></p>
                <RadioButton name='inrGender' data={gender} />
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
  }
  p {
    color: #666666;
    font-size: 14px;
    > b {
      color: #6262EF;
    }
  }
`;
