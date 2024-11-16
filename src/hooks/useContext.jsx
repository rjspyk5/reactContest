import React from "react";
import { AuthContext } from "../context/AuthProvider";

export const useContext = () => {
  const value = useContext(AuthContext);
  return value;
};
