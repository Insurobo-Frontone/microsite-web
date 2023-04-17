import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';


const PrivateRoute = ({ auth }) => {
  // state={{ from: history.location }}
  return (
    auth ? <Outlet /> : 
    <Navigate to='/login'  {...alert('로그인이 필요한 페이지입니다.')} />
  );

};

export default PrivateRoute;