import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import RadioButton from "./Input/RadioButton";
import SectionWrap from "./SectionWrap";
import CheckInput from "./Input/CheckInput";
import { useFormContext } from "react-hook-form";
import { postHiLinkObj } from "../../api/WindstormAPI";
import { StorageGetInsurance } from "../Storage/Insurance";
import useWindowSize from "../../hooks/useWindowSize";
import Popup from "./Popup";
import { postWindstormSave } from "../../api/BizWindStormAPI";
import { useSearchParams } from "react-router-dom";

const Step5 = () => {
	const { watch, reset, setFocus, setValue, setError, handleSubmit, formState: { errors } } = useFormContext();
	const { width } = useWindowSize();
	const [success, setSuccess] = useState(false);
	const navigate = useNavigate();
	const [close, setClose] = useState(false);
	const [message, setMessage] = useState('');
	const [searchParams] = useSearchParams();
	const jehuCd = searchParams.get('jehuCd');
	
	const onError = (e) => {
		if (e) {
			console.log(e)
			setClose(true)
		}
	}

	// 최종 가입신청 버튼 클릭시 호출
	const onClickNext = () => {
		const insurance = StorageGetInsurance();
		const objZipValue = insurance.getAddr.zipNo+''
		if (watch('overlap') === 'Y') {
			setError('overlap', {
				type: 'custom',
				message: '다른 소상공인 풍수해보험 가입 시 중복 가입이 불가합니다.'
			});
		}
 		if (!watch('bizConfirm')) {
			setClose(true);
			setError('bizConfirm', {
				type: 'custom',
				message: '필수항목에 체크해주세요.'
			});
			return false;
		}
		if (watch('termsA1') === 'N' || 
				watch('termsA2') === 'N' ||
				watch('termsA3') === 'N' || 
				watch('termsA4') === 'N' ||
				watch('termsA6') === 'N'
		) {
			setClose(true);
			setMessage('필수체크 항목에 동의하셔야 가입이 가능합니다');
			return false;
		} 
		if (jehuCd === 'yogiyo' ? watch('termsA8') === 'N' : '') {
			setClose(true);
			setMessage('필수체크 항목에 동의하셔야 가입이 가능합니다');
			return false;
		}
		if (
			watch('workerNumUnder') === 'N' ||
			watch('charSalesUnder') === 'N'
		) {
			setClose(true);
			setMessage('가입대상이 아닙니다.');
			return false;
		} if (watch('lobzCd') === '') {
			setClose(true);
			setError('lobzCd', {
				type: 'custom',
				message: '영위업종을 선택해주세요.'
			});
			setFocus('lobzCd');
			return false;
		} 
		if (jehuCd === 'payco' ? watch('inputBldSt') === '' : '') {
			setClose(true);
			setError('inputBldSt', {
				type: 'custom',
				message: '시작층을 선택해주세요.'
			});
			return false;
		}
		if (jehuCd === 'payco' ? watch('inputBldEd') === '' : '') {
			setClose(true);
			setError('inputBldEd', {
				type: 'custom',
				message: '끝층을 선택해주세요.'
			});
			return false;
		}
		
		if (jehuCd) {
			// console.log({
			// 	biz_no: watch('bizNo'),
			// 	biz_name: watch('ptyBizNm'),
			// 	ceo_name: watch('ptyKorNm'),
			// 	biz_type: watch('lobzCd'),
			// 	building_division: watch('objCat'),
			// 	address: watch('objAddr1'),
			// 	detail_address: watch('objAddr2'),
			// 	area: watch('hsFeet'), //원래는 면적인데 평수를 보내야함
			// 	squareMeter: Number.isInteger(Number(watch('hsArea'))) ? watch('hsArea') :
			// 	Number.parseFloat(watch('hsArea')).toFixed(2), //새로 추가된 필드는 면적을 보냄
			// 	biz_site_lease: watch('bizEstate'),
			// 	ugrnd_flr_cnt: '',
			// 	bld_tot_lyr_num: '',
			// 	input_bld_st: watch('inputBldSt'),
			// 	input_bld_ed: watch('inputBldEd'),
			// 	strct_cd_nm: '',
			// 	roof_strc: '',
			// 	otwl_strc: '',
			// 	worker_num_standard_under_yn: watch('workerNumUnder'),
			// 	worker_num: watch('workerNum'),
			// 	sales_standard_under_yn: watch('charSalesUnder'),
			// 	sales: watch('sales'),
			// 	imputation_reason_confirm_yn: watch('bizConfirm') ? 'Y' : 'N',
			// 	termsA1: watch('termsA1'),
			// 	termsA2: watch('termsA2'),
			// 	termsA3: watch('termsA3'),
			// 	termsA4: watch('termsA4'),
			// 	termsA6: watch('termsA6'),
			// 	termsA7: watch('termsA7'),
			// 	termsA8: watch('termsA8'),
			// 	difStmFldJoinYn: watch('overlap'),
			// 	phoneNum: watch('telNo'),
			// 	birthDate: watch('inrBirth'),
			// 	sex: watch('inrGender') === '1' ? 'M' : 'F',
			// 	jehuCd: jehuCd,
			// 	zipCode: watch('zipcode')
			// })
			postWindstormSave({
				biz_no: watch('bizNo'),
				biz_name: watch('ptyBizNm'),
				ceo_name: watch('ptyKorNm'),
				biz_type: watch('lobzCd'),
				building_division: watch('objCat'),
				address: watch('objAddr1'),
				detail_address: watch('objAddr2'),
				area: watch('hsFeet'), //원래는 면적인데 평수를 보내야함
				squareMeter: Number.isInteger(Number(watch('hsArea'))) ? watch('hsArea') :
				Number.parseFloat(watch('hsArea')).toFixed(2), //새로 추가된 필드는 면적을 보냄
				biz_site_lease: watch('bizEstate'),
				ugrnd_flr_cnt: '',
				bld_tot_lyr_num: '',
				input_bld_st: watch('inputBldSt'),
				input_bld_ed: watch('inputBldEd'),
				strct_cd_nm: '',
				roof_strc: '',
				otwl_strc: '',
				worker_num_standard_under_yn: watch('workerNumUnder'),
				worker_num: watch('workerNum'),
				sales_standard_under_yn: watch('charSalesUnder'),
				sales: watch('sales'),
				imputation_reason_confirm_yn: watch('bizConfirm') ? 'Y' : 'N',
				termsA1: watch('termsA1'),
				termsA2: watch('termsA2'),
				termsA3: watch('termsA3'),
				termsA4: watch('termsA4'),
				termsA6: watch('termsA6'),
				termsA7: watch('termsA7'),
				termsA8: watch('termsA8'),
				difStmFldJoinYn: watch('overlap'),
				phoneNum: watch('telNo'),
				birthDate: watch('inrBirth'),
				sex: watch('inrGender') === '1' ? 'M' : 'F',
				jehuCd: jehuCd,
				zipCode: watch('zipcode')
			}).then((res) => {
				if (res.status === 200) {
					setClose(true);
					setMessage('가입신청이 완료되었습니다.');
				  setSuccess(true);
					return false;
				}
			}).catch((e) => {
				console.log(e)
				 if (e.response.status === 400) {
					alert('잘못된 요청으로 처음부터 다시 작성해주시길 바랍니다.');
					reset()
				} else if (e.response.status === 409) {
					setClose(true);
					setMessage('이미 가입된 신청자입니다.');
				} else {
					alert('네트워크 에러가 발생했습니다 잠시후 다시 시도해주세요.');
				}
				return false;
			});
		}
		
		if (!jehuCd) {
			postHiLinkObj({
				inputBldSt: watch('inputBldSt'),
				inputBldEd: watch('inputBldEd'),
				bldTotLyrNum: insurance.getCover.bldTotLyrNum,
				hsArea: watch('hsArea'),
				poleStrc: insurance.getCover.poleStrc,
				roofStrc: insurance.getCover.roofStrc,
				otwlStrc: insurance.getCover.otwlStrc,
				objCat: watch('objCat'),
				lobzCd: watch('lobzCd'),
				objZip1: objZipValue.substring(0, 3),
				objZip2: objZipValue.substring(3, 5),
				objAddr1: insurance.getAddr.jibunAddr,
				objAddr2: watch('objAddr2'),
				bizNo: watch('bizNo'),
				inrBirth: watch('inrBirth'),
				inrGender: watch('inrGender'),
				telNo: watch('telNo'),
				ptyBizNm: watch('ptyBizNm'),
				ptyKorNm: watch('ptyKorNm'),
				termsA1: watch('termsA1'),
				termsA2: watch('termsA2'),
				termsA3: watch('termsA3'),
				termsA4: watch('termsA4'),
				termsA6: watch('termsA6'),
				termsA7: watch('termsA7'),
				}).then((res) => {
					const userId = res.data.results.userID;
					const link = width > 767.98 ? 'https://platform.hi.co.kr/service.do?m=pipis1000&jehuCd=insurobo&userId='  : 'https://mplatform.hi.co.kr/service.do?m=pipis1000&jehuCd=insurobo&userId=';
					window.open(`${link}${userId}`);
					navigate('/');
				}).catch((e) => {
					console.log(e);
					alert(e.response.data.message);
				});
		}
 	 }

	const jehuCdClose = () => {
		setClose(false);
		navigate('/');
	}

	const jehuText = jehuCd === 'yogiyo' ? 'DB손해보험주식회사' : '현대해상화재보험주식회사'
	const jehuCsText = jehuCd === 'yogiyo' ? '홈페이지 및 고객콜 센터(1588-0100)' : '홈페이지 및 고객콜 센터(1588-5656)';
	const terms = [
		{
			id: 'termsA6',
			textArea: `
				<div>
					소비자권익에 관한 사항
					<br /><br /><br />
					본 동의를 거부하시는 경우에는 보험계약 상담 등 정상적인 서비스제공이 불가능하며 본 동의서에 의한 개인(신용) 정보 조회는 귀하의 신용등급에 영향을 주지 않습니다.<br /><br />또한, 동의하시더라도 인슈로보 고객센터(070-4126-3333) 또는 ${jehuText} ${jehuCsText}를 통해 철회하거나 보험계약상담 목적의 연락에 대한 중단을 요청하실 수 있습니다.
					를 거부하시는 경우에는 보험계약 상담 등 정상적인 서비스제공이 불가능하며 본 동의서에 의한 개인(신용) 정보 조회는 귀하의 신용등급에 영향을 주지 않습니다. 또한, 동의하시더라도 인슈로보 고객센터(070-4126-3333) 또는 ${jehuText} ${jehuCsText}를 통해 철회하거나 보험계약상담 목적의 연락에 대한 중단을 요청하실 수 있습니다.
				</div>
			`
		},
		{
			id: 'termsA8',
			textArea: `
				<div>
					단체규약
					<br /><br />
					제1조 (목적)<br />
					이 규약은 ㈜인슈로보(이하 “인슈로보”라 합니다)의 웹사이트 www.insurobo.com와 모바일어플리케이션(이를 합하여 “플랫폼”이라 합니다) 회원들을 위하여 제공하는 서비스 이용에 관하여 회원들간 협약사항을 규정함을 그 목적으로 합니다.
					<br /><br />
					제2조 (회원자격)<br />
					•	1. 플랫폼상 서비스 이용약관에 동의한 회원은 이 협약의 당사자가 됩니다.<br />
					•	2. 회원의 자격득실 등에 관하여는 각 이용약관에서 정하는 바에 따릅니다.<br />
					<br /><br />
					제3조 (단체보험가입 청약 등)<br />
					•	1. 인슈로보는 회원을 위하여 계약자로서 보험사와 단체보험계약을 체결할 수 있습니다.<br />
					•	2. 인슈로보가 계약자인 단체보험계약에 피보험자로 가입하기를 희망하는 회원은 소정의 절차에 따라 보험가입신청(보험청약)을 합니다.<br />
					•	3. 보험청약을 하고자 하는 회원은 보험약관, Q&A 등을 충분히 읽고 이해한 후 청약을 하며, 보험사와 인슈로보가 고지를 요구하는 사항에 대하여 성실히 답합니다.<br />
					•	4. 회원이 가입하는 보험의 수익자는 보험가입자(피보험자) 본인과 그 법정상속인이 됩니다.<br />
					<br /><br />
					제4조 (기타사항)<br />
					•	1. 기존 서비스 변경, 새로운 서비스 출시, 법령의 개폐, 회원 요구 등의 사정이 있어 이 규약을 변경할 필요가 있는 경우, 인슈로보는 회원들을 위하여 규약을 즉시 변경합니다. 그리고 변경된 규약은 그 즉시 효력을 발합니다.<br />
					•	2. 인슈로보는 규약변경을 위해 필요한 경우 회원들에게 의견을 구할 수 있으며, 회원들은 이에 성실히 응합니다.<br />
					•	3. 규약변경을 희망하는 회원은 인슈로보에 그 구체적 변경안과 이유를 제시하여 규약변경을 제안할 수 있습니다. 이에 대하여는 인슈로보는 전항에 따라 처리합니다.<br />
					•	4. 인슈로보는 단체보험가입 등 규약에 직접적으로 영향을 받는 서비스를 이용하는 회원에게는 개별적으로 규약적용에 부동의하는지 의견을 구합니다. 이 때 규약에 부동의하는 회원은 해당서비스를 이용하지 않거나, 회원 탈퇴를 할 수 있습니다.
				</div>
			`
		},
		{
			id: 'termsA4',
			textArea: `
				<div>
					민감정보 및 고유식별정보의 처리에 관한 사항
					<br /><br />
					${jehuText} 및 ${jehuText} 업무수탁자는 「개인정보보호법」 및 「신용정보의 이용 및 보호에 관한 법률」에 따라 상기의 개인(신용)정보에<br /><br />대한 개별 동의사항에 대하여 다음과 같이 귀하의 민감정보(질병·상해정보) 및 고유식별정보(주민등록번호·외국인등록번호·운전면허번호)<br /><br />를 처리(수집·이용, 조회, 제공)하고자 합니다. 이에 동의하십니까?
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
					<br /><br />귀하의 개인(신용)정보를 다음과 같이 수집·이용하고자 합니다. 이에 대하여 동의하십니까?
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
					- 인카금융서비스㈜, 메트라이프금융서비스㈜, 신한금융플러스, ㈜에이플러스에셋어드바이저보험대리점, (주)어센틱금융그룹, 롯데손해보험, 한화금융서비스
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
		}
	];

	const onClickAllCheck = () => {
		setValue('termsA1', 'Y')
		setValue('termsA2', 'Y')
		setValue('termsA3', 'Y')
		setValue('termsA4', 'Y')
		setValue('termsA6', 'Y')
		setValue('termsA7', 'Y')
		if (jehuCd === 'yogiyo') {
			setValue('termsA8', 'Y')
		}
	}

  return (
    <form onSubmit={handleSubmit(onClickNext, onError)}>
    <SectionWrap 
      title='개인(신용)정보 수집.조회.이용.제공 동의'
      info='본인은 개인정보보호법, 신용정보의 이용 및 보호에 관한 법률 및 관련 규정에 의해, 풍수해보험과 관련된 피보험자 개인정보의 수집.이용.조회.제공 및 고유식별정보 처리에 동의합니다(미성년자는 가입이 불가합니다).'
      hr='none'
    >
      <AllCheckButton>
				<button type='button' onClick={() => onClickAllCheck()}>전체 동의하기</button>
      </AllCheckButton>
			{jehuCd === 'payco' || !jehuCd ? (
				<>
				{terms.filter((db) => db.id !== 'termsA8').map((dt) => (
					<InputGroup>
						<ScrollView
							dangerouslySetInnerHTML={{
							__html: dt.textArea
						}} />
						<div>
							<RadioButton name={dt.id} data={[{ id: `select_${dt.id}_N`, value: 'N', title: '동의하지 않음'}, { id: `select_${dt.id}_Y`, value: 'Y', title: '동의'}]} />
						</div>
					</InputGroup>
				))}
				</>
			) : (
				<>
				{terms.map((dt) => (
					<InputGroup>
						<ScrollView
							dangerouslySetInnerHTML={{
							__html: dt.textArea
						}} />
						<div>
							<RadioButton name={dt.id} data={[{ id: `select_${dt.id}_N`, value: 'N', title: '동의하지 않음'}, { id: `select_${dt.id}_Y`, value: 'Y', title: '동의'}]} />
						</div>
					</InputGroup>
				))}
				</>
			)}
			
			<CheckGroup>
				<CheckInput name='bizConfirm' id='bizConfirm' />
				<p>위 기재사실이 허위 또는 부실 작성일 경우 약관상 고의 및 중과실에 해당되어 <span>보험금 지급이 제한</span>될 수 있고, <span>보험 계약이 해지 또는 취소될 수 있음</span>을 확인하였습니다.</p>
			</CheckGroup>
			<ButtonGroup>
				<button type="button" className="default" onClick={() => navigate(-1)}>이전</button>
				<button type="submit">가입신청</button>
			</ButtonGroup>
    </SectionWrap>
			{close && (
				<Popup close={success ?  () => jehuCdClose() :  () => setClose(false)}>
					{	
						errors.bizNo ? <p>{errors.bizNo.message}</p> :
						errors.telNo ? <p>{errors.telNo.message}</p> :
						errors.inrBirth ? <p>{errors.inrBirth.message}</p> :
						errors.lobzCd ? <p>{errors.lobzCd.message}</p> :
						errors.objAddr2 ? <p>{errors.objAddr2.message}</p> :
						errors.hsArea ? <p>{errors.hsArea.message}</p> :
						errors.inputBldSt ? <p>{errors.inputBldSt.message}</p> :
						errors.inputBldEd ? <p>{errors.inputBldEd.message}</p> :
						errors.workerNum ? <p>{errors.workerNum.message}</p> :
						errors.bizMainType ? <p>{errors.bizMainType.message}</p> :
						errors.sales ? <p>{errors.sales.message}</p> :
						errors.bizConfirm ? <p>{errors.bizConfirm.message}</p> :
						errors.overlap ? <p>{errors.overlap.message}</p> :
						message !== '' && <p>{message}</p>
					}
				</Popup>
			)}
		</form>
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
		display: flex;
    justify-content: flex-start;
		> div {
			margin-right: 16px;
		}
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

	${(props) => props.theme.window.mobile} {
		> button {
			width: 164px;
		}
	}
`;
