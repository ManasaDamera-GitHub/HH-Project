import React, { useState } from "react";
import "../../styles/LoginReg/Login.css";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="User Name"
            className="form-input"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="form-input"
            onChange={handleChange}
            value={formData.password}
          />
          <button
            type="button"
            className="toggle-password"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            className="form-input"
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};
