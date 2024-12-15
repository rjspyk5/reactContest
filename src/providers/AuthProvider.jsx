import React, { createContext, useEffect } from "react";
import { auth } from "./../../firebase.config";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userr) => {
      console.log(userr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = () => {};
  const logIn = () => {};
  const logInWithGoogle = () => {};
  const context = {
    signIn,
    logIn,
    logInWithGoogle,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
