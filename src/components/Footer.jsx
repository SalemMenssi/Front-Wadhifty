import React from "react";
import "./footer.css";
import facebook from "../Assets/Icons/Facebook.svg";
import instagram from "../Assets/Icons/instagram.svg";
import linkedin from "../Assets/Icons/linkedin.svg";
import twiter from "../Assets/Icons/twitter.svg";
import youtube from "../Assets/Icons/youtube.svg";

const Footer = () => {
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
                <div className="footer-category-title">Product</div>
                <div className="footer-category-item">Non IT jobs</div>
                <div className="footer-category-item">IT jobs</div>
                <div className="footer-category-item">Job Seekers</div>
                <div className="footer-category-item">Employers</div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-category">
                <div className="footer-category-title">Company</div>
                <div className="footer-category-item">About us</div>
                <div className="footer-category-item">Contact us</div>
                <div className="footer-category-item">Send feedback</div>
                <div className="footer-category-item">HTML Sitemap</div>
                <div className="footer-category-item">XML Sitemap</div>
              </div>
            </div>
            <div className="footer-column">
              <div className="footer-category">
                <div className="footer-category-title">Get in touch</div>
                <div className="footer-contact-item">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b094eb7d1e67323b84df6b4879ba6f1715dc4f7411c2a062984eaaeb0691ea2?"
                    className="footer-contact-icon"
                  />
                  <div className="footer-contact-info">info@foundit.in</div>
                </div>
                <div className="footer-contact-item">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dacb8dcddcf7d70c41fe2ec9e5cab9efdb7d52e24e706f10c65cf5aa09951a6?"
                    className="footer-contact-icon"
                  />
                  <div className="footer-contact-info">
                    Toll No: +91-40-66116611
                    <br />
                  </div>
                </div>
                <div className="footer-contact-item">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d2cc0565e7833f9beb503e24339e75752b50d739474385deaab2e266e0de1cd?"
                    className="footer-contact-icon"
                  />
                  <div className="footer-contact-info">
                    Toll Free No: 1-800-4196666
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-links-small">
        <div className="footer-link-item">Security & fraud</div>
        <div className="footer-link-item">Privacy policy</div>
        <div className="footer-link-item">Terms of Use</div>
        <div className="footer-link-item">Beware of Fraudsters</div>
        <div className="footer-link-item">Be Safe</div>
        <div className="footer-link-item">Complaints</div>
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
