import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import TravelPageContext from "../../../../../context/travelPageContext";
import Calendar from "../../../Input/Calender";
import { addMonths } from "date-fns";
import useWindowSize from "../../../../../hooks/useWindowSize";
import Input from "../../../Input";
import BasicInput from "../../../Input/BasicInput";
import SelectInput from "../../../Input/SelectInput";
import Button from "../../Button";
import Popup from "../../Popup";
import { CommonAPI } from "../../../../../api/CommonAPI";
// import UserContext from "../../../../../context/UserContext";
import { setUser } from "../../../../Storage/Auth";

const InsuInfo = () => {
  const { setValue, watch, reset, setError, handleSubmit, formState: { errors, isDirty, isValid } } = useFormContext();
  const [readOnly, setReadOnly] = useState(true);
  const [close, setClose] = useState(true);
  const { width } = useWindowSize();
  const { actions } = useContext(TravelPageContext);
  const auth = localStorage.getItem("@access-Token");
  useEffect(() => {
    userInfo();

  }, []);

  const userInfo = async () => {
    const res = await CommonAPI.get("/api/private/profile", {
      Authorization: `Bearer ${auth}`,
   })
    if(res.status === 200){
        // user.actions.setUser(res.data.data);
        setUser(res.data.data)
      
    }
  }

  const endDataState = () => {
    actions.setOpen(false);
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

  const onClickCalc = (data) => {
    console.log(data)
    // 백앤드 api연결작업 예정
    actions.setOpen(true);
  }

  const onError = (e) => {
    console.log(e)
    setClose(false);
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
    <form onSubmit={handleSubmit(onClickCalc, onError)}>
      {width < 767.98 && (<MbText>*여행출발 1시간 전까지 가입가능!</MbText>)}
      <InputWrap>
        <Input label='여행시작일'>
          <Calendar
            name='localStart'
            placeholder='시작일'
            title='여행시작일'
            minDate={new Date()}
            required='여행시작일을 선택해주세요.'
            onHandleChange={() => actions.setOpen(false)}
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
            onHandleChange={() => actions.setOpen(false)}
            required='여행종료일을 선택해주세요.'
          />
        </Input>
      </InputWrap>
      <InputWrap>
        <Input label='주민번호 6자리'>
          <BasicInput
            type='number'
            name='birthRep'
            placeholder='주민번호 앞자리'
            required='주민번호 앞 6자리를 입력해주세요.'
            pattern={{
              value: /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/,
              message: '생년월일을 정확하게 입력해주세요'
            }}
            validate={{
              value: () => actions.setOpen(false)
            }}
          />
        </Input>
        <Input label='성별' type='select'>
          <SelectInput
            name='genderRep'
            placeholder='선택'
            defaultValue=''
            required='성별을 선택해주세요.'
            validate={{
              value: () => actions.setOpen(false)
            }}
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
          type='submit'
          title='보험료 확인'
        />
      </ButtonWrap>
      {!close && (
        <Popup close={handleClose} type='alert'>
          {errors.localStart ? <p>{errors.localStart.message}</p> :  
            errors.localEnd ? <p>{errors.localEnd.message}</p> :
            errors.birthRep ? <p>{errors.birthRep.message}</p> :
            errors.genderRep && <p>{errors.genderRep.message}</p>}
        </Popup>
      )}
    </form>
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
  width: 480px;

  ${(props) => props.theme.window.mobile} {
    position: static;
    width: 100%;
  }
`;
