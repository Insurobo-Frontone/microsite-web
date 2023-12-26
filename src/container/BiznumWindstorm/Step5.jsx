import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import RadioButton from "./Input/RadioButton";
import TextInput from "./Input/TextInput";
import SectionWrap from "./SectionWrap";
import CheckInput from "./Input/CheckInput";
import { useFormContext } from "react-hook-form";

const Step5 = () => {
	const [allChecked, setAllChecked] = useState(false);
	const { watch, setValue } = useFormContext();
	const terms = [
		{
			id: 'termsA6',
			textArea: `
				<div>
					소비자권익에 관한 사항
					<br /><br /><br />
					본 동의를 거부하시는 경우에는 보험계약 상담 등 정상적인 서비스제공이 불가능하며 본 동의서에 의한 개인(신용) 정보 조회는 귀하의 신용등급에 영향을 주지 않습니다.<br /><br />또한, 동의하시더라도 인슈로보 고객센터(070-4126-3333) 또는 현대해상 홈페이지 및 고객콜 센터(1577-1001)를 통해 철회하거나 보험계약상담 목적의 연락에 대한 중단을 요청하실 수 있습니다.
				</div>
			`
		},
		{
			id: 'termsA4',
			textArea: `
				<div>
					민감정보 및 고유식별정보의 처리에 관한 사항
					<br /><br />
					현대해상 및 현대해상 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 상기의 개인(신용)정보에<br /><br />대한 개별 동의사항에 대하여 다음과 같이 귀하의 민감정보(질병·상해정보) 및 고유식별정보(주민등록번호·외국인등록번호·운전면허번호)<br /><br />를 처리(수집·이용, 조회, 제공)하고자 합니다. 이에 동의하십니까?  
				</div>
			`
		},
		{
			id: 'termsA1',
			textArea: `
				<div>
					개인(신용)정보의 사전 수집·이용에 관한 사항
					<br /><br />
					보험회사 및 보험회사 업무수탁자는 「개인정보 보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 본 계약과 관련하여
					<br /><br />귀하의 개인(신용)정보를 다음과 같이 수집·이용하고자 합니다. 이에 대하여 동의하십니까?
					<br /><br />
					□ 개인(신용)정보의 수집·이용 목적 - 보험계약상담, 보험계약 인수여부 결정을 위한 판단, 다중이용업소화재배상책임보험 가입대상 확인, 재무설계서비스, 실손의료보험계약
					<br /><br />
					·기타손해보험계약 등 ‘실제 발생하는 손해만을 보상하는 실손형 보험’의 중복가입 확인을 위한 보험가입내역 조회
					<br /><br />
					- 민원 및 분쟁관련 대응, 만기알람서비스 신청 고객의 보험만기 안내
					<br /><br />
					□ 수집·이용할 개인(신용) 정보의 내용 - 개인식별정보 (성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 전자우편주소) - 질병 및 상해에 관한 정보(자동차보험은 해당없음) - 보험회사, 신용정보집중기관 및 보험요율산출기관에서 수집·관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함) - 다중이용업소정보(상호, 업종, 영업장 면적, 주소, 소방방재청 발급 일련번호) - 소득에 관한 정보(보험료 또는 담보별 누적 가입금액이 과도한 경우)
					<br /><br />	
					□ 개인(신용)정보 보유·이용기간 - 동의일로부터 개인(신용)정보의 목적을 달성할 때까지 (최대 거래종료후 5년까지. 단, 5년을 경과한 후에는
					<br /><br />
					보험금지급, 금융사고조사, 보험사기 방지.적발, 민원처리, 법령상 의무이행을 위한 경우에 한하여 보유.이용.제공)
				</div>
			`
		},
		{
			id: 'termsA2',
			textArea: `
				<div>
					개인(신용)정보의 조회에 관한 사항
					<br /><br />
					보험회사 및 보험회사 업무수탁자는 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」에
					<br /><br />
					따라 귀하의 개인(신용)정보를 다음과 같이 신용정보집중기관, 보험요율산출기관, 공공기관 등으로부터 조회하고자 합니다.
					<br /><br />
					이에 대하여 동의하십니까?
					<br /><br />
					□ 개인(신용)정보의 조회목적 - 보험계약상담, 보험계약 인수여부 결정을 위한 판단, 다중이용업소화재배상책임보험, 실손의료보험계약·기타손해보험계약 등
					<br /><br />
					‘실제 발생하는 손해만을 보상하는 실손형 보험’의 중복가입 확인
					<br /><br />
					- 보험계약의 체결.유지.관리(부활 및 갱신 포함), 보험금 등 지급.심사, 보험사고조사(보험사기 포함)
					<br /><br />
					□ 조회할 개인(신용)정보의 내용 - 신용정보집중기관 및 보험요율산출기관에서 수집·관리하는 정보(피보험자의 질병 및 상해에 관한 정보(자동차보험은 해당없음),
					<br /><br />
					보험계약정보, 보험금지급정보) - 개인식별정보 (성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 직업, 전화번호, 전자우편주소) - 다중이용업소정보 - 신용정보회사 및 통신사 등의 실명인증 및 본인인증을 위한 정보
					<br /><br />
					□ 조회동의 유효 기간 및 조회자(개인(신용)정보를 제공 받은 자)의 보유·이용 기간 - 동의일로부터 개인(신용)정보의 목적을 달성할 때까지 (최대 거래종료후 5년까지. 단, 5년을 경과한 후에는
					<br /><br />
					보험금지급, 금융사고조사, 보험사기 방지.적발, 민원처리, 법령상 의무이행을 위한 경우에 한하여 보유.이용.제공)
				</div>
			`
		},
		{
			id: 'termsA3',
			textArea: `
				<div>
					개인(신용)정보의 제공에 관한 사항
					<br /><br />
					당사 및 보험회사는 「개인정보 보호법」 및 「신용정보의 이용 및 보호에 관한 법률」 및 「다중이용업소의 안전관리에 관한 특별법」
					<br /><br />
					에 따라 귀하의 개인(신용)정보를 다음과 같이 제3자에게 제공하고자 합니다. 이에 대하여 동의하십니까?
					<br /><br />
					□ 개인(신용)정보를 제공받는자 - 병원, 의원 등 건강진단 관련 업무를 위탁받은 자, 계약적부 조사를 위탁받은 자(진단 및 계약적부 조사가 필요한 보험계약의 경우에 한함) - 재보험사 - 업무수탁자(모집자) 등'
					<br /><br />
					□ 개인(신용)정보를 제공받는 자의 이용목적 - 건강진단 업무(지정의 또는 파라메딕업체), 고지사항 확인(적부조사회사), 의료자문(사의), 계약적부조사, 할증심사, 인수
					<br /><br />
					가능여부 확인(재보험사)
					<br /><br />
					- 본인 실명인증(신용정보회사) - 보험계약상담, 보험계약 인수여부 결정을 위한 판단 등
					<br /><br />
					□ 제공할 개인(신용)정보의 내용 - 개인식별정보(성명, 생년월일, 주민등록번호, 외국인등록번호, 주소, 성별, 직업, 전화번호, 휴대전화번호, 전자우편주소) - 계약전 알릴의무사항 - 현대해상, 신용정보집중기관 및 보험요율산출기관에서 수집·관리하는 보험계약정보 및 보험금지급 관련 정보(사고정보 포함)
					<br /><br />
					(단, 제공받는 자의 이용 목적을 위해 필요한 정보에 한함)
					<br /><br />
					□ 제공받는 자의 개인(신용)정보 보유·이용기간 - 수집·동의일로부터 1년까지
				</div>
			`
		},
		{
			id: 'termsA7',
			textArea: `
				<div>
					마케팅 이용 동의에 관한 사항(선택)
					<br /><br />
					*수집.이용의 목적
					<br /><br />
					1)수집.이용의 목적 상품.서비스 소개 및 판매, 사은.판촉행사 안내, 시장조사
					<br /><br />
					2) 보유 및 이용기간 보험계약 체결실적이 있는 경우 : 동의일로부터 5년까지 보험계약 체결실적이 없는 경우 : 동의일
					<br /><br />
					로부터 2년까지(단, 비대면채널의 동의일로부터 3년)
					<br /><br />
					3) 거부 권리 및 불이익 귀하는 아래 개인(신용)정보 수집.이용에 관한 동의를 거부하실 수 있습니다.
					<br /><br />
					다만, 동의하지 않으실 경우 *상품 서비스 소개 및 사은행사 안내 등 혜택을 받지 못 할 수 있습니다.
					<br /><br />
					4) 수집.이용 항목 - 개인(신용)정보 - 일반개인정보 : 성명, 생년월일, 주소, 유선전화번호, 휴대폰번호,
					<br /><br />
					직업, 이메일주소 - 신용거래정보 : 당사 보험계약정보(보험상품명, 보험기간, 보험가입금액 등)
					<br /><br />
					*상기 내용에 동의하시는 경우 당사 또는 제휴사가 상품.서비스 소개 및 판매 안내 연락(TM 등)을 드릴 수 있습니다.
					<br /><br />
					*제공에 관한 사항
					<br /><br />
					1)제공 받는 자 - 개인정보 제공처
					<br /><br />
					(1).(당사 상품.서비스 소개 및 판매) ; 당사와 모집위탁계약을 체결한 자(설계사, 대리점)
					<br /><br />
					(2).(제휴사 상품.서비스 소개 및 판매) ; 당사와 제휴협약에서 정한 이용목적에 따른 서비스 제공자
					<br /><br />
					- 인카금융서비스㈜, 메트라이프금융서비스㈜, 신한금융플러스, ㈜에이플러스에셋어드바이저보험대리점
					<br /><br />
					- 배달라이더공제조합, 지엔터프라이즈㈜
					<br /><br />
					2) 제공받는 자의 이용목적
					<br /><br />
					- 상품.서비스 소개 및 서비스 제공
					<br /><br />
					- 보험증권전달, 보장내용의 안내, 보장분석 , 기타 보험서비스
					<br /><br />
					3) 보유 및 이용기간 - 보험계약 체결실적이 있는 경우 :
					<br /><br />
					동의일로부터 5년까지 - 보험계약 체결실적이 없는 경우 : 
					<br />
					동의일로부터 2년까지 (단, 비대면채널은 동의일로부터
					<br /><br />
					최대 3년) (위 보유 기간에서 동의일 이란 전자서명 날인한 날을 뜻합니다.)
					<br /><br />
					4) 거부 권리 및 불이익 귀하는 아래 개인(신용)정보 제공에 관한 동의를 거부하실 수 있습니다. 다만, 동의하지 않으실
					<br /><br />
					경우 “당사 및 제휴사의 상품 및 서비스 소개 등” 혜택을 받지 못 할 수 있습니다.
					<br /><br />
					*제공항목에 관한 사항
					<br /><br />
					1)개인(신용)정보
					<br /><br />
					- 일반신용정보 : 성명, 생년월일, 주소, 유선전화번호, 휴대폰번호, 직업, 이메일주소
					<br /><br />
					- 신용거래정보 : 보험계약정보(보험상품명, 보험기간, 보험가입
				</div>
			`
		},
	]
	const data = {
		// inputBldSt: watch('inputBldSt'),
		// inputBldEd: watch('inputBldEd'),
		// bldTotLyrNum: insurance.getCover.bldTotLyrNum,
		// hsArea: watch('hsArea'),
		// poleStrc: insurance.getCover.poleStrc,
		// roofStrc: insurance.getCover.roofStrc,
		// otwlStrc: insurance.getCover.otwlStrc,
		// objCat: watch('objCat'),
		// lobzCd: watch('lobzCd'),
		// objZip1: objZipValue.substring(0, 3),
		// objZip2: objZipValue.substring(3, 5),
		// objAddr1: watch('objAddr1'),
		// objAddr2: watch('objAddr2'),
		// bizNo: BizReplaceValue,
		// inrBirth: watch('inrBirth'),
		// inrGender: watch('inrGender'),
		// telNo: watch('telNo'),
		// ptyBizNm: watch('ptyBizNm'),
		// ptyKorNm: watch('ptyKorNm'),
		// termsA1: watch('termsA1') ? 'Y' : 'N',
		// termsA2: watch('termsA2') ? 'Y' : 'N',
		// termsA3: watch('termsA3') ? 'Y' : 'N',
		// termsA4: watch('termsA4') ? 'Y' : 'N',
		// termsA6: watch('termsA6') ? 'Y' : 'N',
		// termsA7: watch('termsA7') ? 'Y' : 'N',
	}
	const onClickNext = () => {
		console.log(data)
	}
  useEffect(() => {
    
  }, []);
	const onClickAllCheck = () => {
		setValue('termsA1', 'Y')
		setValue('termsA2', 'Y')
		setValue('termsA3', 'Y')
		setValue('termsA4', 'Y')
		setValue('termsA6', 'Y')
		setValue('termsA7', 'Y')
	}
  return (
    <SectionWrap 
      title='개인(신용)정보 수집.조회.이용.제공 동의'
      info='본인은 개인정보보호법, 신용정보의 이용 및 보호에 관한 법률 및 관련 규정에 의해, 풍수해보험과 관련된 피보험자 개인정보의 수집.이용.조회.제공 및 고유식별정보 처리에 동의합니다(미성년자는 가입이 불가합니다).'
      hr='none'
    >
      <AllCheckButton>
        <button onClick={() => onClickAllCheck()}>전체 동의하기</button>
      </AllCheckButton>
			{terms.map((dt) => (
				<InputGroup>
					<ScrollView dangerouslySetInnerHTML={{
						 __html: dt.textArea
					}} />
					<RadioButton name={dt.id} data={[{ id: `select_${dt.id}_N`, value: 'N', title: '동의하지 않음'}, { id: `select_${dt.id}_Y`, value: 'Y', title: '동의'}]} />
				</InputGroup>
			))}
			<CheckGroup>
				<CheckInput name='bizConfirm' id='bizConfirm' />
				<p>위 기재사실이 허위 또는 부실 작성일 경우 약관상 고의 및 중과실에 해당되어 <span>보험금 지급이 제한</span>될 수 있고, <span>보험 계약이 해지 또는 취소될 수 있음</span>을 확인하였습니다.</p>
			</CheckGroup>
			<ButtonGroup>
				<button className="default">이전</button>
				<button onClick={() => onClickNext()}>가입신청</button>
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
	overflow: scroll;
	padding: 16px 12px;

	> div {
		font-size: 14px;
	}
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
