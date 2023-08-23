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
  const { watch, reset} = useFormContext({
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
      telNo: '',
      emailAddr: '',
      regNo: '',
    })
    StorageClearInsurance()
    
  }, [])

  const validate = () => {
    if (
      watch('objAddr1') === '' || 
      watch('objAddr2') === '' ||
      watch('hsArea') === '' ||
      watch('bldFloors1') === '' ||
      watch('bldFloors2') === '' ||
      watch('lobzCd') === '' ||
      watch('ptyKorNm') === '' ||
      watch('telNo') === '' ||
      watch('emailAddr') === '' ||
      watch('regNo') === ''
    ) {
      alert('정보값확인')
      return false;
    } else if (
      watch('Terms_1') === false ||
      watch('Terms_2') === false ||
      watch('Terms_3') === false ||
      watch('Terms_4') === false ||
      watch('Terms_5') === false
    ) {
      alert('체크박스확인')
      return false;
    } else {
      return true
    }
  }
  const onClickNext = () => {
    validate();

    const getData = StorageGetInsurance()

    const clientInfo = {
      name: watch('ptyKorNm'),
      phone: watch('telNo'),
      email: watch('emailAddr'),
      regNo: watch('regNo')
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
 
    console.log('before', getData.insurance, getData.inituser)
    getData.insurance.ww_info.oagi6002vo.objCat = watch('objCat');
    getData.insurance.ww_info.oagi6002vo.objAddr2 = watch('objAddr2');
    getData.insurance.ww_info.oagi6002vo.hsArea = watch('hsArea');
    getData.insurance.ww_info.oagi6002vo.bldFloors1 = watch('bldFloors1');
    getData.insurance.ww_info.oagi6002vo.bldFloors2 = watch('bldFloors2');
    getData.insurance.ww_info.oagi6002vo.lobzCd = watch('lobzCd');
    getData.insurance.ww_info.oagi6002vo.ptyKorNm = watch('ptyKorNm');
    getData.insurance.ww_info.oagi6002vo.telNo1 = TelSplitValue[0];
    getData.insurance.ww_info.oagi6002vo.telNo2 = TelSplitValue[1];
    getData.insurance.ww_info.oagi6002vo.telNo3 = TelSplitValue[2];
    getData.insurance.ww_info.oagi6002vo.regNo1 = RegSplitValue[0];
    getData.insurance.ww_info.oagi6002vo.regNo2 = RegSplitValue[1];

    getData.inituser = clientInfo;

    StorageSetInsurance(getData.insurance, getData.inituser)
    console.log('after', getData.insurance, getData.inituser)
    
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

