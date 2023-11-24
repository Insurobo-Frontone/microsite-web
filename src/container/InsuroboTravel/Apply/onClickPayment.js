
import { postPaymentCom, postPaymentPre } from "../../../api/TravelAPI";

// 결제요청
export const onClickPayment = ({
  id,
  amount,
  buyer_name,
  buyer_tel, 
  buyer_email
}) => {
  
  // 객체 초기화
  if (!window.IMP) return;
  const { IMP } = window;
  IMP.init("imp17342156");
  const data = {
    pg: "html5_inicis.INIBillTst", //PG사
    pay_method: "card", //결제수단
    merchant_uid: `${id}_${new Date().getTime()}`, //주문번호
    amount: amount, //결제금액
    name: '국내여행자보험', //주문명
    buyer_name: buyer_name, //구매자 이름
    buyer_tel: buyer_tel, //구매자 전화번호
    buyer_email: buyer_email, //구매자 이메일
    buyer_addr: '신사동 661-16', //구매자 주소
    buyer_postcode: '06018', // 구매자 우편번호
  };
  console.log(data)
  IMP.request_pay(data, callback);
}

// 결제결과 처리
const callback = (response) => {
  const { success, error_msg, imp_uid, merchant_uid, paid_amount, buyer_email } = response;
  if (success) {
    // postPaymentPre({
    //   imp_uid: imp_uid,
    //   merchant_uid: merchant_uid,
    //   amount: 1000,
    //   email: buyer_email
    // }).then(() => {
    //   postPaymentCom({
    //     imp_uid: imp_uid,
    //     merchant_uid: merchant_uid,
    //     amount: 1000,
    //     email: buyer_email
    //   }).then((res) => {

    //   })
    // }).catch((e) => {
    //   return false;
    // })

    
  } else {
    alert(`결제에 실패하였습니다. ${error_msg}`);

    
  }
}
