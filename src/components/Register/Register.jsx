import React from "react";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/travel-api";

export default function Register() {
    const nav = useNavigate()
    const createRegister = (e) => {
        e.preventDefault();
        const registerData = {
          username: e.target.username.value,
          password: e.target.username.value,
          role: e.target.role.value
        };

        postRegister(registerData).then(() => {
            nav('/login')
        });
    }

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={createRegister} method="post">
          <label htmlFor="username">Username</label> <br />
          <input type="text" name="username" id="username" /> <br />
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" id="password" required /> <br />
          <label htmlFor="role">Role</label>  <br />
          <select name="role" id="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select> <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
