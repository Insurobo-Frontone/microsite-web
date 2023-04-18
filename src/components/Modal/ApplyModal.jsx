import React from 'react'
import styled from 'styled-components'
import Modal from '.';
import { useForm } from 'react-hook-form';
import checkIcon from '../../assets/img/checkboxIcon.png';
import { useState } from 'react';
import { useEffect } from 'react';
import { CommonAPI } from '../../api/CommonAPI';

const Form = styled.form`
  background-color: #FFFFFF;
  padding: 50px 20px;
  width: 500px;
  border-radius: 10px;

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background-color: #6F85E3;
    border-radius: 10px;
    height: 50px;
    font-size: 15px;
  }

  ${(props) => props.theme.window.mobile} {
    width: 100%;
    padding: 50px 16px;
    > h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }
  }
`;

const InputGroup = styled.div`
  padding-bottom: 30px;
  > div {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
  }
  label {
    font-size: 0.7rem;
    width: 10%;
  }
  input {
    width: 88%;
    border-bottom: 1px solid #EBEBEB;
    height: 30px;
    padding: 10px 0; 
    :last-child {
      margin-bottom: 0;
    }
    ::placeholder {
      color: #989898;
      font-size: 0.6rem;
    }
  }
  ${(props) => props.theme.window.mobile} {
    input {
      width: 85%;
    }
    label {
      width: 15%;
    }
  }
`;

const ErrorText = styled.p`
  font-size: 13px;
  line-height: 13px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  position: absolute;
  bottom: -20px;
  left: 10%;
  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
  }
`;

const CheckBoxGroup = styled.div`
  padding-bottom: 20px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input[type='checkbox'] {
      position: absolute;
      left: -1000%;
    }
    input + label::before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border: 2px solid #EBEBEB;
      border-radius: 3px;
      margin-right: 10px;

    }
    label {
      display: flex;
      align-items: center;
      font-size: 0.7rem;
    }
    input:checked + label::before {
      border-color: #6F85E3;
      background-color: #6F85E3;
      background-image: url(${checkIcon});
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  .agree-btn {
    border: 1px solid #dadada;
    padding: 5px;
    font-size: 0.6rem;
  }
`;

const MoreBox = styled.div`
  font-size: 0.65rem;
  padding: 20px 10px;
`;


function ApplyModal({onClick}) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: "onBlur"
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
   reset()
  }, [])

  const onSubmit = async (data) => {

   const res = await CommonAPI.post('/api/public/consulting',
      {
        "name": data.name,
        "business": data.business,
        "phoneRole": data.phoneRole
      }
    )
    if (res.status === 200) {
      alert('상담신청이 완료 되었습니다.')
      reset()
      window.location.reload()
    }
    console.log(res)
  }

  const onError = (error) => {
    console.log(error)
  }
    return (
      <Modal onClick={onClick}>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <InputGroup>
            <div>
              <label>성명</label>
              <input
                type='text'
                placeholder='회사명을 입력하세요'
                {...register('name', {
                  required: '*필수 입력 사항입니다.',
                })}
              />
              {errors.name?.message && <ErrorText>{errors.name?.message}</ErrorText>}
            </div>
            <div>
              <label>연락처</label>
              <input
                placeholder='연락처'
                {...register('phoneRole', { 
                  required: '*필수 입력 사항입니다.',
                })}
              />
              {errors.phoneRole?.message && <ErrorText>{errors.phoneRole?.message}</ErrorText>}
            </div>
            <div>
              <label>업종</label>
              <input
                placeholder='영위하시는 업종을 입력해 주세요.'
                {...register('business', { 
                  required: '*필수 입력 사항입니다.',
                })}
              />
              {errors.business?.message && <ErrorText>{errors.business?.message}</ErrorText>}
            </div>
          </InputGroup>
          <CheckBoxGroup>
            <div>
              <div style={{ position: 'relative'}}>
                <input 
                  type='checkbox' 
                  id='agree' 
                  {...register('agreeCheck', { 
                    required: '*필수 입력 사항입니다.',
                  })}
                />
                <label for='agree'>개인정보수집 및 활용동의</label>
                {errors.agreeCheck?.message && <ErrorText>{errors.agreeCheck?.message}</ErrorText>}
              </div>
              <div className='agree-btn' onClick={() => setShowPopup(!showPopup)}>{showPopup ? '닫기' : '보기'}</div>
            </div>
            {showPopup && (
              <MoreBox>
                ▣ 개인정보 수집ㆍ이용 동의
                당사는 「개인정보보호법」, 「정보통신망 이용촉진 및 정보 보호 등에 관한 법률」에 따라 귀하의 개인정보를 다음과 같이 수집·이용하고자 합니다.<br />
                1. 개인정보 수집 및 이용 목적
                - 보험 상담 및 상품소개, 보험 리모델링 및 가입 권유를 위한 안내 및 서비스 제공<br />
                2. 개인정보 수집 및 이용 항목
                - 이름, 연락처, 업종<br />
                3. 개인정보 보유 및 이용기간
                - 동의일로부터 3년<br />
                4. 동의를 거부할 권리 및 동의를 거부할 경우의 불이익
                - 귀하는 개인정보 수집, 이용에 대한 동의를 거부할 권리가 있습니다.
                - 동의거부시 목돈마련 상담 등의 서비스를 받으실 수 없습니다.
              </MoreBox>
            )}
          </CheckBoxGroup>
          
          <button className='button' type='submit'>상담신청</button>
        </Form>
        
      </Modal>
    )
}

export default ApplyModal