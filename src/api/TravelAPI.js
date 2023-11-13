import axios from "axios";
import { CommonAPI } from "./CommonAPI";

export const TravelAPI = axios.create({
  // baseURL: process.env.REACT_APP_SERVER_HOST,
  baseURL: 'https://insurobo.com',
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  }
});

export const getCalc = async (params) => {
  return await TravelAPI.get(`/api/public/simpleCalcList?age=${params.age}&sex=${params.sex}&period=${params.period}`)
}

export const postTourSave = async (params) => {
  return await TravelAPI.post('/api/public/domesticTourSave', { 
    ...params,
   });
}

export const getTourList = async () => {
  return await TravelAPI.get(`/api/public/domesticTourList`)
}
