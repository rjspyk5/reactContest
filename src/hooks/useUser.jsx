import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "../hooks/useAxiosPublic";

export const useUser = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: userDetails,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const result = await axiosPublic.get(`/user/${user?.email}`);
      return result?.data;
    },
  });
  return { userDetails, isLoading };
};
