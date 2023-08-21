import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Select from "../Select";

const StoreInfo = () => {
  return (
    <Wrap>
      <Input 
        placeholder='가입면적'
        name='hsArea'

      />
      <div>
        <Input 
          placeholder='가입 시작'
          name='bldFloors1'
        />
        <Input 
          placeholder='가입 끝'
          name='bldFloors2'
        />
      </div>
      <Select placeholder='영위 업종을 선택해주세요.'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </Select>
    </Wrap>
  )
}

export default StoreInfo;

const Wrap = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;
  > div {
    display: flex;
    margin: 20px 0;
    & > *:nth-last-child(1) {
      margin-right: 0px;
    }
  }
`;

