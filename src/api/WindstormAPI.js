import axios from "axios";
import { StorageGetInsurance } from "../container/Storage/Insurance";
const InsuroboWindstorm = StorageGetInsurance();

export const WindstormAPI = axios.create({
  baseURL: 'https://insrb.com',
  headers: {
    'X-insr-servicekey':
    'Q29weXJpZ2h0IOKTkiBpbnN1cm9iby5jby5rciBBbGwgcmlnaHRzIHJlc2VydmVkLg==',
  },
  
});

export const getJuso = async (params) => {
  return await WindstormAPI.get(`/ww/juso?search=${params}`);
};

export const getCover = async (params) => {
  console.log('getCover', params);
  return await WindstormAPI.get(
    `/ww/cover?sigungucd=${params.sigungucd}&bjdongcd=${params.bjdongcd}&bun=${params.bun}&ji=${params.ji}&zip=${params.zip}`,
  );
};

// 카카오 위도 경도 구하기
export const getRoadView = async (address) => {
  return await axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
    {
      headers: { Authorization: 'KakaoAK fcc20fe788cb7810ce0a9d929409394a' }
    }
  )
}