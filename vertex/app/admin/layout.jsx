"use client";
import React, { useEffect } from "react";
import AdminLayout from "./components/Adminlayout";
import AuthContextProvider, { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

const layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <AdminChecking>{children}</AdminChecking>
    </AuthContextProvider>
  );
};
function AdminChecking({ children }) {
  const { user, isloading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isloading) {
      router.push("/login");
    }
  }, [user, isloading]);
  if (isloading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }
  return <AdminLayout>{children}</AdminLayout>;
}
export default layout;
