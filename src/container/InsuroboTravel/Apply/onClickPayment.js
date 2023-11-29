import { postPaymentCom } from "../../../api/TravelAPI";

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
    merchant_uid: id, //주문번호
    amount: amount, //결제금액
    name: '국내여행자보험', //주문명
    buyer_name: buyer_name, //구매자 이름
    buyer_tel: buyer_tel, //구매자 전화번호
    buyer_email: buyer_email, //구매자 이메일
  };
  console.log(data)
  // 사전검증 로직을 여기로 변경할수도있음 
  // merchant_uid: `${id}_${new Date().getTime()}`
  
  IMP.request_pay(data, callback);
}

// 결제결과 처리
const callback = (response) => {
  const { success, error_msg, imp_uid, merchant_uid, paid_amount, buyer_email } = response;
  if (success) {
    console.log(response)
    postPaymentCom({
      imp_uid: imp_uid,
      merchant_uid: merchant_uid,
      amount: paid_amount,
      email: buyer_email
    }).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
    // postPaymentPre({
    //   merchant_uid: merchant_uid,
    //   amount: paid_amount,
    // }).then((res) => {
    //    postPaymentCom({
    //     imp_uid: res.imp_uid,
    //     merchant_uid: res.merchant_uid,
    //     amount: res.paid_amount,
    //     email: res.buyer_email
    //   }).then((res) => {
    //     console.log(res)
    //   }).catch((e) => {
    //     console.log(e)
    //   })
    // })
  } else {
    
  }

}


