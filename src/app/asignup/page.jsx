"use client";
import { useState } from "react";
import Link from "next/link";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#CDF6FB]">
      <div className="w-1/3 bg-purple-600 flex flex-col justify-center rounded-r-3xl items-center p-10 text-white relative">
        <h1 className="text-5xl font-bold mb-6">LIBRARY</h1>
        <p className="text-lg mb-6 mt-5">Already have Account? Sign In now.</p>

        <Link href="/asignin" className="bg-black text-center text-white px-6 py-2 rounded-xl text-lg w-80 hover:opacity-80">
          SIGN IN
        </Link>
      </div>
      <div className="w-2/3 bg-[#CDF6FB] flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl font-semibold mb-4 font-sans">Sign Up</h2>
        <p className="text-gray-600 mt-5 mb-8">Please provide your information to sign up.</p>
        <div className="flex flex-col gap-1">
        <div className=" flex flex-row gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-48 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          <input
          type="text"
          placeholder="Last Name"
          className="w-48 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        <div className=" flex flex-row gap-4">
        <input
          type="text"
          placeholder= "Contact No"
          className="w-48 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          <input
          type="text"
          placeholder="Email"
          className="w-48 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        <div className=" flex flex-row gap-4">
        <input
          type="text"
          placeholder="Username"
          className="w-48 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
          <input
          type="password"
          placeholder="Password"
          className="w-48 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
        </div>
       <Link  href="/asignin" className="bg-black mt-4  text-white px-6 py-2  text-center rounded-xl text-lg w-80 hover:opacity-80">
         Sign Up
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
