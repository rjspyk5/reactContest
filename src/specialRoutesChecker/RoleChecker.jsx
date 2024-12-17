import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "../hooks/useAxiosPublic";

export const RoleChecker = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  //   const { data, isLoading, refetch } = useQuery({
  //     queryKey: ["user"],
  //     queryFn: async () => {
  //       await axiosPublic.get(`/user/${user.email}`);
  //     },
  //   });
  return <div>RoleChecker</div>;
};
