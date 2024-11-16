import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Pages/shared/Navbar/Navbar";
import { Footer } from "../Pages/shared/Footer/Footer";

export const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
