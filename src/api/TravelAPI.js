import axios from "axios";
const token = localStorage.getItem("@access-Token");

export const TravelAPI = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_HOST,
  baseURL: 'https://insurobo.com',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${token}`,
  }
});

export const PaymentAPI = axios.create({
  baseURL: process.env.REACT_APP_PAYMENT,
  headers: { "Content-Type": "application/json" },
});

// 보험료 계산
export const getCalc = async (params) => {
  return await TravelAPI.get(`/api/public/simpleCalcList?age=${params.age}&sex=${params.sex}&period=${params.period}`)
}

// 보험 저장
export const postTourSave = async (params) => {
  return await TravelAPI.post('/api/public/domesticTourSave', { 
    ...params,
  });
}

// 보험 정보 불러오기
export const getTourList = async () => {
    return await TravelAPI.get(`/api/public/domesticTourList`, {
  });
}

// 보험 정보 삭제
export const deleteTourList = async (id) => {
    return await TravelAPI.delete(`api/public/domesticTourDelete/${id}`, 
  );
}

// 결제 사전준비
export const postPaymentPre = async (params) => {
  return await PaymentAPI.post('/api/payments/prepare', {
    data: {
      ...params
    },
  })
}

// 결제 사후검증
export const postPaymentCom = async (params) => {
  return await PaymentAPI.post('/api/payments/complete', {
    ...params
  })
}