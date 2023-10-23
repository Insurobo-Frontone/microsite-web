import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Calendar from "../../../Input/Calender";
import Input from "../../../Input";
import BasicInput from "../../../Input/BasicInput";
import SelectInput from "../../../Input/SelectInput";
import Button from "../../Button";

const InsuInfo = ({ onClickCalc }) => {
  const { watch } = useFormContext()
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
      <InputWrap>
        <Input label='여행시작일'>
          <Calendar
            name='localStart'
            placeholder='출발일'
            title='여행시작일'
            minDate={new Date()}
          />
        </Input>
        <Input label='여행종료일'>
          <Calendar
            name='localEnd'
            placeholder='도착일'
            title='여행종료일'
            minDate={watch('localStart')}
            startDate={watch('localStart')}
          />
        </Input>
      </InputWrap>
      <InputWrap>
        <Input label='주민번호 6자리'>
          <BasicInput
            name='birthRep'
            placeholder='주민번호 앞 6자리'
          />
        </Input>
        <Input label='성별'>
          <SelectInput
            name='genderRep'
            placeholder='성별'
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
        <p>여행출발 1시간 전까지 가입가능!</p>
      </TipText>
      <ButtonWrap>
        <Button
          title='보험료 확인'
          onClick={onClickCalc}
        />
      </ButtonWrap>
    </>
  );
}

export default InsuInfo;


const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
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
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: -34px;
  left: 340px;
  z-index: 9999;
`;
