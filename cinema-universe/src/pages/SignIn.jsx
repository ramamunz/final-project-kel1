import React from "react";
import "../assets/img/signIn/css/login.css";
import Logo from "../assets/img/signIn/image/Logo.png";
import Frame from "./Frame.png"; // Sesuaikan dengan nama gambar sebenarnya
import Framee from "./Framee.png"; // Sesuaikan dengan nama gambar sebenarnya

const Login = () => {
  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h2 className="login-header">Login into your account</h2>
      <form className="login-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            className="input-username"
          />
          <div className="icon-box">
            <img src={Framee} alt="Icon" className="icon" />
          </div>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="input-password"
          />
          <div className="icon-box">
            <img src={Frame} alt="Icon" className="icon" />
          </div>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <span className="forgot-password">Forgot password</span>
        </div>
        <button className="login-button">Login</button>
      </form>
      <div className="or-line">
        <span className="or-text">OR</span>
      </div>
      <button className="signup-button">Sign Up Now</button>
    </div>
  );
};

export default Login;
