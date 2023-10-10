import React, {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import styled from "styled-components";
import checkIcon from '../../assets/img/checkboxIcon.png';
import infoArrow from '../../assets/img/infoArrow.png';
import { ErrorMessage } from '@hookform/error-message';
import Modal from "../Modal";

const CheckBoxGroup = styled.div`
  position: relative;
  input {
    position: absolute;
    left: -1000px;
  }
  input:checked + label::before {
    background-color: #176FFF;
    border-color: #176FFF;
    background-image: url(${checkIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
  label {
    display: flex;
    align-items: center;
    padding: 25px 0;
    color: #2F2F2F;
    line-height: 30px;
    font-size: 20px;
    ::before {
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      border: 1px solid #989898;
      border-radius: 50%;
      margin-right: 18px;
      margin-left: 3px;
      transition: background-color .3s;
      box-sizing: border-box;
    }
  }

  ${props => props.theme.window.mobile} {
    label {
      font-size: 15px;
      ::before {
        width: 15px;
        height: 15px;
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }
`;

const AllChecked = styled.div`
  > label {
    font-size: 20px;
  }

  ${props => props.theme.window.mobile} {
    > label {
      font-size: 15px;
    }
  }
`;

const SelectChecked = styled.ul`
  padding: 15px 0;
  background-color: #F9F9F9;
  border-radius: 10px;
  margin-bottom: 13px;

  > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button {
      content: '';
      display: flex;
      width: 20px;
      height: 22px;
      background-image: url(${infoArrow});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
  }

  ${props => props.theme.window.mobile} {
    padding: 14px 0;
    margin-bottom: 10px;
    > li {
      .button {
        width: 18px;
      }
    }
  }
`;
const ErrorText = styled.p`
  font-size: 16px;
  line-height: 16px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.color.WARNING_MESSAGE};
  
  ${props => props.theme.window.mobile} {
    padding-top: 0px;
    line-height: 20px;
    font-size: 13px;
  }

`;

const Info = styled.div`
  width: 500px;
  height: 500px;
  padding: 20px 10px;
  background-color: #FFFFFF;
  border-radius: 10px;
  overflow: scroll;
  font-size: 13px;
  .txt1 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  .txt2 {
    font-size: 13px;
    margin-bottom: 10px;
  }
  .txt3 {
    border: 1px solid #dadada;
    margin-bottom: 20px;
  }
  ${props => props.theme.window.mobile} {
    width: 100%;
    font-size: 10px;
    .txt1 {
      margin-bottom: 5px;
    }
    .txt2 {
      font-size: 12px;
      margin-bottom: 5px;
    }
    .txt3 {
      margin-bottom: 10px;
    }
  }
`;


const HookFormCheckbox = (props) => {
    const {register, setValue, formState: { errors }} = useFormContext();
    const [allFlag, setAllFlag] = useState(false);
    const [termsFlag, setTermsFlag] = useState([false,false]);
    const [open, setOpen] = useState(false);

    const exList = [
      {
        id: 0,
        title: '회원가입 및 운영약관 동의(필수)',
        name: 'use_agree',
        label: 'select1',
        required: true,
        message: '필수 체크사항은 모두 동의해주세요',
        textArea: `
          <p class="txt1">[개인정보보호법] 및 [신용정보의 이용 및 보호에 관한 법률]에 따라 아래와 같은 내용으로 본인의 개인(신용)정보의 수집, 이용하는 것에 동의합니다.
          </p>
        <h3 class="txt2">1.개인 정보의 수집 및 이용</h3>
        <ol class="txt3">
          <li>
            1) 수집하는 개인정보 항목 및 수집 방법
            <div class="box1">
              ① 수집, 이용할 개인정보 항목<br>
              - 계약자 정보 : 계약자 성명(상호), 주민등록번호(외국인등록번호), 휴대폰번호, 이메일<br>
              - 피보험자 정보 : 피보험자의 성명, 주민등록번호(외국인등록번호), 휴대폰번호, 상호, 사업자번호, 사업장 주소, 기타 사업장 정보(업종, 층수, 평수)<br>
              ② 수집 방법 : 인터넷 전용페이지, 전화
            </div>
          </li>
          <li>2) 개인정보 수집 및 이용 목적
            <div class="box1">
              보험 가입 계약체결, 유지, 보험금 등 지급/심사, 민원처리 및 분쟁 대응, 보험사고조사, 보험모집질서 유지, 보험가입 안내 및 기타 상품 안내
            </div>
          </li>
          <li>3) 개인정보의 보유 및 이용기간
            <div class="box1">
              위 수집/이용 목적 달성 시까지(최대 가입일로부터 3년)
            </div>
          </li>
        </ol>
        <h3 class="txt2">2. 개인 정보의 조회</h3>
        <ol class="txt3">
          <li>
            1) 조회할 개인(신용)정보
            <div class="box1">
              본인 확인 정보 및 연계정보 확인
            </div>
          </li>
          <li>2) 개인(신용)정보 조회목적
            <div class="box1">
              보험계약의 인수심사/체결/유지/관리(갱신 포함), 보험금 등 지급/심사, 보험사고조사, 보험상품 추천안내
            </div>
          </li>
          <li>3) 조회동의 유효기간
            <div class="box1">
              위 조회 목적 달성 시까지
            </div>
          </li>
          <li>
            4) 조회자[개인(신용)정보를 제공받는 자]의 개인(신용)정보의 보유, 이용기간
            <div class="box1">정보를 제공받은 날로부터 개인(신용)정보의 조회 목적 달성 시까지</div>
          </li>
        </ol>
        <h3 class="txt2">3. 민감 정보 및 고유식별정보의 처리에 관한 사항</h3>
        <div class="txt3">
          당사는 개인정보보호법 제23조 및 제24조에 따라 본 계약과 관련하여 상기의 개인(신용)정보에 대한 개별 동의 사항에 대하여 고객님의 민감정보(질병•상해정보) 및
          고유식별정보(주민등록번호•외국인등록번호)를 처리(수집/이용, 제공 등)함
        </div>
      </div>
        `
      },
      {
        id: 1,
        title: '마케팅 이용 동의(선택)',
        name: 'marketing_yn',
        label: 'select2',
        required: false,
        message: '',
        textArea: `
        <div>
          <ol class="txt3">
            <li>1. 개인정보의 수집 및 이용목적
              <div class="box1">
                전화, 문자, 온라인를 활용한 보험상품 및 보험가입안내, 유익한 정보 및 서비스의 제공, 사은판촉행사안내 (문자, 전화 등), 증권 배송업무, 회원유치, 상품 권유
                업무, 전화상담 업무, 인터넷 관련 서비스 업무 등
              </div>
            </li>
             <li>2. 수집이용 할 개인(신용)정보의 내용
                <div class="box1">
                  계약자 정보 (성명, 주민등록번호, 휴대폰번호, 상호, 사업장 주소, 기타 사업장정보(업종, 층수, 면적) )
                </div>
                        </li>
                        <li>3. 개인(신용)정보의 보유, 이용기간
                          <div class="box1">
                            수집, 이용 동의일로부터 고객님의 동의 철회시까지 보관하며, 070-4126-3333로 전화 주시면 철회가능(단, 최대 2년)
                          </div>
                        </li>
                        <li>4. 수집자 : (주)인슈로보</li>
                        <li>5. 마케팅 목적의 제 3자 개인정보 제공
                          <div class="box1" id="partner-txt"></div>
                        </li>
                      </ol>
                      <p class="txt4">
                        ※ 상품권유 중지청구(Do-Not Call) 개인(신용)정보 제공 및 이용에 동의한 이후에도 전화[070-4126-3333], 서면 등을 통해 언제든지 마케팅활동에 대한 중지를
                        요청할 수 있습니다.
                      </p>
                    </div>
        `
      },
    ]
    const toggleCheck = (e, index) => {
      setTermsFlag((prev) => {
          const arr = { ...prev };
          arr[index] = !prev[index];
          return arr;
      });
    };

    const selectAll = (e) => {
        setAllFlag(e.target.checked);
        setValue('use_agree', e.target.checked)
        setValue('marketing_yn', e.target.checked)
        setTermsFlag((prev) => {
          Object.keys(prev).map((item) => prev[item] = e.target.checked)
         return {
             ...prev
         }
      });  
    };

    useEffect(() => {
      let allChecked = false;
      if (Object.values(termsFlag).every((item) => item)) {
        allChecked = true;
      }
      setAllFlag(allChecked);
    },[termsFlag])

    const [id, setId] = useState(0);

    const openModal = (id) => {
      setOpen(true)
      setId(id)
    }

    return (
      <>
        <CheckBoxGroup>
          <AllChecked>
            <input type="checkbox" checked={allFlag} {...register('all')} onChange={selectAll} id='all'/>
            <label htmlFor='all'>전체 약관 동의</label>
          </AllChecked>
          <SelectChecked>
            {exList.map((item, index) => {
              return (
                <li key={item.id}>
                  <div>
                    <input 
                      type="checkbox" 
                      id={item.label}
                      checked={termsFlag[item.id]}
                      {...register(item.name, {
                        required: {
                          value: item.required,
                          message: item.message
                        }
                      })}
                      onChange={(e) => toggleCheck(e, index)} 
                    />
                    <label htmlFor={item.label}>{item.title}</label>
                  </div>
                  <div className='button' onClick={() => openModal(item.id)} />
                </li>
              )}
            )}
          </SelectChecked>
          <ErrorMessage
            errors={errors}
            name={'use_agree'}
            render={({message}) => <ErrorText>{message}</ErrorText>}
          />
        </CheckBoxGroup>
        {open && (
          <Modal onClick={() => setOpen(false)}>
            <Info
              dangerouslySetInnerHTML={{__html: exList.find((cur) => cur.id === id).textArea}}
            />
          </Modal>
        )}
      </>
    )
}

export default HookFormCheckbox

