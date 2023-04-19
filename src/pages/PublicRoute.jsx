import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ auth, restricted }) => {
  return (
    auth && restricted ? 
    <Navigate to='/' {...alert('접근이 불가능합니다.')} /> :
    <Outlet />
  )
};

export default PublicRoute;