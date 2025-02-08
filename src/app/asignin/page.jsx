"use client";
import { useState } from "react";
import Link from "next/link";
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#CDF6FB]">
      {/* Left - Login Section */}
      <div className="w-2/3 bg-[#CDF6FB] flex flex-col justify-center items-center p-10">
        <h2 className="text-5xl font-semibold mb-4 font-sans">Welcome Back !!</h2>
        <p className="text-gray-600 mb-8">Please enter your credentials to log in</p>

        <input
          type="text"
          placeholder="Username"
          className="w-80 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 p-2 mb-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <Link  href="/aforget" className="text-sm text-gray-600 mb-4 hover:underline">
          Forgot password?
        </Link>

        <button className="bg-black text-white px-6 py-2 rounded-xl text-lg w-80 hover:opacity-80">
          SIGN IN
        </button>
      </div>

      {/* Right - Signup Section */}
      <div className="w-1/3 bg-purple-600 flex flex-col justify-center rounded-l-3xl items-center p-10 text-white relative">
        <h1 className="text-5xl font-bold mb-6">LIBRARY</h1>
        <p className="text-lg mb-6">New to our platform? Sign Up now.</p>

        <Link href="/asignup" className="bg-black text-center text-white px-6 py-2 rounded-xl text-lg w-80 hover:opacity-80">
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default AuthPage;
