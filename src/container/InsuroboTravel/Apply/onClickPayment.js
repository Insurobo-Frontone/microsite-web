// 결제요청

export const onClickPayment = ({
  id,
  amount,
  buyer_name,
  buyer_tel, 
  buyer_email,
  m_redirect_url
}, callback) => {
// 객체 초기화
  if (!window.IMP) return;
  const { IMP } = window;
  IMP.init("imp17342156");
  const data = {
    pg: "html5_inicis.MOIinsuro1", //PG사
    pay_method: "card", //결제수단
    merchant_uid: id, //주문번호
    amount: amount, //결제금액
    name: '국내여행자보험', //주문명
    buyer_name: buyer_name, //구매자 이름
    buyer_tel: buyer_tel, //구매자 전화번호
    buyer_email: buyer_email, //구매자 이메일
    m_redirect_url: m_redirect_url
  };
  
  console.log(data)
  IMP.request_pay(data, callback);
}


