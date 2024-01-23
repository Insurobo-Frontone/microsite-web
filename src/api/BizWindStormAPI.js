import axios from "axios";

export const bizWindstormAPI = axios.create({
  baseURL: 'https://insurobo.com',
  headers: {
    "Content-Type": `application/json`,
    "Accept": "application/json",
    withCredentials: true
  }

});

export const MoneypinBizInfo = async (bizNoList) => {
  return await axios({
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://insurobo.com/apiticket/getBizInfoOnce',
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
  return await bizWindstormAPI.post('/api/public/stmFld/save', params)
}

export const getWindStormSave = async (params) => {
  return await bizWindstormAPI.get(`/api/public/stmFld/selectOne?biz_no=${params}`)
}