import React from "react";
import { postRegister } from "../../services/travel-api";

export default function Register() {
  const createRegister = (e) => {
    e.preventDefault();
    const registerData = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    postRegister(registerData);
  };
  return (
    <div className="post-register">
      <img
        src="../../assets/src/logo.png"
        alt="solar escapes logo"
        width={200}
      />
      <h1>Redgister</h1>

      <form onSubmit={createRegister} method="post">
        <label htmlFor="usename">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <label htmlFor="role">Role</label>
        <select name="role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
