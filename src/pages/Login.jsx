import React, { useState } from "react";
import "./styles/login.css";
import image from "../Assets/Images/intro.png";
import googleIcon from "../Assets/Icons/flat-color-icons_google.svg";
import FacebookIcon from "../Assets/Icons/bi_facebook.svg";
import { login } from "../Utility/UserAPI";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    const userData = { email, password };

    try {
      const response = await login(userData);
      if (response && response.token) {
        localStorage.setItem("authToken", response.token);
        navigation("/");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || "Something went wrong!");
      setShowAlert(true);

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3000ms = 3 seconds
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div style={{ position: "absolute", top: 0, right: 0, width: "30%" }}>
        {showAlert && (
          <Alert severity="error" className="fadeAlert">
            {errorMessage}
          </Alert>
        )}
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture email input
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Capture password input
          />

          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <button className="button-social">
            <img src={googleIcon} alt="google" />
          </button>
          <button className="button-social">
            <img src={FacebookIcon} alt="Facebook" />
          </button>
        </div>
        <p>
          Don’t have an account yet? <a href="/register">Register now</a>
        </p>
      </div>
      <div className="login-image">
        <div className="clip"></div>
        {/* <img src={image} alt="Login" /> */}
      </div>
    </div>
  );
};

export default Login;
