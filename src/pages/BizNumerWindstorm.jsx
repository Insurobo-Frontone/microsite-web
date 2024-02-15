import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { StorageClearInsurance } from "../container/Storage/Insurance";
import Layout from "../layout";
import Step1 from "../container/BiznumWindstorm/Step1";
import SectionWrap from "../container/BiznumWindstorm/SectionWrap";

const BiznumWindstorm = () => {
  const { reset } = useFormContext();
  useEffect(() => {
    reset({
      overlap: 'N', //풍수해보험 중복가입여부
      bizNo: '', //사업자번호 biz_no
      telNo: '', //휴대폰번호 phoneNum
      inrBirth: '', //생년월일 birthDate
      inrGender: '1', //성별 sex
      objCat: '2',    //건물구분 building_division
      lobzCd: '', //영위업종 biz_type
      objAddr2: '', //상세주소 detail_address
      hsArea: '', //면적 squareMeter, area
      hsFeet: '', //평수 squareMeter, area
      bizEstate: '임차인', //사업장 임차 여부 biz_site_lease
      inputBldSt: '', //내 사업장 위치 시작 층 input_bld_st
      inputBldEd: '', //내 사업장 위치 끝층 input_bld_ed,
      workerNumUnder: 'Y', //소상공인 여부 확인 (근로자 수 기준 미만 여부),
      workerNum: '',  //소상공인 여부 확인 (근로자 수)
      charSalesUnder: 'Y', //소상공인 여부 확인 (연평균 매출액 기준 미만 여부)
      sales: '', //소상공인 여부 확인 (연평균 매출액)
      termsA1: 'N', 
      termsA2: 'N',
      termsA3: 'N',
      termsA4: 'N',
      termsA6: 'N',
      termsA7: 'N',
      termsA8: 'N',
      zipcode: '', //우편번호 zipCode
      bizConfirm: false, // 보험금 지금 제한 확인 체크 imputation_reason_confirm_yn
    });
    StorageClearInsurance();
  }, [])

  return (
    <Layout>
      <SectionWrap>
        <ApplyTitle>
          <h2>풍수해보험<span>신청하기</span></h2>
          <p>‘소상공인 풍수해보험’ 인슈로보에서 아주 간단하게!</p>
          <div>사업자번호만 작성하여 간편하게 가입하세요.</div>
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
    /* padding-bottom: 20px; */
  }
  > div {
    color: #6262EF;
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 20px;
    /* border: 1px solid #6262EF;
    padding: 13px 0 14px 0;
    
    font-weight: 500;
    text-align: center;
    border-radius: 5px; */
  }
 

  ${(props) => props.theme.window.mobile} {
    > ul {
      > li {
        font-size: 11px;
        line-height: 21px;
      }
    }
  }
`;

