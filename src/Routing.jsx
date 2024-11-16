import React from "react";
import { Rootlayout } from "./layout/Rootlayout";
import { Home } from "./Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [{ path: "", element: <Home /> }],
  },
]);
