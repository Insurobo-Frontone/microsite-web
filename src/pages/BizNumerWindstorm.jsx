import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StorageGetInsurance, StorageClearInsurance } from "../container/Storage/Insurance";
import Layout from "../layout";
import ci from '../assets/img/insuroboNewCi.png';
import Button from "../container/InsuroboWindStrom/Button";
import { postHiLinkObj } from "../api/WindstormAPI";
import useWindowSize from "../hooks/useWindowSize";
import Step1 from "../container/BiznumWindstorm/Step1";
import SectionWrap from "../container/BiznumWindstorm/SectionWrap";

const BiznumWindstorm = () => {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const { watch, reset } = useFormContext({
    mode: 'onChange'
  });
  
  useEffect(() => {
    reset({
      objCat: '2',
      objAddr1: '',
      objAddr2: '',
      hsArea: '',
      inputBldSt: '',
      inputBldEd: '',
      lobzCd: '',
      ptyKorNm: '',
      ptyBizNm: '',
      telNo: '',
      regNo: '',
      bizNo: '',
      inrBirth: '',
      inrGender: '1'
    })
    StorageClearInsurance()
    
  }, [])

  const onClickNext = () => {
    if (
      watch('objAddr1') === '' || 
      watch('objAddr2') === '' ||
      watch('hsArea') === '' ||
      watch('inputBldSt') === '' ||
      watch('inputBldEd') === '' ||
      watch('lobzCd') === '' ||
      watch('ptyKorNm') === '' ||
      watch('ptyBizNm') === '' ||
      watch('telNo') === '' ||
      watch('bizNo') === '' ||
      watch('inrBirth') === ''
    ) {
      alert('입력하신 값을 확인해 주세요');
    } else if (
      watch('termsA6') === false ||
      watch('termsA1') === false ||
      watch('termsA2') === false ||
      watch('termsA3') === false ||
      watch('termsA4') === false 
    ) {
      alert('필수 체크 항목에 동의하셔야만 신청이 가능합니다.');
    } else {
      const insurance = StorageGetInsurance();
      // 연락처
      // const TelReplaceValue = watch('telNo').replace(
      //   /(^02.{0}|^01.{1}|[0-9]{3})([0-9]{4})([0-9]{4})/,
      //   '$1-$2-$3',
      // );
      //사업자등록번호
      const BizReplaceValue = watch('bizNo').replace(/-/g, "");

      //우편번호
      const objZipValue = insurance.getAddr.zipNo+''
      postHiLinkObj({
        inputBldSt: watch('inputBldSt'),
        inputBldEd: watch('inputBldEd'),
        bldTotLyrNum: insurance.getCover.bldTotLyrNum,
        hsArea: watch('hsArea'),
        poleStrc: insurance.getCover.poleStrc,
        roofStrc: insurance.getCover.roofStrc,
        otwlStrc: insurance.getCover.otwlStrc,
        objCat: watch('objCat'),
        lobzCd: watch('lobzCd'),
        objZip1: objZipValue.substring(0, 3),
        objZip2: objZipValue.substring(3, 5),
        objAddr1: watch('objAddr1'),
        objAddr2: watch('objAddr2'),
        bizNo: BizReplaceValue,
        inrBirth: watch('inrBirth'),
        inrGender: watch('inrGender'),
        telNo: watch('telNo'),
        ptyBizNm: watch('ptyBizNm'),
        ptyKorNm: watch('ptyKorNm'),
        termsA1: watch('termsA1') ? 'Y' : 'N',
        termsA2: watch('termsA2') ? 'Y' : 'N',
        termsA3: watch('termsA3') ? 'Y' : 'N',
        termsA4: watch('termsA4') ? 'Y' : 'N',
        termsA6: watch('termsA6') ? 'Y' : 'N',
        termsA7: watch('termsA7') ? 'Y' : 'N',
      }).then((res) => {
        const userId = res.data.results.userID;
        console.log(res)
        const link = width > 767.98 ? 'https://platform.hi.co.kr/service.do?m=pipis1000&jehuCd=insurobo&userId='  : 'https://mplatform.hi.co.kr/service.do?m=pipis1000&jehuCd=insurobo&userId='
        window.open(`${link}${userId}`);
        navigate('/');
      }).catch((e) => console.log(e));
    }
  }

  return (
    <Layout>
      <SectionWrap>
        <ApplyTitle>
          <h2>풍수해보험<span>신청하기</span></h2>
          <p>‘소상공인 풍수해보험’ 인슈로보에서 아주 간단하게!</p>
          <div>사업자번호만 작성하여 간편하게 가입하세요.</div>
          <ul>
            <li>*지원 대상이 아닌 경우 별도의 통지없이 반려될 수 있습니다.</li>
            <li>*보험 기간은 보험개시일로부터 1년간 입니다. (1년 소멸성)</li>
            <li>*사고보험금 지급 시 자기부담금은 제외한 후 보상됩니다.</li>
          </ul>
        </ApplyTitle>
      </SectionWrap>
      <Step1 />
    </Layout>
  )
}

export default BiznumWindstorm;

const ApplyTitle = styled.div`
  padding: 40px 0 41px;
  > h2 {
    font-size: 28px;
    padding-top: 40px;
    padding-bottom: 16px;
    color: #333333;
    > span {
      display: block;
      font-weight: 300;
      color: #333333;
    }
  }
  > p {
    font-size: 14px;
    font-weight: 300;
    color: #333333;
    padding-bottom: 20px;
  }
  > div {
    border: 1px solid #6262EF;
    padding: 13px 0 14px 0;
    color: #6262EF;
    font-weight: 500;
    text-align: center;
    border-radius: 5px;
  }
  > ul {
    padding-top: 30px;
    > li {
      font-size: 14px;
      color: #333333;
      font-weight: 300;
      line-height: 23px;
    }
  }
`;

