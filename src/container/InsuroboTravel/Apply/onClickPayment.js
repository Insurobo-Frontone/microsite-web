import axios from "axios";

export const onClickPayment = ({
  buyer_email, 
  buyer_name, 
  buyer_tel, 
  amount, 
  name, 
  merchant_uid
}) => {
  // 객체 초기화
  const { IMP } = window;
  IMP.init(`${process.env.REACT_APP_IMP}`);
  const data = {
    pg: "html5_inicis.INIBillTst", //PG사
    pay_method: "card", //결제수단
    merchant_uid: merchant_uid, //주문번호
    name: name, //주문명
    amount: amount, //결제금액
    buyer_email: buyer_email, //구매자 이메일
    buyer_name: buyer_name, //구매자 이름
    buyer_tel: buyer_tel, //구매자 전화번호
  };
  IMP.request_pay(data, callback);
}

const callback = (response) => {
  const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;
  if (success) {
    axios({
      url: "{서버의 결제 정보를 받는 endpoint}",
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: {
        imp_uid: imp_uid,
        merchant_uid: merchant_uid
      }
    }).then((data) => {
      // 서버 결제 API 성공시 로직
    })
  } else {
      alert(`결제에 실패하였습니다. 에러 내용: ${error_msg}`);
  }
}