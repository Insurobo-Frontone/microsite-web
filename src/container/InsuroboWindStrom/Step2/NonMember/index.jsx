import React from "react";
import styled from "styled-components";
import TitleInput from "./TitleInput";
import Terms from "./Terms";
import Title from "../../Title";
import TitleRadio from "./TitleRadio";

const InputData = [
  { id: 1, title: '성명', placeholder: '홍길동', name: 'ptyKorNm', pattern: /^[가-힣a-zA-Z]+$/ },
  { id: 2, title: '상호명', placeholder: '비즈로보', name: 'ptyBizNm' },
  { id: 3, title: '연락처', placeholder: '‘-’ 없이 번호만 입력', name: 'telNo',  pattern: /^((01[1|6|7|8|9])[1-9]+[0-9]{6,7})|(010[1-9][0-9]{7})$/ },
  { id: 4, title: '사업자등록번호', placeholder: '‘-’ 제외 숫자만 입력', name: 'bizNo', pattern: /^[0-9]{10}$/ },
  { id: 5, title: '생년월일 (6자리)', placeholder: 'ex) 730321', name: 'inrBirth', pattern: /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/ },
];

const NonMember = () => {
  return (
    <Wrap>
      {InputData.map((cur) => {
        return (
          <>
            <TitleInput
              name={cur.name}
              title={cur.title}
              placeholder={cur.placeholder}
              pattern={cur.pattern}
            />
          </>
        )})
      }
      <TitleRadio />
      <Title>가입설계를 위한 개인정보처리 동의 (필수)</Title>
      <Terms />
    </Wrap>
  )
}

export default NonMember;

const Wrap = styled.div`
  > p {
    margin-top: 60px;
  }
`;
