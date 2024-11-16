import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { RootLayout } from "../layout/RootLayout";

export const Routing = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ path: "", element: <Home /> }],
  },
]);
