import axios from "axios";

let tokenConfig = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://127.0.0.1:5000/getTicket',
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    'Accept': 'application/json',
  },
//  data : data
};

export const bizWindstormAPI = axios.create({
  baseURL: 'https://insurobo.com',
  headers: {
    "Content-Type": `application/json;charset=UTF-8`,
    "Accept": "application/json",
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
    url: 'http://127.0.0.1:5000/getBizInfo',
    headers: { 
      "Content-Type": `application/json;charset=UTF-8`, 
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    data: {
      "bizNoList": [bizNoList]
    }
  })
}

export const postWindstormSave = async (params) => {
  return await bizWindstormAPI.post('/public/stmFld/save', params)
}