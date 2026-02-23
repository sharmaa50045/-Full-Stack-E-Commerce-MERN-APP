import React, { useState, useEffect } from "react";
import signupIcon from "../assest/mainimage/forgotpasswnedSend.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {


  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [profilePic, setProfilePic] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleUploadPic = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  useEffect(() => {
    return () => {
      if (profilePic) {
        URL.revokeObjectURL(profilePic);
      }
    };
  }, [profilePic]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.trim().length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    if (data.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (data.password !== data.confirmPassword) {
      alert("Password not match ❌");
      return;
    }

    console.log("Signup Data:", data);
    alert("Signup Successful ✅");


    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });

    setProfilePic("");
  };

  return (
    <section className="min-h-screen bg-[#f3f5f8] flex items-center justify-center py-12">

      <div className="container mx-auto px-4 flex items-center justify-center">

        <div className="bg-white p-7 rounded-xl shadow-2xl w-full max-w-md">

          <div className="w-24 h-24 mx-auto mb-5 relative group">

            <label className="cursor-pointer">

              <img
                src={profilePic || signupIcon}
                alt="profile"
                className="w-full h-full object-cover rounded-full border"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleUploadPic}
                className="hidden"
              />

              <div className="absolute inset-0 bg-black/50 text-white text-xs flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition">
                Upload Photo
              </div>

            </label>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">
            Create New Account
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>


            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={data.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />


            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={data.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />


            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>


            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={data.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />

              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600 text-lg"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>


            <button
              type="submit"
              className="w-full bg-red-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-red-700 transition duration-300"
            >
              Sign Up
            </button>

            <p className="text-center text-sm mt-3">
              Already have an account?{" "}
              <Link to="/login" className="text-red-600 font-semibold hover:underline">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;