import { createContext } from "react";

export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const authValue = {};
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};
0;
