import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Calendar from "../../../Input/Calender";
import Input from "../../../Input";
import BasicInput from "../../../Input/BasicInput";
import SelectInput from "../../../Input/SelectInput";
import Button from "../../Button";
import { useState } from "react";
import Popup from "../../Popup";
import { addMonths } from "date-fns";
import useWindowSize from "../../../../../hooks/useWindowSize";

const InsuInfo = ({ onClickCalc }) => {
  const { setValue, watch, setError, formState: { errors } } = useFormContext();
  const [readOnly, setReadOnly] = useState(true);
  const [close, setClose] = useState(true);
  const { width } = useWindowSize();

  const endDataState = () => {
    if (watch('localStart') === undefined) {
      setError('localEnd', {
        type: 'custom',
        message: '여행시작일을 선택해주세요.'
      })
      setClose(false);
    } else {
      setReadOnly(false)
    }
  }

  const handleClose = () => {
    setClose(true);
  }
  const gender = [
    {
      id: 1,
      value: 'M',
      text: '남자',
    },
    {
      id: 2,
      value: 'F',
      text: '여자',
    },
  ]

  return (
    <>
      {width < 767.98 && (<MbText>*여행출발 1시간 전까지 가입가능!</MbText>)}
      <InputWrap>
        <Input label='여행시작일'>
          <Calendar
            name='localStart'
            placeholder='시작일'
            title='여행시작일'
            minDate={new Date()}
          />
        </Input>
        <Input label='여행종료일'>
          <Calendar
            name='localEnd'
            placeholder='종료일'
            title='여행종료일'
            minDate={watch('localStart')}
            maxDate={addMonths(watch('localStart'), 1) - 1}
            startDate={watch('localStart')}
            endDate={watch('localEnd') !== '' && 
              watch('localStart') > watch('localEnd') && 
              setValue('localEnd', '')
            }
            readOnly={readOnly}
            onFocus={endDataState}
          />
        </Input>
      </InputWrap>
      <InputWrap>
        <Input label='주민번호 6자리'>
          <BasicInput
            type='number'
            name='birthRep'
            placeholder='주민번호 앞자리'
            required={{
              message: '주민번호 앞 6자리를 입력해주세요.'
            }}
          />
        </Input>
        <Input label='성별' type='select'>
          <SelectInput
            name='genderRep'
            placeholder='선택'
            defaultValue=''
          >
            {gender.map((cur) => {
              return (
                <option value={cur.value} key={cur.id}>
                  {cur.text}
                </option>
              )
            })}
          </SelectInput>
        </Input>
      </InputWrap>
      <TipText>
        <div>Tip!</div>
        <p>가입증명서는 가입즉시 이메일로 발송</p>
      </TipText>
      <ButtonWrap>
        <Button
          title='보험료 확인'
          onClick={onClickCalc}
        />
      </ButtonWrap>
      {!close && (
        <Popup close={handleClose} type='alert'>
          {errors.localEnd && <p>{errors.localEnd.message}</p>}
        </Popup>
      )}
    </>
  );
}

export default InsuInfo;

const MbText = styled.p`
  padding-bottom: 14px;
  font-size: 14px;
  font-weight: 300;
  color: #393939;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  ${(props) => props.theme.window.mobile} {
    margin-bottom: 10px;
    > div {
      width: 48.3974358974359%;
    }
  }
`;

const TipText = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 34px;
  > div {
    width: 40px;
    height: 27px;
    color: #FFFFFF;
    background-color: #176FFF;
    border-radius: 5px;
    font-size: 16px;
    line-height: 1;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  > p {
    color: #176FFF;
    font-size: 16px;
  }
  ${(props) => props.theme.window.mobile} {
    padding-bottom: 24px;
    > div {
      font-size: 12px;
      height: 24px;
      margin-right: 6px;
    }
    > p {
      font-size: 14px;
      font-weight: 300;
    }
  }
  
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: -34px;
  left: 340px;
  z-index: 9999;

  ${(props) => props.theme.window.mobile} {
    position: static;
  }
`;
