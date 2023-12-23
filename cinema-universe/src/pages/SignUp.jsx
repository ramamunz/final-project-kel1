import React from "react";
import "../../src/assets/img/signIn/css/register.css";
import Logo from "../assets/img/signIn/image/Logo.png";

const Signup = () => {
  return (
    <div className="signup-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h2 className="signup-header">Register</h2>
      <form className="signup-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            className="input-username"
          />
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group">
          <input type="text" placeholder="Email" className="input-username" />
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="input-password"
          />
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-password"
          />
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>
        <button className="signup-button">Create Account</button>

        <h2 className="last">
          By clicking “Create Account” you agree to our terms and privacy
          policy.
        </h2>
      </form>
    </div>
  );
};

export default Signup;
