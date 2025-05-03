import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiArrowRight, FiX } from "react-icons/fi"; // Import the close icon
import "./Style.css"; // CSS for styling
import { useNavigate } from "react-router-dom";

const NewJobsAlert = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const navigation = useNavigate();

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const handleSeemore = async () => {
    const token = localStorage.getItem("authToken");
    token ? navigation("/jobs") : navigation("/login");
  };

  return (
    <div className="black_alert_screen">
      <div className="new-jobs-alert"></div>
      <button onClick={handleClose} className="close-btn">
        <FiX />
      </button>
      <span>{t("new_jobs_available")}</span>
      <span style={{ width: "10em" }}>
        <a onClick={handleSeemore} className="see-more-button">
          {t("see_more")} <FiArrowRight />
        </a>
      </span>
    </div>
  );
};

export default NewJobsAlert;
