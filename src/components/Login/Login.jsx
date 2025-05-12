import React from "react";
import { useNavigate } from "react-router-dom";
import { postLogin, postRegister } from "../../services/travel-api";

export default function Register() {
  const nav = useNavigate();
  const createLogin = (e) => {
    e.preventDefault();
    const loginData = {
      username: e.target.username.value,
      password: e.target.username.value,
    };

    postLogin(loginData)
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={createLogin} method="post">
          <label htmlFor="username">Username</label> <br />
          <input type="text" name="username" id="username" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" id="password" required />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
