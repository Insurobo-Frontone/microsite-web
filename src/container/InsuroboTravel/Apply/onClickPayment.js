import axios from "axios";

export const onClickPayment = () => {
  // 객체 초기화
  const { IMP } = window;
  IMP.init(`${process.env.REACT_APP_IMP}`);
  const data = {
    pg: "html5_inicis.INIBillTst",
    pay_method: "card",
    merchant_uid: "57008833-33004",
    name: "당근 10kg",
    amount: 1004,
    buyer_email: "Iamport@chai.finance",
    buyer_name: "포트원 기술지원팀",
    buyer_tel: "010-4242-4242",
    buyer_addr: "서울특별시 강남구 신사동",
    buyer_postcode: "01181",
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