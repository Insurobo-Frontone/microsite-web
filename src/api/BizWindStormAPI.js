import axios from "axios";

export const bizWindstormAPI = axios.create({
  baseURL: 'https://insurobo.com',
  headers: {
    "Content-Type": `application/json`,
    "Accept": "application/json",
  }
});

export const MoneypinBizInfo = async (bizNoList) => {
  return await axios({
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://210.179.175.149:5000/getBizInfoOnce',
    headers: { 
      "Content-Type": `application/json`, 
      'Accept': 'application/json',
    },
    data: {
      "bizNoList": [bizNoList]
    }
  })
}

export const postWindstormSave = async (params) => {
  return await bizWindstormAPI.post('/public/stmFld/save', params)
}