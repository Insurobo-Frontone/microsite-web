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
`;

const Content = styled.div`
  width: 100%;
  max-width: 410px;
  margin: auto auto 50px;
`;


const InsuroboWindstorm = () => {
  const { watch, reset } = useFormContext({
    mode: 'onBlur'
  });
  const onClickNext = () => {
    const getData = StorageGetInsurance()
    const user = {
      name: watch('name'),
      telNo: watch('telNo'),
      email: watch('email'),
      identiNum: watch('identiNum')
    }
    console.log('before', getData.insurance, getData.inituser)
    getData.insurance.ww_info.oagi6002vo.objCat = watch('objCat');
    getData.insurance.ww_info.oagi6002vo.objAddr2 = watch('objAddr2');
    getData.insurance.ww_info.oagi6002vo.hsArea = watch('hsArea');
    getData.insurance.ww_info.oagi6002vo.bldFloors1 = watch('bldFloors1');
    getData.insurance.ww_info.oagi6002vo.bldFloors2 = watch('bldFloors2');
    getData.insurance.ww_info.oagi6002vo.lobzCd = watch('lobzCd');
    getData.inituser = user
    StorageSetInsurance(getData.insurance, getData.inituser)
    console.log('after', getData.insurance, getData.inituser)
  }
  useEffect(() => {
    StorageClearInsurance()
    reset()
  }, [])

  return (
    
      <Layout>
        <Wrap>
          <Content>
            <Step1 />
            <Step2 />
            <Button 
              onClick={onClickNext}
              disabled={(
                watch('objAddr1') === '' || 
                watch('objAddr2') === '' ||
                watch('hsArea') === '' ||
                watch('bldFloors1') === '' ||
                watch('bldFloors2') === '' ||
                watch('lobzCd') === '' ||
                watch('name') === '' ||
                watch('telNo') === '' ||
                watch('email') === '' ||
                watch('identiNum') === '' ||
                watch('Terms_1') === false ||
                watch('Terms_2') === false ||
                watch('Terms_3') === false ||
                watch('Terms_4') === false ||
                watch('Terms_5') === false
              )}
            >
              다음
            </Button>
          </Content>
        </Wrap>
      </Layout>
    
  )
}

export default InsuroboWindstorm

