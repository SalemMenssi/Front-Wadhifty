import React, { useEffect, useState } from "react";
import { JobsChart, UsersChart } from "../../components/Admin/Charts";
import "../styles/admin-style.css";

import usersIcon from "../../Assets/Icons/userIcons.png";
import JobsIcon from "../../Assets/Icons/JobIcons.png";
import { getAllUsers } from "../../Utility/UserAPI";
import { getAllJobs } from "../../Utility/JobsAPI";
const Home = () => {
  const [Jobs, setJobs] = useState([]);
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    hundlegetAllUsers();
    hundlegetAllJobs();
  }, []);

  const hundlegetAllUsers = async () => {
    const data = await getAllUsers();
    setUsers(data.userList);
  };
  const hundlegetAllJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };

  return (
    <div className="container">
      <h4>Hi, Welcome back 👋</h4>

      <div className="grid">
        <div className="summary-box">
          <div className="widget-summary">
            <h5>Total Users</h5>
            <p>{Users && Users.length}</p>
            <img alt="icon" src={usersIcon} />
          </div>

          <div className="widget-summary">
            <h5>Total Jobs</h5>
            <p>{Jobs && Jobs.length}</p>
            <img alt="icon" src={JobsIcon} />
          </div>
        </div>

        <div className="chart-container">
          <JobsChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
