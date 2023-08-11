import axios from "axios";

export const WindstormAPI = axios.create({
  baseURL: process.env.REACT_APP__SVR_DOMAIN,
  timeout: 60 * 10000,
  headers: {
    'X-insr-servicekey':
    'Q29weXJpZ2h0IOKTkiBpbnN1cm9iby5jby5rciBBbGwgcmlnaHRzIHJlc2VydmVkLg==',
  }
});

