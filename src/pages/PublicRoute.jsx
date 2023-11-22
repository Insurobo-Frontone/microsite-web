import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from "../utils";

const PublicRoute = ({ auth, restricted }) => {
  return (
    isLogin() && restricted ?
    <Navigate to='/' {...alert('접근이 불가능합니다.')} /> :
    <Outlet />
  )
};

export default PublicRoute;
