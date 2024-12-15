import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const useAuth = () => {
  const authcontext = useContext(AuthContext);
  return authcontext;
};
