import React, {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";
import styled from "styled-components";
import TermsModal from "./TermsModal";

import CheckBtn from '../../../../assets/icon/insuroboWindstorm/checkIcon.svg';
import CheckedBtn from '../../../../assets/icon/insuroboWindstorm/checkedIcon.svg';
import circleCheckBtn from '../../../../assets/icon/insuroboWindstorm/circleCheckIcon2.svg';
import circleCheckedBtn from '../../../../assets/icon/insuroboWindstorm/circleCheckedIcon.svg';

const CheckBoxGroup = styled.div`
  position: relative;
  margin: 45px auto;
  input {
    position: absolute;
    left: -1000px;
  }
`;

const AllChecked = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #2EA5FF;
  > input:checked + label::after {
    background-image: url(${circleCheckedBtn});
  }
  > p {
    font-size: 15px;
    color: #2EA5FF;
    font-weight: 700;
    line-height: 27px;
  }
  > label {
    display: flex;
    ::after {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      background-image: url(${circleCheckBtn});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

const SelectChecked = styled.ul`
  margin: 20px 0px 40px;

  > li {
    padding: 15px 0px;
    position: relative;
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    > input:checked + label::after {
      background-image: url(${CheckedBtn});
    }
    > label {
      display: flex;
      ::after {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background-image: url(${CheckBtn});
        background-repeat: no-repeat;
        background-position: center;
        background-size: 80%;
      }
    }
  }
`;


const Title = styled.p`
  font-size: 15px;
  text-decoration: underline;
  line-height: 24px;
  color: #808080;
`
const Checkbox = () => {
    const { register, setValue } = useFormContext();
    const [allFlag, setAllFlag] = useState(false);
    const [termsFlag, setTermsFlag] = useState([false,false,false,false,false,false]);
    const [modal, setModal] = useState(0);
    
    const exList = [
      {
        id: 0,
        title: '소비자 권익에 관한 사항',
        name: 'termsA6',
        label: 'select1',
        terms: 1,
      },
      {
        id: 1,
        title: '개인(신용)정보의 사전 수집/이용에 관한 사항',
        name: 'termsA1',
        label: 'select2',
        terms: 2,
      },
      {
        id: 2,
        title: '개인(신용)정보의 조회에 관한 사항',
        name: 'termsA2',
        label: 'select3',
        terms: 3,
      },
      {
        id: 3,
        title: '개인(신용)정보의 제공에 관한 사항',
        name: 'termsA3',
        label: 'select4',
        terms: 4,
      },
      {
        id: 4,
        title: '민감정보 및 고유식별정보의 처리에 관한 사항',
        name: 'termsA4',
        label: 'select5',
        terms: 5,
      },
      {
        id: 5,
        title: '개인정보의 제3자 제공에 관한 사항 (선택)',
        name: 'termsA7',
        label: 'select6',
        terms: 6,
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
      setValue('termsA6', e.target.checked);
      setValue('termsA1', e.target.checked);
      setValue('termsA2', e.target.checked);
      setValue('termsA3', e.target.checked);
      setValue('termsA4', e.target.checked);
      setValue('termsA7', e.target.checked);
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

    
    const handleModal = (idx) => {
      setModal(idx)
    }
    const handleCloseModal = () => {
      setModal(0);
    };
    return (
      <>
        <CheckBoxGroup>
          <AllChecked>
            <p>아래 내용의 모두 동의합니다.</p>
            <input type="checkbox" checked={allFlag} {...register('all')} onChange={selectAll} id='all'/>
            <label for='all'></label>
          </AllChecked>
          <SelectChecked>
            {exList.map((item, index) => {
              return (
                <li key={item.id}>
                  <Title onClick={() => handleModal(item.terms)}>{item.title}</Title>
                  <input
                    type="checkbox" 
                    id={item.label}
                    checked={termsFlag[item.id]}
                    {...register(item.name)}
                    onChange={(e) => toggleCheck(e, index)}
                  />
                  <label htmlFor={item.label}></label>
                </li>
              )})
            }
          </SelectChecked>
        </CheckBoxGroup>
        {modal > 0 && (
          <TermsModal onClick={handleCloseModal} id={modal} />
        )}
      </>
    )
}

export default Checkbox
