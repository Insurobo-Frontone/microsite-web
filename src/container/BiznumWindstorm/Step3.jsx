import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import { getCover, getJuso, getLoBzCdList } from "../../api/WindstormAPI";
import { StorageSetInsurance } from "../Storage/Insurance";
import SelectInput from "./Input/SelectInput";
import { useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const Step3 = ({ data }) => {
  const [bizData, setBizData] = useState();
  const [addrData, setAddrData] = useState();
  const [loBzCdList, setLoBzCdList] = useState([]);
  const { watch } = useFormContext();
  const [searchParams] = useSearchParams();
  const jehuCd = searchParams.get('jehuCd');
  const yoStore = [
    {
      id: 'store',
      value: '2',
      title: '일반(상가)'
    },
  ];

  const store = [
    {
      id: 'store',
      value: '2',
      title: '일반(상가)'
    },
    {
      id: 'factory',
      value: '4',
      title: '공장'
    },
  ];

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
    getLoBzCdList()
    .then((res) => {
      setLoBzCdList(res.data.results.codes)
    }).catch((e) => console.log(e)) 
    // 건축물대장 api
    getJuso(data?.address.split(",")[0]).then((res) => {
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
              <div className={jehuCd === 'yogiyo' ? 'yogiyo-radio-wrap' : "radio-wrap"}>
                <RadioButton name='objCat' data={jehuCd === 'yogiyo' ? yoStore : store } />
              </div>
            </div>
            {jehuCd === 'yogiyo' && (<p className="warning">*일반(상가) 외 공장이나 주택은 가입이 불가합니다</p>)}
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
            <p>주소<b>*</b></p>
            <TextInput 
              name='objAddr1'
              value={addrData?.jibunAddr}
              readOnly={addrData?.jibunAddr}
            />
            <TextInput 
              name='objAddr2'
              placeholder='상세주소 입력'
              required='상세주소를 입력해주세요'
            />
          </InputGroup>
          <InputGroup>
            <p>실사용면적<b>*</b></p>
            <TextInput 
              name='hsArea'
              placeholder='면적을 입력하세요 (단위는 m2 입니다.)'
              required='면적을 입력해주세요'
            />
          </InputGroup>
          <InputGroup>
            <div>
              <p>사업장 임차 여부<b>*</b></p>
              <div className="radio-wrap">
                <RadioButton name='bizEstate' data={estate} />
              </div>
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
                required='가입하실 시작 층수를 다시 입력해주세요.'
              />
              <TextInput 
                name='inputBldEd'
                placeholder='끝 층'
                required='가입하실 끝 층수를 다시 입력해주세요.'
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
    > div {
      display: flex;
      justify-content: space-between;
      &.radio-wrap {
        width: 142px;
      }
      &.yogiyo-radio-wrap {
        width: auto;
      }
    }
  }
  .two-input {
    > input {
      width: 49.15730337078652%;
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
