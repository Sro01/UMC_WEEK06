// import React from 'react';

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { accessToken } = useAuth();
  return (
    <nav>
      <Link to={"/"} className="nav-text middle-text">
        <img
          src="/images/logoUpdate-1_540x.avif"
          alt="LP"
          className="h-10 m-4"
        />
      </Link>
      <div className="space-x-6">
        <Link to={"/search"} className="hover:text-[#807bff]">
          SEARCH
        </Link>
        {!accessToken && (
          <>
            <Link to={"/login"} className="hover:text-[#807bff]">
              LOGIN
            </Link>
            <Link to={"/signup"} className="hover:text-[#807bff]">
              SIGN UP
            </Link>
          </>
        )}
        {accessToken && (
          <>
            <Link to={"/my"} className="hover:text-[#807bff]">
              MY
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
