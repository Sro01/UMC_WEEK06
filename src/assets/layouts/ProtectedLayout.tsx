// import React from 'react';

import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProtectedLayout = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    alert("로그인이 필요한 서비스입니다. 로그인 페이지로 이동합니다.");
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
