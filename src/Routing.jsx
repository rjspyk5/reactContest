import React from "react";
import { Rootlayout } from "./layout/Rootlayout";
import { Home } from "./Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Registration } from "./Pages/Registration/Registration";
import { DashboardLayout } from "./layout/dashboardLayout";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/registration", element: <Registration /> },
      { path: "/login", element: <Login /> },
    ],
  },
  { path: "/dashboard", element: <DashboardLayout /> },
]);
