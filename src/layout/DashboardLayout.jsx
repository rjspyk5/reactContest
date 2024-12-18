import React from "react";
import { useUser } from "../hooks/useUser";

export const DashboardLayout = () => {
  const { userDetails, isLoading } = useUser();
  console.log(isLoading, userDetails);

  return <div>dashboardLayout</div>;
};
