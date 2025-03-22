import React, { useState } from "react";
import "./styles/login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// Import your register function from the API
import image from "../Assets/Images/intro.png";
import { register } from "../Utility/UserAPI";
import { Alert } from "@mui/material";

const Register = () => {
  // State variables for the form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigation = useNavigate(); // For navigation after registration

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const userData = { fullName, email, phoneNumber, password };

    try {
      const response = await register(userData);
      if (response && response.token) {
        localStorage.setItem("authToken", response.token);
        navigation("/"); // Redirect to the homepage or desired page
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || "Something went wrong!");
      setShowAlert(true);

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 3000ms = 3 seconds
    }

    // Reset form fields
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-form" style={{ margin: 0, padding: 0 }}>
        <h2>Register</h2>
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%" }}>
          {showAlert && (
            <Alert severity="error" className="fadeAlert">
              {errorMessage}
            </Alert>
          )}
        </div>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>
        <p style={{ margin: 0, padding: 0 }}>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
      <div className="login-image">
        <div className="clip"></div>
        {/* <img src={image} alt="Login" /> */}
      </div>
    </div>
  );
};

export default Register;
