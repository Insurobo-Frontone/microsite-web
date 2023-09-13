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
  const insurance = StorageGetInsurance();
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
      alert('입력하신 값을 확인해 주세요')
    } else if (
      watch('TERMSA_1') === false ||
      watch('TERMSA_2') === false ||
      watch('TERMSA_3') === false ||
      watch('TERMSA_4') === false ||
      watch('TERMSA_5') === false
    ) {
      alert('개인정보처리 동의 필수체크')
    } else {
      // 연락처
      const TelReplaceValue = watch('telNo').replace(
        /(^02.{0}|^01.{1}|[0-9]{3})([0-9]{4})([0-9]{4})/,
        '$1-$2-$3',
      );
      //사업자등록번호
      const BizReplaceValue = watch('bizNo').replace(
        /(\d{3})(\d{2})(\d{5})/,
        '$1-$2-$3',
      );
      //우편번호v
      const objZipValue = insurance.getAddr.zipNo + ''
      console.log(objZipValue)
      postHiLinkObj({
        inputBldSt: watch('inputBldSt'),
        inputBldEd: watch('inputBldEd'),
        bldTotLyrNum: insurance.getCover.bldTotLyrNum,
        hsArea: watch('hsArea'),
        poleStrc: insurance.getCover.poleStrc,
        roofStrc: insurance.getCover.poleStrc,
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
        telNo: TelReplaceValue,
        ptyBizNm: watch('ptyBizNm'),
        ptyKorNm: watch('ptyKorNm'),
        TERMSA_1: watch('TERMSA_1') ? 'Y' : 'N',
        TERMSA_2: watch('TERMSA_2') ? 'Y' : 'N',
        TERMSA_3: watch('TERMSA_3') ? 'Y' : 'N',
        TERMSA_4: watch('TERMSA_4') ? 'Y' : 'N',
        TERMSA_5: watch('TERMSA_5') ? 'Y' : 'N'
      }).then((res) => {
        window.open(`https://mplatform.hi.co.kr/service.do?m=pipis1000&jehuCd=insurobo+${res}`);
        navigate('/');
      }).catch((e) => console.log(e))
    }
    //   postHiLinkObj({
    //     inputBldSt: watch('inputBldSt'),
    //     inputBldEd: watch('inputBldEd'),
    //     bldTotLyrNum: insurance.getCover.bldTotLyrNum,
    //     hsArea: watch('hsArea'),
    //     poleStrc: insurance.getCover.poleStrc,
    //     roofStrc: insurance.getCover.poleStrc,
    //     otwlStrc: insurance.getCover.otwlStrc,
    //     objCat: watch('objCat'),
    //     lobzCd: watch('lobzCd'),
    //     objZip1: objZipValue.substring(0, 4),
    //     objZip2: objZipValue.substring(4, 6),
    //     objAddr1: watch('objAddr1'),
    //     objAddr2: watch('objAddr2'),
    //     bizNo: BizReplaceValue,
    //     inrBirth: watch('inrBirth'),
    //     inrGender: watch('inrGender'),
    //     telNo: TelReplaceValue,
    //     ptyBizNm: watch('ptyBizNm'),
    //     ptyKorNm: watch('ptyKorNm'),
    //     TERMSA_1: watch('TERMSA_1'),
    //     TERMSA_2: watch('TERMSA_2'),
    //     TERMSA_3: watch('TERMSA_3'),
    //     TERMSA_4: watch('TERMSA_4'),
    //     TERMSA_5: watch('TERMSA_5')
    //   }).then((res) => {
    //     console.log(res)
    //   }).catch((e) => console.log(e))
    // }
  }
  

  return (
    <Layout>
      <Wrap>
        <Content>
          <Step1 />
          <Step2 />
          <Button 
            onClick={onClickNext}
            // disabled={validata}
          >
            다음
          </Button>
        </Content>
      </Wrap>
    </Layout>
  )
}

export default InsuroboWindstorm

