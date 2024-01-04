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
    "Content-Type": `application/json;charset=UTF-8`,
    'Accept': 'application/json',
    // "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Credentials':"true",
    withCredentials: true
  },
  data : data
};

export const bizWindstormAPI = axios.create({
  baseURL: 'https://insurobo.com',
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    "Accept": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Credentials':"true",
    withCredentials: true
  }
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
      "Content-Type": `application/json;charset=UTF-8`, 
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
      // "Access-Control-Allow-Origin": "*",
      // 'Access-Control-Allow-Credentials':"true",
      withCredentials: true
    },
    data: {
      "bizNoList": [bizNoList]
    }
  })
}

export const postWindstormSave = async (params) => {
  return await bizWindstormAPI.post('/public/stmFld/save', params)
}