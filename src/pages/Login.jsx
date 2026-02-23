import React, { useState } from "react";
import loginIcon from "../assest/mainimage/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login button clicked");
  };

  return (
    <section className="min-h-screen bg-[#f3f5f7] flex items-center justify-center py-12 pb-50">

      <div className="container mx-auto px-4 flex items-center justify-center">

        <div className="bg-[#f4f6f8] p-6 rounded-xl shadow-2xl w-full max-w-sm ">

          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src={loginIcon}
              alt="login"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-2xl font-bold text-center mb-5">
            Login to Your Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Email address or phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <span
                onClick={handleToggle}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-red-700 transition duration-300"
            >
              Log In
            </button>

            <div className="text-center">
              <Link
                to="/forget-password"
                className="text-sm hover:underline hover:text-red-600"
              >
                Forgot password?
              </Link>
            </div>

            <div className="border-t pt-4 text-center">
              <Link to="../frontend/src/pages/SignUp.jsx">
                <button
                  type="button"
                  className="bg-[#fc5654] text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600 transition duration-300 w-full"
                >
                  Create New Account
                </button>
              </Link>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;