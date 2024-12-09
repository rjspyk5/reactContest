import React from "react";
import { Rootlayout } from "./layout/Rootlayout";
import { Home } from "./Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
