import React from "react";
import { useTranslation } from "react-i18next";

const LandBar = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="bar">
      <div className="bar-element">
        <h2 className="big-text">
          5.3<b>K+</b>
        </h2>
        <p className="short-text">{t("ready_job_vacancy")}</p>
      </div>
      <div className="bar-element">
        <h2 className="big-text">
          1<b>M+</b>
        </h2>
        <p className="short-text">{t("job_seekers_active")}</p>
      </div>
      <div className="bar-element">
        <h2 className="big-text">
          5.5<b>K+</b>
        </h2>
        <p className="short-text">{t("incorporated_company")}</p>
      </div>
    </div>
  );
};

export default LandBar;
