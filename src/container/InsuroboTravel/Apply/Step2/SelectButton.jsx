import React, { useState, useEffect }  from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import Input from "../../Input";
import BasicInput from "../../Input/BasicInput";
import SelectPopup from "./SelectPopup";
import selectIcon from '../../../../assets/icon/insuroboTravelSelectIcon.png';

const SelectButton = ({ name }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { setValue } = useFormContext();
  useEffect(() => {
    setValue('target', '체험학습');
  }, []);
  
  const target = [
    { id: 1, value: '체험학습' },
    { id: 2, value: '가족과 여행' },
    { id: 3, value: '친구와 여행' },
    { id: 4, value: '동호회 여행' },
    { id: 5, value: '혼자 여행' },
    { id: 6, value: '수학 여행' },
    { id: 7, value: 'MT' },
    { id: 8, value: '워크샵' },
    { id: 9, value: '야유회' },
    { id: 10, value: '체육대회' },
    { id: 11, value: '수련회' },
    { id: 12, value: '세미나' },
    { id: 13, value: '국내출장' },
    { id: 14, value: '골프' },
    { id: 15, value: '등산' },
    { id: 16, value: '낚시' },
    { id: 17, value: '캠핑' },
    { id: 18, value: '레저' },
    { id: 19, value: '기타' },
  ];


  return (
    <>
      <Input type='button' onClick={() => setShowPopup(true)}>
        <BasicInput
          name={name}
          placeholder='선택'
          readOnly
        />
        <SelectArrow />
      </Input>
      {showPopup && (
        <SelectPopup
          data={target}
          close={() => setShowPopup(false)}
        />
      )}
    </>
  );
}

export default SelectButton;

const SelectArrow = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 28px;
  top: 21px;

  ${(props) => props.theme.window.mobile} {
    width: 20px;
    height: 20px;
    right: 10px;
    top: 12px;
    background-size: 70%;
  }
`;
