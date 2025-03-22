import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../styles/jobs.css";
import SearchBar from "../../components/SearchBar";
import JobBox from "../../components/JobBox";
import CategoryList from "../../components/CategoryList";
import { Pagination } from "@mui/material";
import { getAllJobs } from "../../Utility/JobsAPI";

const Jobs = () => {
  const { t } = useTranslation();
  const [jobs, setJobs] = useState([]);

  const GetJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };

  useEffect(() => {
    GetJobs();
  }, []);

  return (
    <div className="jobs">
      <div className="header-jobs">
        <h1>{t("jobs-title")}</h1>
      </div>
      <h2 style={{ marginBottom: "1em" }}>{t("jobs-subtitle")}</h2>
      <p>{t("jobs-description")}</p>
      <div className="column">
        <SearchBar />
      </div>
      <h2 style={{ marginBottom: "1em" }}>{t("jobs-choose-title")}</h2>
      <p>{t("jobs-choose-description")}</p>
      <CategoryList categories={[]} />
      <h2 style={{ marginBottom: "1em" }}>{t("jobs-available-title")}</h2>
      <JobBox data={jobs} />
      <div className="pagination-index">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
};

export default Jobs;
