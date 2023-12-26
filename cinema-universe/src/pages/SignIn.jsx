import React, { useState } from "react";
import "../assets/img/signIn/css/login.css";
import Logo from "../assets/img/signIn/image/Logo.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Redirect to the home page after successful login
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h2 className="login-header">Login into your account</h2>
      <form onSubmit={signIn} className="login-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            className="input-username" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="icon-box">
            <svg className="icon">
              <use xlinkHref="#icon-lock"></use>
            </svg>
          </div>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="input-password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="icon-box">
            <svg className="icon">
              <use xlinkHref="#icon-lock"></use>
            </svg>
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
