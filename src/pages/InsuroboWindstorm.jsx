import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { StorageGetInsurance, StorageClearInsurance } from "../container/Storage/Insurance";
import Layout from "../layout";
import Step1 from "../container/InsuroboWindStrom/Step1";
import Step2 from "../container/InsuroboWindStrom/Step2";
import Button from "../container/InsuroboWindStrom/Button";
import { postHiLinkObj } from "../api/WindstormAPI";
import useWindowSize from "../hooks/useWindowSize";

const Wrap = styled.div`
  width: 100%;
  max-width: 1280px;
  /* min-height: 1549px; */
  padding-top: 80px;
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;

  ${(props) => props.theme.window.mobile} {
    padding-top: 0;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 410px;
  margin: auto auto 50px;
`;

const InsuroboWindstorm = () => {
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
      <Wrap>
        <Content>
          <Step1 />
          <Step2 />
          <Button onClick={onClickNext}>
            다음
          </Button>
        </Content>
      </Wrap>
    </Layout>
  )
}

export default InsuroboWindstorm

