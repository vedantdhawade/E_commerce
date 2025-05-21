import Link from "next/link";
import React from "react";

const page = () => {
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
          <button className="bg-gray-300 py-2 rounded-md">
            Sign in with Google
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
