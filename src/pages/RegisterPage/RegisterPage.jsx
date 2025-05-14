import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import method functions 
import { postRegister } from "../../services/travel-api";

// Import Components
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

// Import CSS and assets
import "./RegisterPage.css";
import logo from "../../../src/assets/logo.png";

export default function RegisterPage() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const nav = useNavigate();

  // Define the handler
  const createRegister = (e) => {
    e.preventDefault();
    // Create the user to send to the server
    const registerData = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    // Used previous lab login from javascript to show the div on success and error
    // Additional Resource: https://dev.to/miriamfark/display-backend-errors-to-the-frontend-4hoa
    // Create the user
    postRegister(registerData)
      .then(() => {
        setSuccess("Registered Successfully.");
        setError("");

        setTimeout(() => {
          nav("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
        setSuccess("");
      });
  };

  const handleNavigation = () => {
    nav("/login");
  };
  
  return (
    <div>
      <Navigation />
      <div className="register-container">
            <div className="register">
              <img
                className="img-fluid"
                src={logo}
                alt="solara escapes logo"
                width={100}
              />
              <h2>Register</h2>
              {error && <div className="message-error-container">{error}</div>}
              {success && <div className="message-success-container">{success}</div>}
              <form className="register-form" onSubmit={createRegister} method="post">
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
                  minLength={5}
                  maxLength={12}
                  placeholder="Enter password..."
                />
                <label htmlFor="role">Role</label>
                <select name="role" id="role">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button type="submit">Register</button>
              </form>
              <p>
                Don't have an account.
                <button className="login-btn" onClick={handleNavigation}>
                  Log In
                </button>
              </p>
            </div>
          </div>
      <Footer />
    </div>
  );
}
