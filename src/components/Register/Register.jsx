import React from "react";
import { postRegister } from "../../services/travel-api";

export default function Register() {
    const createRegister = (e) => {
        e.preventDefault();
        const registerData = {
          username: e.target.username.value,
          password: e.target.username.value,
          role: e.target.role.value
        };

        postRegister(registerData);
    }

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={createRegister} method="post">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />
          <label htmlFor="role">Role</label>
          <select name="role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
