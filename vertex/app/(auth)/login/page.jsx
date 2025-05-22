"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { auth } from "@/lib/firestore/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);
  return (
    <main className="bg-gray-400 flex justify-center h-screen w-screen">
      <div className="flex flex-col items-center justify-center ">
        <h1 className=" text-2xl font-bold mb-2">Vertex Login</h1>
        <form className="flex flex-col gap-3 bg-white rounded-xl p-8 shadow-lg md:min-w-[380px] w-full">
          <label htmlFor="Login" className="font-bold">
            Login With Email
          </label>
          <input
            type="text"
            name="user-email"
            placeholder="xyz123@gmail.com"
            className="border p-2 focus:outline-none rounded "
          />
          <input
            type="password"
            name="user-password"
            placeholder="Password"
            className="border p-2 focus:outline-none rounded"
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md">
            Login
          </button>
          <div className="flex justify-between items-center gap-3">
            <Link href="/signup">
              <button className=" text-sm text-blue-700">
                New?Create Account
              </button>
            </Link>
            <Link href="/forget-password">
              <button className=" text-sm text-blue-700">
                Forget Password?
              </button>
            </Link>
          </div>
          <hr />
          <SignInWithGoogle />
        </form>
      </div>
    </main>
  );
};

function SignInWithGoogle() {
  const [isloading, setisloading] = useState(false);
  const handleLogin = async () => {
    setisloading(true);
    try {
      const user = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(user);
    } catch (error) {
      console.log(error);
    }
    setisloading(false);
  };
  return (
    <button
      onClick={handleLogin}
      disabled={isloading}
      className="bg-gray-300 py-2 rounded-md"
    >
      {isloading ? (
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-5 w-5 mr-3 text-blue-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"
            />
          </svg>
        </div>
      ) : (
        "Sign In With Google"
      )}
    </button>
  );
}

export default page;
