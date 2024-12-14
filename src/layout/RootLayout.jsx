import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Pages/shared/Navbar/Navbar";
import { Footer } from "../Pages/shared/Footer/Footer";
import { TopHeader } from "../Pages/shared/TopHeader/TopHeader";

export const Rootlayout = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" && <TopHeader />}

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
