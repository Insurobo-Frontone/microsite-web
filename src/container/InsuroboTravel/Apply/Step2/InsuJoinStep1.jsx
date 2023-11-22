import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";
import Input from "../../Input";
import BasicInput from "../../Input/BasicInput";
import SelectInput from "../../Input/SelectInput";
import Button from "../Button";
import bgImgLocal from '../../../../assets/img/insuroboTravel/Join_1_localImg.png';
import bgImgOver from '../../../../assets/img/insuroboTravel/Join_1_overImg.png';
import { getUser } from "../../../Storage/Auth";
import Popup from "../Popup";
// import UserAddForm from "./UserAddForm";

const InsuJoinStep1 = ({ type }) => {
  const [close, setClose] = useState({
    state: true,
    message: '',
  });
  const { watch, setValue, formState: { isValid, isDirty, errors } } = useFormContext();
  const navigate = useNavigate();
  const user = getUser();
  const emailTem = [
    { id: 1, value: 'naver.com' },
    { id: 2, value: 'daum.net' },
    { id: 3, value: 'hanmail.net' },
    { id: 4, value: 'gmail.com' },
    { id: 5, value: 'nate.com' },
    { id: 6, value: 'myself' },
  ];
  const handleClose = () => {
    setClose((prev => ({
      ...prev,
      state: true,
      message: ''
    })));
  };
  
  return (
    <Form>
      {/* 보험가입 -> 신청 */} 
      <LeftContent type={type}>
        <div>
          <InputGroup>
            <Input label='이름'>
              <BasicInput
                type='text'
                name='nameRep'
                placeholder='이름'
                required='이름을 입력해주세요.'
                pattern={{
                  value: /^[가-힣]{2,6}$/,
                  message: '이름을 정확하게 입력해주세요'
                }}
                onBlur={() => errors?.nameRep ? setClose((prev) => ({
                  ...prev,
                  state: false,
                  message: errors?.nameRep.message
                })) : ''}
                defaultValue={user.getUserInfo?.userName}
              />
            </Input>
          </InputGroup>
          
          <InputGroup className="second-input-wrap">
            <Input label='주민번호' bracket='외국인번호' twoInput disabled>
              <BasicInput
                type='number'
                name='birthRep'
                disabled
                required={true}
              /> 
            </Input>
            <span>-</span>
            <Input twoInput>
              <BasicInput
                type='number'
                name='LastRegRep'
                placeholder='주민번호 뒷자리'
                required='주민번호 뒷자리를 입력해주세요.'
                pattern={{
                  value: /[1-4]\d{6}/,
                  message: '주민번호를 정확하게 입력해주세요'
                }}
                onBlur={() => errors?.LastRegRep ? setClose((prev) => ({
                  ...prev,
                  state: false,
                  message: errors?.LastRegRep.message
                })) : ''}
              /> 
            </Input>
          </InputGroup>
          <InputGroup>
            <Input label='휴대폰번호'>
              <BasicInput
                type='phone'
                name='mobileRep'
                placeholder='휴대폰 번호 ‘-’없이 입력'
                required='휴대폰 번호를 입력해주세요.'
                defaultValue={user.getUserInfo?.phoneRole}
                pattern={{
                  value: /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: '휴대폰번호를 정확하게 입력해주세요'
                }}
                onBlur={(e) => errors?.mobileRep ? setClose((prev) => ({
                  ...prev,
                  state: false,
                  message: errors?.mobileRep.message
                })) : setValue('mobileRep', watch('mobileRep').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`))}
              /> 
            </Input>
            </InputGroup>
            <InputGroup className="second-input-wrap">
              <Input label='이메일' twoInput>
                <BasicInput
                  type='text'
                  name='emailRep'
                  placeholder='이메일'
                  required='이메일을 입력해주세요.'
                  defaultValue={user.getUserInfo.userId?.split('@', 1)}
                  pattern={{
                    value:  /^[a-z0-9]*$/,
                    message: '이메일을 정확하게 입력해주세요'
                  }}
                  onBlur={() => errors?.emailRep ? setClose((prev) => ({
                    ...prev,
                    state: false,
                    message: errors?.emailRep.message
                  })) : ''}
                /> 
              </Input>
              <span>@</span>
              <Input twoInput type='select'>
                <SelectInput
                  name='emailRep2'
                  placeholder='선택'
                  required={true}
                  defaultValue={user.getUserInfo.userId?.split('@').reverse()[0]}
                >
                  {emailTem.map((cur) => {
                    return (
                      <option value={cur.value} key={cur.id}>
                        {cur.value === 'myself' ? '직접입력' : cur.value}
                      </option>
                    )
                  })}
                </SelectInput>
              </Input>
            </InputGroup>
            {watch('emailRep2') === 'myself' && (
              <InputGroup className="second-input-wrap child">
                <Input twoInput>
                  <BasicInput
                    type='text'
                    name='emailRep2Change'
                    required='이메일을 입력해주세요.'
                    pattern={{
                      value: /[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: '이메일을 정확하게 입력해주세요'
                    }}
                    onBlur={() => errors?.emailRep2Change ? setClose((prev) => ({
                      ...prev,
                      state: false,
                      message: errors?.emailRep2Change.message
                    })) : ''}
                  /> 
                </Input>
              </InputGroup>
            )}
          </div>
          <Button
            title='신청'
            disabled={!isDirty || !isValid}
            onClick={() => {
              navigate(`/insuroboTravel/apply?step=2&join=2`, {
                state: {
                  type: type,
                  step: '2',
                  join: '2'
                }
              });
            }}
          />
        {/* {watch('personType') === '1' ? (
          <Button
            title='확인'
            disabled={!isDirty || !isValid}
            onClick={() => 
            navigate(`/insuroboTravel/apply?step=2&join=2`)
          }
          /> 
        ) : (
          <UserAddForm />
        )} */}
      </LeftContent>
      <RightContent type={type}>
        <img src={type === 'local' ? bgImgLocal : bgImgOver} alt="imageBg" />
      </RightContent>
      {!close.state && (
        <Popup type='alert' close={handleClose}>
          <p>{close.message}</p>
        </Popup>
      )}
    </Form>
  );
}

export default InsuJoinStep1;

const Form = styled.form`
  display: flex;
`;

const LeftContent = styled.div`
  width: 492px;
  padding: 54px 0 0;
  > div {
    padding-bottom: 50px;
  }
  > div > div:last-child {
    margin-bottom: 0;
  }
  ${(props) => props.theme.window.mobile} {
    width: 100%;
    padding: 16px 0 0;
    > div {
      padding-bottom: 24px;
    }
  }
`;



const RightContent = styled.div`
  position: absolute;
  right: 0;
  top: 330px;
  ${props => props.type === 'local' && css`
    top: 406px;
  `}

  ${(props) => props.theme.window.mobile} {
    display: none;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
  
  &.second-input-wrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    > div {
      width: 232px;
    }
    > span {
      font-size: 20px;
      color: #333333;
      font-weight: 300;
    }
  }
  &.second-input-wrap.child {
    justify-content: flex-end;
  }

  ${(props) => props.theme.window.mobile} {
    margin-bottom: 10px;
    &.second-input-wrap {
      > div {
        width: 46.79487179487179%;
      }
      > span {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
`;




