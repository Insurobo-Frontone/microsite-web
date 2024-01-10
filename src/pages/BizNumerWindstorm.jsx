import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { StorageClearInsurance } from "../container/Storage/Insurance";
import Layout from "../layout";
import Step1 from "../container/BiznumWindstorm/Step1";
import SectionWrap from "../container/BiznumWindstorm/SectionWrap";

const BiznumWindstorm = () => {
  const { reset, setValue } = useFormContext();
  useEffect(() => {
    reset();
    setValue('bizNo1', '')
    setValue('bizNo2', '')
    setValue('bizNo3', '')
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
 

  ${(props) => props.theme.window.mobile} {
    > ul {
      > li {
        font-size: 11px;
        line-height: 21px;
      }
    }
  }
`;

