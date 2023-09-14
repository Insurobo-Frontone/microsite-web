import axios from "axios";

export const WindstormAPI = axios.create({
  baseURL: 'https://insrb.com',
  // baseURL: 'http://localhost:8080',
  headers: {
    'X-insr-servicekey':
    'Q29weXJpZ2h0IOKTkiBpbnN1cm9iby5jby5rciBBbGwgcmlnaHRzIHJlc2VydmVkLg==',
  },
});

// 주소검색
export const getJuso = async (params) => {
  return await WindstormAPI.get(`/ww/juso?search=${params}`);
  // return await WindstormAPI.get(`/Pub/AddrLink/getAddr?search=${params}`);
};

// 건축물 표제부 검색 API
export const getCover = async (params) => {
  console.log('getCover', params);
  return await WindstormAPI.get(
    `/ww/cover?sigungucd=${params.sigungucd}&bjdongcd=${params.bjdongcd}&bun=${params.bun}&ji=${params.ji}&zip=${params.zip}`,
    // `/Pub/Bld/getCover?sigungucd=${params.sigungucd}&bjdongcd=${params.bjdongcd}&bun=${params.bun}&ji=${params.ji}&zip=${params.zip}`,
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

// 현대해상 웹링크 목적물 정보 연계 API
export const postHiLinkObj = async (params) => {
  console.log('postHiLinkObj', params);
  return await WindstormAPI.post('Hi/StmFld/linkObjInfo', {
    data: {
      ...params,
    },
  });
};

//업종코드 기준정보 조회 API
export const getLoBzCdList = () => {
  return axios.get(
    // `Master/Code/getLoBzCdList`,
    'http://roylabs.iptime.org:8090/Master/Code/getLoBzCdList'
  );
};