import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Style.css";
import logo from "../Assets/Images/newLogo.png";
import avatar from "../Assets/Images/avatar.jpg";

const NavBar = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigation = useNavigate();

  // Get initial language from i18next
  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    await localStorage.removeItem("authToken");
    navigation("/");
  };

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      setIsAuth(!!token);
    };

    const intervalId = setInterval(checkAuth, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, [isAuth]);

  useEffect(() => {
    const updateLanguage = () => setLanguage(i18n.language);
    i18n.on("languageChanged", updateLanguage);

    return () => {
      i18n.off("languageChanged", updateLanguage);
    };
  }, [i18n]);

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
              {t("login")}
            </a>
            <a href="/register" className="register">
              {t("register")}
            </a>
          </div>
        ) : (
          <>
            <Link to="/">{t("home")}</Link>
            <Link to="/jobs">{t("jobs")}</Link>
            <Link to="/contact">{t("contact")}</Link>
            <Link to="/profile">{t("profile")}</Link>

            <div className="auth-buttons">
              <a onClick={handleLogout} className="register">
                {t("logout")}
              </a>
            </div>
          </>
        )}

        {/* Language Switcher Dropdown */}
        <div className="language-switcher">
          <select
            value={language}
            onChange={(e) => handleChangeLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">français</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
