import React from "react";
import "./NavNews.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavNews = () => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer />
      </div>
      <img
        className="logoImg"
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="IconImg"
      />
    </div>
  );
};

export default NavNews;
