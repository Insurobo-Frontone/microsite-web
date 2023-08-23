import React from "react";
import styled from "styled-components";
import TitleInput from "./TitleInput";
import Terms from "./Terms";
import Title from "../../Title";

const InputData = [
  { id: 1, title: '성명 / 상호명', placeholder: '홍길동', name: 'name' },
  { id: 2, title: '연락처', placeholder: '010-1234-5678', name: 'telNo'},
  { id: 3, title: '이메일', placeholder: 'abcd@gmail.com', name: 'email' },
  { id: 4, title: '주민(사업자)등록번호', placeholder: '‘-’ 제외 숫자만 입력', name: 'identiNum' },
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
            />
          </>
        )})
      }
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
