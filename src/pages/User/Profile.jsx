import React, { useState } from "react";
import "../styles/profile.css";

import notif from "../../Assets/Icons/notification-bing.png";
import avatar from "../../Assets/Images/avatar.jpg";
import Verification from "../../components/Modal/Verification";
import NotificationsModal from "../../components/Modal/NotificationsModal";
import SidePub from "../../components/SidePub";
import Button from "../../components/Button";
import { useEffect } from "react";
import { changeResume, getUserById, updateUser } from "../../Utility/UserAPI";
import { jwtDecode } from "jwt-decode";
import { uploadPDF } from "../../Utility/FilesAPI";

const Profile = () => {
  const profile = {
    fullName: "Amanda Smith",
    nickname: "Mandy",
    phoneNumber: "123-456-7890",
    country: "USA",
    language: "English",
    speciality: "Software Engineering",
    email: "amanda.smith@example.com",
    newPassword: "",
  };
  const [currentUsers, setCurrentUsers] = useState({});
  const [formData, setFormData] = useState(null);
  const [open, setOpen] = useState(false);
  const [cv, setCv] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    await updateUser(formData._id, formData);
    console.log("Changes saved:", formData);
    await getCurrent();
    handleClose();
  };

  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };
  const handleUpload = async () => {
    document.getElementById("cvInput").click();

    const formData = new FormData();
    formData.append("pdf", cv); // Ensure the key matches the backend's expected field name

    setUploading(true);
    setMessage("");
    const token = await localStorage.getItem("authToken");
    const decodedToken = jwtDecode(token);
    const currentId = decodedToken.id;
    try {
      const response = await uploadPDF(formData);
      await changeResume(currentId, response.file._id);
      setMessage("Upload successful!");
      console.log("Upload response:", response);
    } catch (error) {
      setMessage("Upload failed. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleOpenNotifications = () => setNotificationsOpen(true);
  const handleCloseNotifications = () => setNotificationsOpen(false);

  const getCurrent = async () => {
    const token = localStorage.getItem("authToken");
    const decodedToken = jwtDecode(token);
    const currentId = decodedToken.id;
    const data = await getUserById(currentId);
    setCurrentUsers(data.user);
    setFormData(data.user);
  };

  useEffect(() => {
    getCurrent();
  }, []);

  return (
    <div className="profile">
      <div className="top-profile">
        <div className="info-profile">
          <h4>Welcome, Amanda</h4>
          <p>Tue, 07 June 2022</p>
        </div>
        <span className="notif" onClick={handleOpenNotifications}>
          <img src={notif} alt="notif" />
        </span>
      </div>
      <div className="profile-container">
        <div className="bar-liniar"></div>
        <div className="top-profile-container">
          <div className="profile-header">
            <img src={avatar} alt="Profile" className="profile-img" />
            <div className="info-profile">
              <h2 style={{ textAlign: "justify" }}>
                {formData && formData.fullName}
              </h2>
              <p style={{ textAlign: "justify" }}>
                {formData && formData.email}
              </p>
            </div>
          </div>
          <div className="form-actions">
            <Button text="Save Changes" onClick={handleOpen} />
          </div>
        </div>
        <form className="profile-form">
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData && formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nickname">Nickname</label>
              <input
                type="text"
                id="nickname"
                name="username"
                value={formData && formData.username}
                onChange={handleChange}
                placeholder="Enter your nickname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData && formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData && formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
              />
            </div>
          </div>
          <div className="form-column">
            <div className="form-group">
              <label htmlFor="language">Language</label>
              <input
                type="text"
                id="language"
                name="language"
                value={formData && formData.language}
                onChange={handleChange}
                placeholder="Enter your language"
              />
            </div>
            <div className="form-group">
              <label htmlFor="speciality">Speciality</label>
              <input
                type="text"
                id="speciality"
                name="speciality"
                value={formData && formData.speciality}
                onChange={handleChange}
                placeholder="Enter your speciality"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData && formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData && formData.newPassword}
                onChange={handleChange}
                placeholder="Enter a new password"
              />
            </div>
          </div>
        </form>
        <div className="bottom-profile">
          <div className="form-actions">
            <Button
              text={
                formData && formData.resume ? "Update Resume" : "Upload Resume"
              }
              onClick={handleUpload}
            />

            <input
              type="file"
              id="cvInput"
              style={{ display: "none" }}
              onChange={handleCvChange}
            />
          </div>
          {cv && (
            <div className="cv-details">
              <p>Uploaded CV: {cv.name}</p>
            </div>
          )}
        </div>
      </div>
      <Verification
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
      <NotificationsModal
        open={notificationsOpen}
        handleClose={handleCloseNotifications}
      />
      <SidePub />
    </div>
  );
};

export default Profile;
