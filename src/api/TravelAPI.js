import axios from "axios";

export const TravelAPI = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_HOST,
  baseURL: 'https://insurobo.com'
});

export const getCalc = async (params) => {
  return await TravelAPI.get(`/api/public/simpleCalcList?age=${params.age}&sex=${params.sex}&period=${params.period}`)
}