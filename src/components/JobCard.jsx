import React, { useEffect, useState } from "react";
import "./Style.css";
import locationIcon from "../Assets/Icons/location.png";
import ViewJobDetailsModal from "./Modal/ViewJobDetailsModal";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../Utility/UserAPI";

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);
  const [currentUsers, setCurrentUsers] = useState({});
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getCurrent = async () => {
    try {
      const token = localStorage.getItem("authToken");

      // Ensure the token is valid before decoding
      if (!token || typeof token !== "string" || token.trim() === "") {
        setCurrentUsers({});
        return;
      }

      const decodedToken = jwtDecode(token);
      if (!decodedToken?.id) {
        setCurrentUsers({});
        return;
      }

      const data = await getUserById(decodedToken.id);
      setCurrentUsers(data?.user || {});
    } catch (error) {
      console.error("Error in getCurrent:", error);
      setCurrentUsers({});
    }
  };

  useEffect(() => {
    getCurrent();
  }, []);
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="job-info">
          <p className="job-category">{job.category}</p>
          <p className="location">
            <img src={locationIcon} alt="Location Icon" />
            {job.location}
          </p>
        </div>
      </div>

      <div className="job-details">
        <p className="job-description">{job.description}</p>
      </div>

      <div className="bottom-job-card">
        <p className="job-time">{job.timeSincePosted}</p>
        <button onClick={handleOpen} className="apply-button">
          View Details
        </button>
      </div>

      {/* Modal for Viewing Job Details */}
      {open && (
        <ViewJobDetailsModal
          user={currentUsers}
          open={open}
          handleClose={handleClose}
          job={job}
        />
      )}
    </div>
  );
};

export default JobCard;
