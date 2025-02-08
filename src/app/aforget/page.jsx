"use client";
import { useState } from "react";
import Link from "next/link";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#CDF6FB]">
       <div className="w-1/3 bg-purple-600 flex flex-col justify-center rounded-r-3xl items-center p-10 text-white relative">
        <h1 className="text-5xl font-bold ">LIBRARY</h1>
        <p className="text-lg mt-10 w-56 text-center">"Your premier digital library for borrowing and reading books"</p>
      </div>
      <div className="w-2/3 bg-[#CDF6FB] flex flex-col justify-center items-center p-10">
       <Link href="/asignin"
          className="absolute top-5 right-5 bg-white border border-gray-300 px-3 py-1 text-sm rounded-lg hover:bg-gray-200"
        >
          BACK
        </Link>
        <h2 className="text-4xl font-semibold mb-4 font-sans">Forgot Password</h2>
        <p className="text-gray-600 mb-8">Please enter your username</p>
        <input
          type="text"
          placeholder="Username"
          className="w-80 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       <Link  href="/aotp" className="bg-black mt-2 text-white px-6 py-2  text-center rounded-xl text-lg w-80 hover:opacity-80">
         Reset Password
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
