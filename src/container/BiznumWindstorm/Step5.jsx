import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import SectionWrap from "./SectionWrap";
import CheckInput from "./Input/CheckInput";

const Step5 = () => {
	const terms = [
		{
			id: 6,
			textArea: ``
		},
		{
			id: 1,
			textArea: ``
		},
		{
			id: 2,
			textArea: ``
		},
		{
			id: 3,
			textArea: ``
		},
		{
			id: 4,
			textArea: ``
		},
	]
  useEffect(() => {
    
  }, []);

  return (
    <SectionWrap 
      title='개인(신용)정보 수집.조회.이용.제공 동의'
      info='본인은 개인정보보호법, 신용정보의 이용 및 보호에 관한 법률 및 관련 규정에 의해, 풍수해보험과 관련된 피보험자 개인정보의 수집.이용.조회.제공 및 고유식별정보 처리에 동의합니다(미성년자는 가입이 불가합니다).'
      hr='none'
    >
      <AllCheckButton>
        <button>전체 동의하기</button>
      </AllCheckButton>
			{terms.map((dt) => (
				<InputGroup>
					<ScrollView>{dt.textArea}</ScrollView>
					<RadioButton name={`termsA${dt.id}`} data={[{ id: `select${dt.id}_N`, value: 'N', title: '동의하지 않음'}, { id: `select${dt.id}_Y`, value: 'Y', title: '동의'}]} />
				</InputGroup>
			))}
			<CheckGroup>
				<CheckInput name='bizConfirm' id='bizConfirm' />
				<p>위 기재사실이 허위 또는 부실 작성일 경우 약관상 고의 및 중과실에 해당되어 <span>보험금 지급이 제한</span>될 수 있고, <span>보험 계약이 해지 또는 취소될 수 있음</span>을 확인하였습니다.</p>
			</CheckGroup>
			<ButtonGroup>
				<button className="default">이전</button>
				<button>가입신청</button>
			</ButtonGroup>
    </SectionWrap>
  )
}

export default Step5;

const AllCheckButton = styled.div`
	display: flex;
	justify-content: flex-end;
	> button {
		color: #FFFFFF;
		background-color: #6262EF;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 6px 10px;
		border-radius: 5px;
	}
`;

const InputGroup = styled.div`
  > div {
    justify-content: flex-start;
  }
  
  p {
    color: #666666;
    font-size: 14px;
    > span {
      font-size: 12px;
    }
  }
  ${props => props.sub && css`
    > div {
      margin-top: 6px;
    }
  `}
`;

const ScrollView = styled.div`
	border: 1px solid #E2E2E2;
	height: 117px;
	border-radius: 5px;
	margin-bottom: 14px;
`;

const CheckGroup = styled.div`
	display: flex;
	border-top: 1px solid #000000;
	border-bottom: 1px solid #E2E2E2;
	padding: 24px 0;
	margin-bottom: 24px;
	> p {
		margin-left: 12px;
		font-size: 14px;
		> span {
			color: #FF0000;
		}
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: space-between;
	> button {
		width: 175px;
		height: 50px;
		border-radius: 8px;
		font-size: 14px;
		color: #FFFFFF;
		background-color: #6262EF;
	}
	.default {
		background-color: #E2E2E2;
	}

	${props => props.disabled && css`
		> button {
			background-color: #E2E2E2;
		}
	`}
`;
