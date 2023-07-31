import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Select from "../Select";

const StoreInfo = () => {
  return (
    <Wrap>
      <Input placeholder='가입면적' />
      <div>
        <Input placeholder='가입 시작' />
        <Input placeholder='가입 끝' />
      </div>
      <Select />
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

