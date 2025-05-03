import React, { useState } from "react";
import "./styles/login.css";
// import image from "../Assets/Images/intro.png";
// import googleIcon from "../Assets/Icons/flat-color-icons_google.svg";
// import FacebookIcon from "../Assets/Icons/bi_facebook.svg";
import { login } from "../Utility/UserAPI";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useTranslation } from "react-i18next";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirm password
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await login(userData);
      if (response && response.token) {
        localStorage.setItem("authToken", response.token);
        navigation("/");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.msg || t("login_error_default"));
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
    setEmail("");
    setPassword("");
    setConfirmPassword(""); // Reset confirm password
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
        <h2>{t("login_title")}</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">{t("login_email_label")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("login_email_placeholder")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">{t("login_password_label")}</label>
          <div className="password-container">
            <input
              style={{ width: "100%" }}
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder={t("login_password_placeholder")}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </a>
          </div>

          <button type="submit">{t("login_button_text")}</button>
        </form>
        {/* <div className="social-login">
          <button className="button-social">
            <img src={googleIcon} alt="google" />
          </button>
          <button className="button-social">
            <img src={FacebookIcon} alt="Facebook" />
          </button>
        </div> */}
        <p>
          {t("login_no_account_text")}{" "}
          <a href="/register">{t("login_register_link_text")}</a>
        </p>
      </div>
      <div className="login-image">
        <div className="clip"></div>
      </div>
    </div>
  );
};

export default Login;
