import React, { useEffect, useState } from "react";
import "./Style.css";
import logo from "../Assets/Icons/logo.png";
import avatar from "../Assets/Images/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(true);

  const navigation = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hundleLogout = async () => {
    await localStorage.removeItem("authToken");
    navigation("/");
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");

      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    };

    // Set an interval to call checkAuth repeatedly
    const intervalId = setInterval(() => {
      checkAuth();
    }, 50); // Repeat every 5 seconds (adjust as needed)

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        {!isAuth ? (
          <div className="auth-buttons">
            <a href="/login" className="login">
              Login
            </a>
            <a href="/register" className="register">
              Register
            </a>
          </div>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>

            <div className="auth-buttons">
              <a onClick={hundleLogout} className="register">
                Logout
              </a>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
