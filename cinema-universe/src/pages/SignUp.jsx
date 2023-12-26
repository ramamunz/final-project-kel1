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
  const navigate = useNavigate;

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, { displayName: fullName }).then(() => {
          console.log("User profile updated");
        });
        // console.log(userCredential);
        navigate("/SignIn")
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
        <div className="form-group">
          <input
            type="text"
            placeholder="Full Name"
            className="input-username" value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group">
          <input type="email" placeholder="Email" className="input-username" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <svg className="icon">
            <use xlinkHref="#icon-lock"></use>
          </svg>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="input-password" value={password}
            onChange={(e) => setPassword(e.target.value)}
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
