import React from "react";
import JobCard from "./JobCard";
import "./Style.css";
import { FiArrowDown } from "react-icons/fi";

const jobs = [
  {
    company: "Company A",
    location: "New York",
    category: "Software",
    timeSincePosted: "2 days ago",
    description: "A software engineer is needed .",
  },
  {
    company: "Company B",
    location: "San Francisco",
    category: "Design",
    timeSincePosted: "1 week ago",
    description: "We are looking for a talented graphic designer.",
  },
  {
    company: "Company B",
    location: "San Francisco",
    category: "Design",
    timeSincePosted: "1 week ago",
    description: "We are looking for a talented graphic designer.",
  },
  {
    company: "Company A",
    location: "New York",
    category: "Software",
    timeSincePosted: "2 days ago",
    description:
      "A software engineer is needed for developing web applications.",
  },
  {
    company: "Company B",
    location: "San Francisco",
    category: "Design",
    timeSincePosted: "1 week ago",
    description: "We are looking for a talented graphic designer.",
  },
  {
    company: "Company B",
    location: "San Francisco",
    category: "Design",
    timeSincePosted: "1 week ago",
    description: "We are looking for a talented graphic designer.",
  },
  {
    company: "Company A",
    location: "New York",
    category: "Software",
    timeSincePosted: "2 days ago",
    description:
      "A software engineer is needed for developing web applications.",
  },
  {
    company: "Company B",
    location: "San Francisco",
    category: "Design",
    timeSincePosted: "1 week ago",
    description: "We are looking for a talented graphic designer.",
  },
  {
    company: "Company B",
    location: "San Francisco",
    category: "Design",
    timeSincePosted: "1 week ago",
    description: "We are looking for a talented graphic designer.",
  },
];

const JobBox = ({ data }) => {
  return (
    <div className="job-box">
      {data && data.map((job, index) => <JobCard key={job._id} job={job} />)}
    </div>
  );
};

export default JobBox;
