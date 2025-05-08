import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/Signup",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(res.data?.message || "Registered successfully");
      setTimeout(() => {
        navigate("/login");
      }, 1000);

      setFormData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-[100vw] gap-50 bg-gradient-to-br from-white to-blue-100 p-4">
      <div>
        <img src="../public/start.png" className="h-[25em]" alt="Logo" />
      </div>

      <div className="w-full max-w-sm bg-white rounded-3xl shadow-lg p-6">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="../public/Logo.png"
              alt=""
            />
            <h5 className="text-[20px] font-serif">HearthHand</h5>
          </div>
          <Link to={"/Login"}>
            <button className="text-sm text-white bg-blue-600 px-4 py-2 rounded-full">
              Login
            </button>
          </Link>
        </div>

        {/* Sign In Title */}
        <h2 className="text-2xl font-bold text-center text-black mb-1">
          Sign Up
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your details to proceed further
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700 border-gray-700">
              Name
            </label>
            <div className="relative">
              <input
                type="Text"
                placeholder="Name"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-sm"
                value={formData.name}
                name="name"
                onChange={handleChange}
                disabled={loading}
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <IoPersonOutline />
              </span>
            </div>
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-sm"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <MdOutlineEmail />
              </span>
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-sm"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <RiLockPasswordLine />
              </span>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 accent-blue-600"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 text-white  py-3 rounded-xl font-semibold text-sm mb-4">
            Sign Up
          </button>
        </form>

        <Link to={"/home"}>
          <p className=" text-black text-center rounded-xl font-semibold text-sm mb-4">
            Guest Login
          </p>
        </Link>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm mb-4">Or</div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full border border-gray-200 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium">
            <span>
              <FcGoogle />
            </span>{" "}
            Sign Up with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;