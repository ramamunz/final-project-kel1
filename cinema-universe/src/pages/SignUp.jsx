import React, { useState } from "react";
import "../../src/assets/img/signIn/css/register.css";
import Logo from "../assets/img/signIn/image/Logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: fullName }).then(() => {
          console.log("User profile updated");
        });
        // console.log(userCredential);
        navigate("/SignIn");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signup-container">
      <img src={Logo} alt="Logo" className="logo" />
      <h2 className="signup-header">Register</h2>
      <form onSubmit={signUp} className="signup-form">
        <div className="form-group1">
          <input
            type="text"
            placeholder="Full Name"
            className="input-username1"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <svg className="icon1">
            <use xlinkHref="#1-lock"></use>
          </svg>
        </div>

        <div className="form-group1">
          <input
            type="text"
            placeholder="Email"
            className="input-username1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <svg className="icon1">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group1">
          <input
            type="password"
            placeholder="Password"
            className="input-password1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <svg className="icon1">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group1">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-password1"
          />
          <svg className="icon1">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>
        <button className="signup-button1">Create Account</button>

        <h2 className="last">
          By clicking “Create Account” you agree to our terms and privacy
          policy.
        </h2>
      </form>
    </div>
  );
};

export default Signup;
