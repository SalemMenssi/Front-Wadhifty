import React, { useState, useEffect } from "react";
import "../styles/profile.css";

import notif from "../../Assets/Icons/notification-bing.png";
import avatar from "../../Assets/Images/avatar.jpg";
import Verification from "../../components/Modal/Verification";
import NotificationsModal from "../../components/Modal/NotificationsModal";
import SidePub from "../../components/SidePub";
import Button from "../../components/Button";

import { changeResume, getUserById, updateUser } from "../../Utility/UserAPI";
import { jwtDecode } from "jwt-decode";
import { uploadPDF } from "../../Utility/FilesAPI";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [cv, setCv] = useState(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) throw new Error("No authentication token found");

      const decodedToken = jwtDecode(token);
      const currentId = decodedToken.id;
      const { user } = await getUserById(currentId);

      setUser(user);
      setFormData(user);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!formData) return;

    try {
      await updateUser(formData._id, formData);
      setMessage("Profile updated successfully!");
      fetchUserData();
      setOpen(false);
    } catch (error) {
      console.error("Update error:", error);
      setMessage("Failed to update profile. Try again.");
    }
  };

  // Only open the file dialog
  const handleUpload = () => {
    document.getElementById("cvInput").click();
  };

  // Trigger upload after file selection
  const handleCvChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCv(file);
    document.getElementById("cvInput").value = null; // allow re-selecting the same file

    const formData = new FormData();
    formData.append("pdf", file);

    setUploading(true);
    setMessage("");

    try {
      const token = localStorage.getItem("authToken");
      const decodedToken = jwtDecode(token);
      const currentId = decodedToken.id;

      const response = await uploadPDF(formData);
      await changeResume(currentId, response.file._id);

      const updatedUser = { ...user, resume: response.file };
      await updateUser(currentId, updatedUser);
      setUser(updatedUser);
      setMessage("Upload successful!");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <p>{t("loading-profile")}</p>;

  return (
    <div className="profile">
      <div className="top-profile">
        <div className="info-profile">
          <h4>
            {t("welcome-profile")}, {formData?.fullName || "User"}
          </h4>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
        <span className="notif" onClick={() => setNotificationsOpen(true)}>
          <img src={notif} alt={t("notif-icon")} />
        </span>
      </div>

      <div className="profile-container">
        <div className="bar-liniar"></div>
        <div className="top-profile-container">
          <div className="profile-header">
            <img
              src={avatar}
              alt={t("profile-header")}
              className="profile-img"
            />
            <div className="info-profile">
              <h2>{formData?.fullName}</h2>
              <p>{formData?.email}</p>
            </div>
          </div>
          <div className="form-actions">
            <Button
              text={t("save-changes-profile")}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>

        <form className="profile-form">
          <div className="form-column">
            {[
              { id: "fullName", label: t("full-name-profile") },
              { id: "username", label: t("nickname-profile") },
              { id: "phoneNumber", label: t("phone-number-profile") },
              { id: "country", label: t("country-profile") },
            ].map(({ id, label }) => (
              <div className="form-group" key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  type="text"
                  id={id}
                  name={id}
                  value={formData?.[id] || ""}
                  onChange={handleChange}
                  placeholder={label}
                />
              </div>
            ))}
          </div>

          <div className="form-column">
            {[
              { id: "language", label: t("language-profile") },
              { id: "speciality", label: t("speciality-profile") },
              { id: "email", label: t("email-profile") },
              {
                id: "newPassword",
                label: t("new-password-profile"),
                type: "password",
              },
            ].map(({ id, label, type = "text" }) => (
              <div className="form-group" key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  value={formData?.[id] || ""}
                  onChange={handleChange}
                  placeholder={label}
                />
              </div>
            ))}
          </div>
        </form>

        <div className="bottom-profile">
          <div className="form-actions">
            <Button
              text={
                formData?.resume
                  ? t("update-resume-profile")
                  : t("upload-resume-profile")
              }
              onClick={handleUpload}
            />
            <input
              type="file"
              id="cvInput"
              style={{ display: "none" }}
              onChange={handleCvChange}
              accept="application/pdf"
            />
          </div>
          {cv && (
            <div className="cv-details">
              <p>
                {t("uploaded-cv-profile")}: {cv.name}
              </p>
            </div>
          )}
          {message && <p className="upload-message">{message}</p>}
        </div>
      </div>

      <Verification
        open={open}
        handleClose={() => setOpen(false)}
        handleSave={handleSave}
      />
      <NotificationsModal
        open={notificationsOpen}
        handleClose={() => setNotificationsOpen(false)}
      />
      <SidePub />
    </div>
  );
};

export default Profile;
