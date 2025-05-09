// import React from 'react';

import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ProtectedLayout = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }

  return (
    <div className="h-dvh flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;
