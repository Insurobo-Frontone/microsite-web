import axios from "axios";

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