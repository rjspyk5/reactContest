import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

export const useAuth = () => {
  const {} = useContext(AuthContext);
  return <div>useContext</div>;
};
