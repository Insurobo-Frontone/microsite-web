import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const ApplyInfo = ({ data }) => {
  const { watch } = useFormContext();
  const mobile = watch('mobileRep').replace(/[^0-9]/g, '').replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3")

  return (
    <>
      {data ? (
      ''
      ) : (
      <TextWrap>
        <h2>가입자 정보</h2>
        <ul>
          <li>
            <div>
              <p>{watch('nameRep')}</p>
            </div>
            <p>{mobile}</p>
          </li>
          <li>
            <div>
              <p>{watch('birthRep')} - </p>
              <p>{watch('LastRegRep').substring(0, 1)}******</p> 
            </div>
            <p>{watch('emailRep') +'@'+ (watch('emailRep2') === 'myself' ? watch('emailRep2Change') : watch('emailRep2'))}</p>
          </li>
        </ul>
      </TextWrap>)}
    </>
  )
}
export default ApplyInfo;

const TextWrap = styled.div`
  > ul {
    > li {
      flex-direction: column;
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

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    > h2 {
      font-size: 16px;
    }
    > ul {
      padding-top: 18px;
      border-bottom: 1px solid #F0F0F0;
      padding-bottom: 21px;
      > li {
        margin-top: 0;
        :first-child {
          > div {
            > p {
              padding-bottom: 10px;
            }
          }
          > p {
            padding-bottom: 10px;
          }
        }
        > div {
          width: 100%;
          margin-right: 0;
        }
      }
      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;
