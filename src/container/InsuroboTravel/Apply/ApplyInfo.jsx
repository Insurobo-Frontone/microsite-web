import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const ApplyInfo = ({ type, joinUserInfo }) => {
  const { watch } = useFormContext();
  const mobile = watch('mobileRep')
  .replace(/[^0-9]/g, '')
  .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3")

  return (
    <>
      {joinUserInfo && (
        <TextWrap>
          <h2>가입자 정보</h2>
          <ul>
            <li>
              <div>
                <p>{watch(type === 'local' ? 'nameLocalRep' : 'nameOverRep')}</p>
              </div>
              <p>{mobile}</p>
            </li>
            <li>
              <div>
                <p>{watch('birthRep')} - </p>
                <p>{watch('LastRegRep').substring(0, 1)}******</p> 
              </div>
              <p>{watch('emailRep')}@{watch('emailRep2')}</p>
            </li>
          </ul>
        </TextWrap>
      )}

    </>
  )
}
export default ApplyInfo;

const TextWrap = styled.div`
  > ul {
    > li {
      display: flex;
      margin-top: 20px;
      > div {
        display: flex;
        width: 144px;
        margin-right: 50px;
      }
    }
    p {
      color: #333333;
      font-size: 20px;
      font-weight: 300;
    }
  }
`;
