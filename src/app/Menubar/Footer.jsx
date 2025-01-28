import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <div className="column">
            <h4>Features</h4>
            <a href="/">Growth</a>
            <a href="/">Sales</a>
            <a href="/">Chat</a>
          </div>
          <div className="column">
            <h4>Pricing</h4>
            <a href="/">Free Trial</a>
            <a href="/">Standard</a>
            <a href="/">Business</a>
          </div>
          <div className="column">
            <h4>Enterprise</h4>
            <a href="/">Personalize</a>
            <a href="/">Automation</a>
            <a href="/">Invoicing</a>
            <a href="/">24/7 Support</a>
          </div>
          <div className="column">
            <h4>Careers</h4>
            <a href="/">Open Positions</a>
            <a href="/">Part-Time</a>
            <a href="/">Contractual</a>
            <a href="/">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© Copyright 2024. Your Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
