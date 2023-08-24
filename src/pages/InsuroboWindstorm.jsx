import React, { useEffect } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { StorageSetInsurance, StorageGetInsurance, StorageClearInsurance } from "../container/Storage/Insurance";
import Layout from "../layout";
import Step1 from "../container/InsuroboWindStrom/Step1";
import Step2 from "../container/InsuroboWindStrom/Step2";
import Button from "../container/InsuroboWindStrom/Button";


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
  const { watch, reset, formState: {errors}} = useFormContext({
    mode: 'onChange'
  });
  
  useEffect(() => {
    reset({
      objAddr1: '',
      objAddr2: '',
      hsArea: '',
      bldFloors1: '',
      bldFloors2: '',
      lobzCd: '',
      ptyKorNm: '',
      ptyBizNm: '',
      telNo: '',
      emailAddr: '',
      regNo: '',
      bizNo: ''
    })
    StorageClearInsurance()
    
  }, [])

  const onClickNext = () => {
    if (
      watch('objAddr1') === '' || 
      watch('objAddr2') === '' ||
      watch('hsArea') === '' ||
      watch('bldFloors1') === '' ||
      watch('bldFloors2') === '' ||
      watch('lobzCd') === '' ||
      watch('ptyKorNm') === '' ||
      watch('ptyBizNm') === '' ||
      watch('telNo') === '' ||
      watch('emailAddr') === '' ||
      watch('regNo') === '' ||
      watch('bizNo') === ''
    ) {
      alert('입력하신 값을 확인해 주세요')
    } else if (
      watch('Terms_1') === false ||
      watch('Terms_2') === false ||
      watch('Terms_3') === false ||
      watch('Terms_4') === false ||
      watch('Terms_5') === false
    ) {
      alert('개인정보처리 동의 필수체크')
    } else {
      const getData = StorageGetInsurance()
      const clientInfo = {
        name: watch('ptyKorNm'),
        bizname: watch('ptyBizNm'),
        phone: watch('telNo'),
        email: watch('emailAddr'),
        regNo: watch('regNo'),
        bizNo: watch('bizNo')
      }
      // 연락처
      const TelReplaceValue = watch('telNo').replace(
        /(^02.{0}|^01.{1}|[0-9]{3})([0-9]{4})([0-9]{4})/,
        '$1-$2-$3',
      );
      const TelSplitValue = TelReplaceValue.split('-');
      
      //주민번호 
      const RegReplaceValue = watch('regNo').replace(
        /([0-9]{6})([0-9]{6})/,
        '$1-$2',
      );
      const RegSplitValue = RegReplaceValue.split('-');
   
      //사업자등록번호
      const BizReplaceValue = watch('bizNo').replace(
        /(\d{3})(\d{2})(\d{5})/,
        '$1-$2-$3',
      );
      const BizSplitValue = BizReplaceValue.split('-');
  
      console.log('before', getData.insurance, getData.inituser)
      getData.insurance.ww_info.oagi6002vo.objCat = watch('objCat');
      getData.insurance.ww_info.oagi6002vo.objAddr2 = watch('objAddr2');
      getData.insurance.ww_info.oagi6002vo.hsArea = watch('hsArea');
      getData.insurance.ww_info.oagi6002vo.bldFloors1 = watch('bldFloors1');
      getData.insurance.ww_info.oagi6002vo.bldFloors2 = watch('bldFloors2');
      getData.insurance.ww_info.oagi6002vo.lobzCd = watch('lobzCd');
      getData.insurance.ww_info.oagi6002vo.ptyKorNm = watch('ptyKorNm');
      getData.insurance.ww_info.oagi6002vo.ptyBizNm = watch('ptyBizNm');
      getData.insurance.ww_info.oagi6002vo.telNo1 = TelSplitValue[0];
      getData.insurance.ww_info.oagi6002vo.telNo2 = TelSplitValue[1];
      getData.insurance.ww_info.oagi6002vo.telNo3 = TelSplitValue[2];
  
      getData.insurance.ww_info.oagi6002vo.regNo1 = RegSplitValue[0];
      getData.insurance.ww_info.oagi6002vo.regNo2 = RegSplitValue[1];
  
      getData.insurance.ww_info.oagi6002vo.bizNo1 = BizSplitValue[0];
      getData.insurance.ww_info.oagi6002vo.bizNo2 = BizSplitValue[1];
      getData.insurance.ww_info.oagi6002vo.bizNo3 = BizSplitValue[2];
  
      getData.inituser = clientInfo;
      StorageSetInsurance(getData.insurance, getData.inituser)
      console.log('after', getData.insurance, getData.inituser)
      dataSend(getData)
    }
  }

  const dataSend = (data) => {
    console.log(data)
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

