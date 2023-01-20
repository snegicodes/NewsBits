import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <span className="name">Made with ❤️ by snegicodes</span>
      <div className="iconContainer">
        <a href="https://github.com/snegicodes">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://twitter.com/snegicodes">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/snegicodes/">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
