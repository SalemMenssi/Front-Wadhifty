import React, { useEffect, useState } from "react";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import image from "../../Assets/Images/newHome.png";
import Button from "../../components/Button";
import LandBar from "../../components/LandBar";
import vedio from "../../Assets/gifs/vedio.mp4";
import applayIMG from "../../Assets/Icons/8.png";
import BagIMG from "../../Assets/Icons/2.png";
import MessageIMG from "../../Assets/Icons/6.png";
import resumeBar from "../../Assets/Images/ResumeBar.png";

import SearchBar from "../../components/SearchBar";
import CategoryList from "../../components/CategoryList";
import JobBox from "../../components/JobBox";
import { FiArrowRight } from "react-icons/fi";
import SidePub from "../../components/SidePub";
import { getAllJobs } from "../../Utility/JobsAPI";
import NewJobsAlert from "../../components/NewJobsAlert"; // Import the new component

const categories = [
  { name: "Software", jobCount: 120 },
  { name: "Design", jobCount: 80 },
  { name: "Marketing", jobCount: 60 },
  { name: "Finance", jobCount: 45 },
];

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const navigation = useNavigate();
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    navigation("/login");
  };

  const GetJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };

  useEffect(() => {
    GetJobs();
  }, []);

  return (
    <div>
      <NewJobsAlert />
      <div className="landing-page">
        <div className="right-side">
          <h1>{t("welcome_title")}</h1>
          <p>{t("welcome_text")}</p>
          <div
            style={{ display: "flex", justifyContent: "flex-end" }}
            className="btn-box-ar"
          >
            <Button text={t("get_started")} onClick={handleClick} />
          </div>
        </div>
        <div className="left-side">
          <img src={image} alt="Placeholder" />
        </div>
      </div>
      <LandBar />
      <div className="section">
        <div className="box">
          <div className="box-card">
            <img src={applayIMG} alt="apply" />
            <div className="content">
              <h3>{t("easy_apply_title")}</h3>
              <p>{t("easy_apply_text")}</p>
            </div>
          </div>
          <div className="box-card">
            <img src={BagIMG} alt="vacancies" />
            <div className="content">
              <h3>{t("many_vacancies_title")}</h3>
              <p>{t("many_vacancies_text")}</p>
            </div>
          </div>
          <div className="box-card">
            <img src={MessageIMG} alt="support" />
            <div className="content">
              <h3>{t("best_support_title")}</h3>
              <p>{t("best_support_text")}</p>
            </div>
          </div>
        </div>
      </div>
      <h2>{t("looking_for_job")}</h2>
      <p>{t("search_description")}</p>
      <div className="column">
        <SearchBar />
      </div>
      <img
        style={{ width: "100%", marginBlock: "10em 5em" }}
        src={resumeBar}
        alt="resume bar"
      />
      <h2>{t("choose_jobs")}</h2>
      <p>{t("find_suitable_job")}</p>
      <CategoryList categories={categories} />
      <JobBox data={jobs} />
      <a href="#" className="see-more-button">
        {t("see_more")} <FiArrowRight />
      </a>
      <SidePub />
    </div>
  );
};

export default Home;
