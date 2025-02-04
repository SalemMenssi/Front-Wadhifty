import React from "react";
import "../styles/jobs.css";
import SearchBar from "../../components/SearchBar";
import JobBox from "../../components/JobBox";
import CategoryList from "../../components/CategoryList";
import { Pagination } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { getAllJobs } from "../../Utility/JobsAPI";

const categories = [
  { name: "Software", jobCount: 120 },
  { name: "Design", jobCount: 80 },
  { name: "Marketing", jobCount: 60 },
  { name: "Finance", jobCount: 45 },
  { name: "Software", jobCount: 120 },
  { name: "Design", jobCount: 80 },
  { name: "Marketing", jobCount: 60 },
  { name: "Finance", jobCount: 45 },
  { name: "Software", jobCount: 120 },
  { name: "Design", jobCount: 80 },
  { name: "Marketing", jobCount: 60 },
  { name: "Finance", jobCount: 45 },
  { name: "Software", jobCount: 120 },
  { name: "Design", jobCount: 80 },
  { name: "Design", jobCount: 80 },
];

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const GetJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };

  useEffect(() => {
    GetJobs();
  }, [jobs]);

  return (
    <div className="jobs">
      <div className="header-jobs">
        <h1>
          “Find the Perfect Job
          <br />
          Today!”
        </h1>
      </div>
      <h2 style={{ marginBottom: "1em" }}>Looking for a job now</h2>
      <p>
        Type in the name of the position, company or job category you are
        looking for
      </p>
      <div className="column">
        <SearchBar />
      </div>
      <h2 style={{ marginBottom: "1em" }}>Choose Our Available Jobs</h2>
      <p>Find the following job that suits you and apply now</p>
      <CategoryList categories={categories} />
      <h2 style={{ marginBottom: "1em" }}>Available Jobs</h2>
      <JobBox data={jobs} />
      <div className="pagination-index">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
};

export default Jobs;
