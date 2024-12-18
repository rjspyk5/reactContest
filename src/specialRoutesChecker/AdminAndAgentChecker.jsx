import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import { Loading } from "../component/Loading/Loading";
import { useUser } from "../hooks/useUser";

export const AdminAndAgentChecker = ({ children }) => {
  const { user, loading } = useAuth();
  const test = useUser();

  console.log(test);
  if (loading) {
    return <Loading />;
  }
  //   if (!loading && user?.role === 0) {
  //     return <Navigate to="/admin" />;
  //   }
  return children;
};
