import React from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postRegister } from "../../services/travel-api";

import "./Login.css";

export default function Register() {
  const nav = useNavigate();
  const createLogin = (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    postLogin(loginData).then((user) => {
      if (user.role === "admin") {
        nav("/admindashboard");
      } else {
        nav("/");
      }
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
          Don't have an account. <button className="signup-btn" onClick={handleNavigation}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}
