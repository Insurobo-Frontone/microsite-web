import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import Select from "../Select";
import { useFormContext } from "react-hook-form";
import { getLoBzCdList } from "../../../api/WindstormAPI";

const StoreInfo = () => {
  const [loBzCdList, setLoBzCdList] = useState([]);
  const { watch } = useFormContext({
    mode: 'onBlur'
  });
  useEffect(() => {
    getLoBzCdList()
    .then((res) => {
      setLoBzCdList(res.data.results.codes)
    })
    .catch((e) => console.log(e)) 
  }, []);

  return (
    <Wrap>
      <Input
        type='number'
        placeholder='가입면적'
        name='hsArea'
        defaultValue=''
      />
      <div>
        <Input
          type='number'
          placeholder='시작 층'
          name='inputBldSt'
          defaultValue=''
        />
        <Input
          type='number'
          placeholder='끝 층'
          name='inputBldEd'
          defaultValue=''
        />
      </div>
      <Select 
        placeholder='영위 업종을 선택해주세요.'
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

