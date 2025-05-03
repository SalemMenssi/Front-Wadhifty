import React from "react";
import "./footer.css";
import facebook from "../Assets/Icons/Facebook.svg";
import instagram from "../Assets/Icons/instagram.svg";
import linkedin from "../Assets/Icons/linkedin.svg";
import twiter from "../Assets/Icons/twitter.svg";
import youtube from "../Assets/Icons/youtube.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-title">Wadhifty</div>
          <div className="footer-images">
            <img loading="lazy" src={facebook} className="footer-icon" />
            <img loading="lazy" src={instagram} className="footer-icon" />
            <img loading="lazy" src={linkedin} className="footer-icon" />
            <img loading="lazy" src={twiter} className="footer-icon" />
            <img loading="lazy" src={youtube} className="footer-large-icon" />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-links">
            <div className="footer-column">
              <div className="footer-category">
                <div className="footer-category-title">
                  {t("footer.product")}
                </div>
                <div className="footer-category-item">
                  {t("footer.non_it_jobs")}
                </div>
                <div className="footer-category-item">
                  {t("footer.it_jobs")}
                </div>
                <div className="footer-category-item">
                  {t("footer.job_seekers")}
                </div>
                <div className="footer-category-item">
                  {t("footer.employers")}
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-category">
                <div className="footer-category-title">
                  {t("footer.company")}
                </div>
                <div className="footer-category-item">
                  {t("footer.about_us")}
                </div>
                <div className="footer-category-item">
                  {t("footer.contact_us")}
                </div>
                <div className="footer-category-item">
                  {t("footer.send_feedback")}
                </div>
                <div className="footer-category-item">
                  {t("footer.html_sitemap")}
                </div>
                <div className="footer-category-item">
                  {t("footer.xml_sitemap")}
                </div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-category">
                <div className="footer-category-title">
                  {t("footer.get_in_touch")}
                </div>
                <div className="footer-contact-item">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b094eb7d1e67323b84df6b4879ba6f1715dc4f7411c2a062984eaaeb0691ea2?"
                    className="footer-contact-icon"
                  />
                  <div className="footer-contact-info">
                    contact@wadhifty.com
                  </div>
                </div>
                <div className="footer-contact-item">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dacb8dcddcf7d70c41fe2ec9e5cab9efdb7d52e24e706f10c65cf5aa09951a6?"
                    className="footer-contact-icon"
                  />
                  <div className="footer-contact-info">
                    Toll No: +966 00966545025506
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-links-small">
        <div className="footer-link-item">{t("footer.security_fraud")}</div>
        <div className="footer-link-item">{t("footer.privacy_policy")}</div>
        <div className="footer-link-item">{t("footer.terms_of_use")}</div>
        <div className="footer-link-item">
          {t("footer.beware_of_fraudsters")}
        </div>
        <div className="footer-link-item">{t("footer.be_safe")}</div>
        <div className="footer-link-item">{t("footer.complaints")}</div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e119a446086152cdc92f57f5f7d3e5e8328d54e710f78473cb3bde8cce5c6e01?"
          className="footer-logo"
        />
        <div className="footer-copyright">
          2023 foundit - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
