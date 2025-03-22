import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/contact.css";
import Button from "../../components/Button";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact">
      <h2>{t("contact-title")}</h2>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullName">{t("contact-fullName")}</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder={t("contact-fullName-placeholder")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t("contact-email")}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact-email-placeholder")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">{t("contact-phone")}</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact-phone-placeholder")}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t("contact-message")}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact-message-placeholder")}
              required
            />
          </div>
          <Button text={t("contact-submit")} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
