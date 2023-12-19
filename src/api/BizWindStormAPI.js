import axios from "axios";
let data = JSON.stringify({
  "grantType": "ClientCredentials",
  "clientId": "372a1d0b-99c2-45f4-914c-a5ad5045bbfb",
  "clientSecret": "jIFmTlj/cIwWCJ+TazcG3OwixyLPRCdiAGDfIluP718="
});
let tokenConfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.moneypin.biz/bizno/v1/auth/token',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json'
  },
  data : data
};

export const WindstormAPI = axios.create({
  baseURL: 'http://localhost:3000'
});

// 머니핀 인증토큰 생성
export const MoneypinToken = async () => {
  return await axios(tokenConfig)
}

export const MoneypinBizInfo = async (bizNoList, token) => {
  return await axios({
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.moneypin.biz/bizno/v1/biz/info/base',
    headers: { 
      'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: {
      "bizNoList": [bizNoList]
    }
  })
}