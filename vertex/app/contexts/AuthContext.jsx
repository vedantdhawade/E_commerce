"use client";
import { auth } from "@/lib/firestore/firebase";
import { onAuthStateChanged } from "firebase/auth";

const { useEffect, createContext, useState, useContext } = require("react");

const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [user, setuser] = useState(undefined);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser(user);
      } else {
        setuser(null);
      }
    });
    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isloading: user === undefined,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
