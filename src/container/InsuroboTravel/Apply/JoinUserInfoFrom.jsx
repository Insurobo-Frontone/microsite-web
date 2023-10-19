import React from "react";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import Input from "../Input";
import BasicInput from "../Input/BasicInput";
import SelectInput from "../Input/SelectInput";


const JoinUserInfoForm = ({ type }) => {
  const { watch } = useFormContext();
  const emailTem = [
    { id: 1, value: 'naver.com' },
    { id: 2, value: 'daum.net' },
    { id: 3, value: 'hanmail.net' },
    { id: 4, value: 'gmail.com' },
    { id: 5, value: 'nate.com' },
    { id: 6, value: 'myself' },
  ]
  return (
    <Form>
      {/* 1인 가입폼 */}
      <LeftContent>
        <div>
          <InputGroup>
            <Input label={watch('personType') === '1' ? '이름' : '대표 가입자 이름'}>
              <BasicInput
                type='text'
                name={type === 'local' ? 'nameLocalRep' : 'nameOverRep'}
                placeholder='이름'
              /> 
            </Input>
          </InputGroup>
          <InputGroup className="second-input-wrap">
            <Input label='주민번호' bracket='외국인번호' twoInput>
              <BasicInput
                    type='text'
                    name='birthRep'
                  /> 
                </Input>
                <span>-</span>
                <Input twoInput>
                  <BasicInput
                    type='text'
                    name='LastRegRep'
                    placeholder='주민번호 뒷자리'
                  /> 
                </Input>
              </InputGroup>
              <InputGroup>
                <Input label='휴대폰번호'>
                  <BasicInput
                    type='phone'
                    name='mobileRep'
                    placeholder='‘-’없이 입력'
                  /> 
                </Input>
              </InputGroup>
              <InputGroup className="second-input-wrap">
                <Input label='이메일' twoInput>
                  <BasicInput
                    type='text'
                    name='emailRep'
                    placeholder='‘-’없이 입력'
                  /> 
                </Input>
                <span>@</span>
                <Input twoInput>
                  <SelectInput
                    type='text'
                    name='emailRep2Change'
                    placeholder='선택'
                  >
                    {emailTem.map((cur, index) => {
                      return (
                        <option value={cur.value} key={index}>
                          {cur.value === 'myself' ? '직접입력' : cur.value}
                        </option>
                      )
                    })}
                  </SelectInput>
                </Input>
              </InputGroup>
              {watch('emailRep2Change') === 'myself' && (
                <InputGroup className="second-input-wrap child">
                  <Input twoInput>
                    <BasicInput
                      type='text'
                      name='emailRep2'
                    /> 
                  </Input>
                </InputGroup>
              )}
            </div>
            {watch('personType') === '1' ? (
              <div></div>
            ) : (
              <AddUserForm>

              </AddUserForm>
            )}
          </LeftContent>
          <RightContent>
            
          </RightContent>
    
     

      
      
      
    </Form>
  )
}

export default JoinUserInfoForm;

const Form = styled.form` 
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
  
`;



const RightContent = styled.div`

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
  }
  &.second-input-wrap.child {
    justify-content: flex-end;
  }
`;

const AddUserForm = styled.div``;
