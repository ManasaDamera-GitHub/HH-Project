import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
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
      const res = await axios.post("http://localhost:3000/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      toast.success(res.data?.message || "Logged in successfully");
      setTimeout(() => {
        navigate("/home");
      }, 1000);

      setFormData({
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
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="brand">
            <img className="brand-logo" src="/Logo.png" alt="" />
            <h5 className="brand-title">HearthHand</h5>
          </div>
          <Link to={"/register"}>
            <button className="btn-primary">Sign up</button>
          </Link>
        </div>

        <h2 className="login-title">Login</h2>

        {/* Input */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="input-label">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                disabled={loading}
              />
              <span className="input-icon">
                <MdOutlineEmail />
              </span>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                disabled={loading}
              />
              <span className="input-icon">
                <RiLockPasswordLine />
              </span>
            </div>
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <div className="divider">Or</div>

        <button className="btn-google">
          <FcGoogle />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
