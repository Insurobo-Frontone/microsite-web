import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import { getCover, getJuso } from "../../api/WindstormAPI";
import { StorageSetInsurance } from "../Storage/Insurance";

const Step3 = ({ data }) => {
  const [bizData, setBizData] = useState();
  const [addrData, setAddrData] = useState();
  const store = [
    {
      id: 'store',
      value: '2',
      title: '일반(상가)'
    },
  ]
  const estate = [
    {
      id: 'lease',
      value: '임차인',
      title: '임차인'
    },
    {
      id: 'owner',
      value: '소유자',
      title: '소유자'
    },
  ]
  useEffect(() => {
    // 건축물대장 api
    getJuso(data?.address).then((res) => {
      getCover({
        sigungucd: res.data.results.addrs[0].admCd.slice(0, 5),
        bjdongcd: res.data.results.addrs[0].admCd.slice(-5),
        bun: res.data.results.addrs[0].lnbrMnnm,
        ji: res.data.results.addrs[0].lnbrSlno,
        zip: res.data.results.addrs[0].zipNo,
      }).then((res2) => {
        setAddrData(res.data.results.addrs[0])
        setBizData(res2.data.results)
        StorageSetInsurance(res2.data.results, res.data.results.addrs[0]);
      }).catch(() => {
        alert(
          '해당 지역은 건축물 대장에 데이터 존재하지 않습니다, 다시 선택해 주세요',
        );
      })
    }).catch((e) => (console.log(e)))
  }, [data]);
  return (
    <>
      {data && (
        <>
          <InputGroup>
            <div>
              <p>건물 구분<b>*</b></p>
              <RadioButton name='objCat' data={store} />
            </div>
            <p className="warning">*일반(상가) 외 공장이나 주택은 가입이 불가합니다</p>
          </InputGroup>
          <InputGroup>
            <p>주소<b>*</b></p>
              <TextInput 
                name='objAddr1'
                value={addrData?.jibunAddr}
                readOnly
              />
              <TextInput 
                name='objAddr2'
                placeholder='상세주소 입력'
              />
          </InputGroup>
          <InputGroup>
            <p>실사용면적<b>*</b></p>
            <TextInput 
              name='hsArea'
              placeholder='면적을 입력하세요 (단위는 m2 입니다.)'
            />
          </InputGroup>
          <InputGroup>
            <div>
              <p>사업장 임차 여부<b>*</b></p>
              <RadioButton name='bizEstate' data={estate} />
            </div>
          </InputGroup>
          <InputGroup>
            <p>건물 전체 층수<b>*</b></p>
            <div className="two-input">
              <TextInput 
                name='ugrndFlrCnt'
                value={bizData?.ugrndFlrCnt}
              />
              <TextInput 
                name='grndFlrCnt'
                value={bizData?.grndFlrCnt}
              />
            </div>
          </InputGroup>
          <InputGroup>
            <p>내 사업장 위치<b>*</b></p>
            <div className="two-input">
              <TextInput 
                name='inputBldSt'
                placeholder='시작 층'
              />
              <TextInput 
                name='inputBldEd'
                placeholder='끝 층'
              />
            </div>
          </InputGroup>
          <InputGroup>
            <p>건물 구조정보<b>*</b></p>
            <TextInput 
              name='structure'
              value={`${bizData?.strctCdNm}/${bizData?.roofNm}/${bizData?.otwlStrc === '01' ? '콘크리트 외벽' : 
                bizData?.otwlStrc === '08' ? '벽돌(조직) 외벽' :
                bizData?.otwlStrc === '12' ? '블록 외벽' :
                bizData?.otwlStrc === '13' ? '철판/판넬' :
                bizData?.otwlStrc === '18' ? '목조' :
                bizData?.otwlStrc === '15' && '유리벽'
              }`}
            />
          </InputGroup>
        </>
      )}
    </>
  )
}

export default Step3;

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
  .two-input {
    > input {
      width: 175px;
    }
  }
  p {
    color: #666666;
    font-size: 14px;
    > b {
      color: #6262EF;
    }

    &.warning {
      color: #FF0000;
      font-size: 12px;
      padding-top: 12px;
    }
  }
`;
