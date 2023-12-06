import axios from "axios";
import { StorageClearInsurance } from "../container/Storage/Insurance";
import { clearGetTravelMenu } from "../container/Storage/InsuTravel";

export const CommonAPI = axios.create({
        baseURL: process.env.REACT_APP_SERVER_HOST,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            withCredentials: true
        }
     });


CommonAPI.interceptors.request.use(
      function (config){
          const token = localStorage.getItem("@access-Token");

          if(token){
              config.headers.Authorization = `Bearer ${token}`;
          }

            return config;
      },
      function (error){
          return Promise.reject(error);
      }
    );

CommonAPI.interceptors.response.use(

        function (response) {
            return response;
        },
        function (error) {

            if(error.response.status === 401 || error.response.status === 403){
                if(!alert("세션이 만료되어 재로그인이 필요합니다.")){
                    // localStorage.removeItem("@access-Token");
                    // localStorage.removeItem("@user");
                    // localStorage.removeItem("@userName");
                    // StorageClearInsurance();
                    // clearGetTravelMenu();
                    // // pathname 빼고 나머지
                    localStorage.clear();
                    window.location.href = process.env.REACT_APP_LOGIN_URL;
                }
            }
            return Promise.reject(error);
        }
        );
