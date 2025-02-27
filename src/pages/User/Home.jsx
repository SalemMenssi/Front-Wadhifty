import React, { useEffect } from "react";
import "../styles/home.css";
import { useNavigate, useNavigation } from "react-router-dom";
import image from "../../Assets/Images/land.svg";
import Button from "../../components/Button";
import LandBar from "../../components/LandBar";

import applayIMG from "../../Assets/Images/foundit 1.png";
import BagIMG from "../../Assets/Images/Foundit 1s.png";
import MessageIMG from "../../Assets/Images/Message Icon.png";
import resumeBar from "../../Assets/Images/ResumeBar.png";

import SearchBar from "../../components/SearchBar";
import CategoryList from "../../components/CategoryList";
import JobBox from "../../components/JobBox";
import { FiArrowRight } from "react-icons/fi";
import SidePub from "../../components/SidePub";
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

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const navigation = useNavigate();
  const handleClick = () => {
    navigation("/login");
  };

  const GetJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
  };

  useEffect(() => {
    GetJobs();
  }, [jobs]);

  return (
    <div>
      <div className="landing-page">
        <div className="right-side">
          <h1>Welcome to Our Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odio
            tenetur facere sit placeat reprehenderit harum nemo non, eius
            sapiente adipisci fuga odit voluptatem nisi quia officia quasi error
            consectetur.
          </p>
          <Button text="Get Started" onClick={handleClick} />
        </div>
        <div className="left-side">
          <img src={image} alt="Placeholder" />
        </div>
      </div>
      <LandBar />
      <div className="section">
        <h2>
          More Easier to find a job
          <br />
          with our platform
        </h2>
        <p className="link-style">Neuralink-like Personalization </p>
        <p>
          Imagine having a Neuralink-like connection to our platform, where it
          understands your unique talents <br />
          and aspirations. We provide personalized job recommendations that
          align perfectly with your skills
          <br />
          and ambitions, empowering you to reach for the stars in your career.
        </p>
        <div className="box">
          <div className="box-card">
            <img src={applayIMG} alt="item" />
            <div className="content">
              <h3>Easy Applying</h3>
              <p>The process fo applying for job is easy and fast</p>
            </div>
          </div>
          <div className="box-card">
            <img src={BagIMG} alt="item" />
            <div className="content">
              <h3>Many Vacancies</h3>
              <p>There are many job vacancies from various company</p>
            </div>
          </div>
          <div className="box-card">
            <img src={MessageIMG} alt="item" />
            <div className="content">
              <h3>Best Support</h3>
              <p>
                We provide full support for job seeker to achieve better result
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ marginBottom: "1em" }}>Looking for a job now</h2>
      <p>
        Type in the name of the position, company or job category you are
        looking for
      </p>
      <div className="column">
        <SearchBar />
      </div>
      <img
        style={{ width: "100%", marginBlock: "10em 5em" }}
        src={resumeBar}
        alt="resume bar"
      />
      <h2 style={{ marginBottom: "1em" }}>Choose Our Available Jobs</h2>
      <p>Find the following job that suits you and apply now</p>
      <CategoryList categories={categories} />
      <JobBox data={jobs} />
      <a href="#" className="see-more-button">
        See More <FiArrowRight />
      </a>
      <SidePub />
    </div>
  );
};

export default Home;
