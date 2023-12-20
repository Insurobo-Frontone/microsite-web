import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import SectionWrap from "./SectionWrap";
import SelectInput from "./Input/SelectInput";

const Step4 = () => {
  const check1 = [
    {
      id: 'check1_Y',
      value: 'Y',
      title: '예'
    },
    {
      id: 'check1_N',
      value: 'N',
      title: '아니요'
    },
  ]
  const check2 = [
    {
      id: 'check2_Y',
      value: 'Y',
      title: '예'
    },
    {
      id: 'check2_N',
      value: 'N',
      title: '아니요'
    },
  ]
  useEffect(() => {
    
  }, []);

  return (
    <SectionWrap 
      bgColor='GRAY'
      title='소상공인 여부 확인'
      info={`소상공인 풍수해보험은 ‘소상공인’만 신청 가능합니다.\n우측 [소상공인 기준 확인]표를 확인하시어 귀 사업장이 법률상 소상공인에 해당함을 체크해 주시기 바랍니다.`}
    >
      <InputGroup>
        <p>“소상공인 보호 및 지원에 관한 법률” 제 2조, “중소기업기본법" 제 2조 2항에서는 소상공인의 상시 근로자 수를 광업.제조업.건설업.운수업은 10명 미만, 그 밖의 업종은 5명 미만으로 제한합니다. 피보험자의 상시 근로자수(아르바이트 제외)가 기준 미만입니까?</p>
        <RadioButton name='sBizCheck1' data={check1} />
      </InputGroup>
      <InputGroup>
        <p>상시 근로자수(아르바이트 제외)가 기준 미만이라면, 상시 근로자 수는 몇 명입니까?* <span>(숫자로만 표기)</span></p>
        <TextInput 
          name='sBiz1YNum'
          type='number'
        />
      </InputGroup>
      <InputGroup>
        <p>“중소기업기본법 시행령” 제 8조 1항 에서는 주요 업종별 연평균 매출액을 제한합니다. 피보험자의 연평균 매출액이 기준 미만입니까?</p>
        <RadioButton name='sBizCheck2' data={check2} />
      </InputGroup>
      <InputGroup sub>
        <p>주요 업종은 무엇입니까?*</p>
        <SelectInput
          placeholder='선택하세요'
          name='sBiz2YSect'
          defaultValue=''
        >
          <option>sddsdsd</option>
        </SelectInput>
      </InputGroup>
      <InputGroup>
        <p>연평균 매출액은 얼마입니까?* <span>(숫자로만 표기)</span></p>
        <TextInput 
          name='sBiz2Ytake'
          type='number'
        />
      </InputGroup>
    </SectionWrap>
  )
}

export default Step4;

const InputGroup = styled.div`
  > div {
    justify-content: flex-start;
    margin-top: 24px;
  }
  
  p {
    color: #666666;
    font-size: 14px;
    > span {
      font-size: 12px;
    }
  }
  ${props => props.sub && css`
    > div {
      margin-top: 6px;
    }
  `}
`;
