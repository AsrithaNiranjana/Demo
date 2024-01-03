import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export default function PrivateComponet() {
    const auth = localStorage.getItem('auth');
    const location = useLocation();
    if(auth){
        return location.pathname === "/" ? <Navigate to={"/dashboard"} /> : <Outlet />
    } else {
        return <Navigate to="/login" />
    }
  
}
