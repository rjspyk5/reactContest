import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../../firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signInWithPopup,
} from "firebase/auth";
export const AuthContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userr) => {
      setuser(userr);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const logIn = (email, pass) => {
    setloading(true);
    return signInWithCredential(auth, email, pass);
  };

  const provider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, provider);
  };
  const context = {
    signUp,
    logIn,
    logInWithGoogle,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
