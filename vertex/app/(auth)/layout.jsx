"use client";
import AuthContextProvider from "../contexts/AuthContext";

const layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default layout;
