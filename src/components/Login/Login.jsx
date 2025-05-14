import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postRegister } from "../../services/travel-api";

import "./Login.css";

export default function Register() {
  const [error, setError] = useState(null);

  const nav = useNavigate();
  const createLogin = (e) => {
    e.preventDefault();
    const loginData = {

      
      username: e.target.username.value,
      password: e.target.password.value,
    };

    // Used previous lab login from javascript to show the div on success and error
    // Additional Resource: https://dev.to/miriamfark/display-backend-errors-to-the-frontend-4hoa
    postLogin(loginData)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken)
        localStorage.setItem("refreshToken", res.data.refreshToken);
        const role = res.data.role
        
        if (role === "admin") {
          nav("/admindashboard");
        } else {
          nav("/");
        }
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const handleNavigation = () => {
    nav("/register");
  };

  return (
    <div className="login-container">
      <div className="login">
        <img
          className="img-fluid"
          src="../../src/assets/logo.png"
          alt="solara escapes logo"
          width={100}
        />
        <h1>Welcome Back!</h1>
        <h2>Login</h2>
        {error && <div className="message-error-container">{error}</div>}
        <form className="login-form" onSubmit={createLogin} method="post">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            placeholder="Enter username..."
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="Enter password..."
          />

          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account.
          <button className="signup-btn" onClick={handleNavigation}>
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
