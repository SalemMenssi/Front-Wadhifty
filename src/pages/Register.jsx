import React, { useState } from "react";
import "./styles/login.css";
import { useNavigate } from "react-router-dom";
import image from "../Assets/Images/intro.png";
import { register } from "../Utility/UserAPI";
import { Alert } from "@mui/material";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigation = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage(t("register_arlafy.password_mismatch"));
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }

    const userData = { fullName, email, phoneNumber, password };

    try {
      const response = await register(userData);
      if (response && response.token) {
        localStorage.setItem("authToken", response.token);
        navigation("/");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.msg || t("register_arlafy.error_default")
      );
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-form" style={{ margin: 0, padding: 0 }}>
        <h2>{t("register_arlafy.title")}</h2>
        <div style={{ position: "absolute", top: 0, right: 0, width: "30%" }}>
          {showAlert && (
            <Alert severity="error" className="fadeAlert">
              {errorMessage}
            </Alert>
          )}
        </div>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">{t("register_arlafy.name")}</label>
          <input
            type="text"
            id="name"
            placeholder={t("register_arlafy.name_placeholder")}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <label htmlFor="email">{t("register_arlafy.email")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("register_arlafy.email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">{t("register_arlafy.phone")}</label>
          <input
            type="tel"
            id="phone"
            placeholder={t("register_arlafy.phone_placeholder")}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />

          <label htmlFor="password">{t("register_arlafy.password")}</label>
          <input
            type="password"
            id="password"
            placeholder={t("register_arlafy.password_placeholder")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="confirmPassword">
            {t("register_arlafy.confirm_password")}
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder={t("register_arlafy.confirm_password_placeholder")}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">{t("register_arlafy.submit")}</button>
        </form>
        <p style={{ margin: 0, padding: 0 }}>
          {t("register_arlafy.already_have_account")}{" "}
          <a href="/login">{t("register_arlafy.login_here")}</a>
        </p>
      </div>
      <div className="login-image">
        <div className="clip"></div>
      </div>
    </div>
  );
};

export default Register;
