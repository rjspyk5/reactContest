import React from "react";
import { Rootlayout } from "./layout/Rootlayout";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
  },
]);
