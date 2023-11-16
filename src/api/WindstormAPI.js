import axios from "axios";

export const WindstormAPI = axios.create({
  // baseURL: process.env.REACT_APP_HIAPI_SERVER_HOST,
  baseURL: 'https://hds.insurobo.co.kr'
});

// 주소검색
export const getJuso = async (params) => {
  return await WindstormAPI.get(`/Pub/AddrLink/getAddr?search=${params}`);
};

// 건축물 표제부 검색 API
export const getCover = async (params) => {
  return await WindstormAPI.get(
    `/Pub/Bld/getCover?sigunguCd=${params.sigungucd}&bjdongCd=${params.bjdongcd}&bun=${params.bun}&ji=${params.ji}&zip=${params.zip}`,
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

//업종코드 기준정보 조회 API
export const getLoBzCdList = () => {
  return WindstormAPI.get(
    '/Master/Code/getLoBzCdList'
  );
};

// 현대해상 웹링크 목적물 정보 연계 API
export const postHiLinkObj = async (params) => {
  return await WindstormAPI.post('/Hi/StmFld/linkObjInfo', { 
    ...params,
  });
};

