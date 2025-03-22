import React from "react";
import { useTranslation } from "react-i18next";
import "./Style.css";

const SidePub = () => {
  const { t } = useTranslation();

  return (
    <div className="pub-slide">
      <div className="left-box">
        <h3>{t("sidepub-title")}</h3>
      </div>
      <div className="right-content">
        <h1>{t("sidepub-heading")}</h1>
        <p>{t("sidepub-description")}</p>
        <button className="join-button">{t("sidepub-join-button")}</button>
      </div>
    </div>
  );
};

export default SidePub;
