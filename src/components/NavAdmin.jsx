import React, { useState } from "react";
import "./Style.css";
import logo from "../Assets/Icons/theme2.png";
import avatar from "../Assets/Images/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";

const NavAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hundleLogout = async () => {
    await localStorage.removeItem("authToken");
    navigation("/");
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/users">Users</Link>
        <Link to="/applications">Applications</Link>

        <div className="auth-buttons">
          <a onClick={hundleLogout} className="register">
            Logout
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavAdmin;
