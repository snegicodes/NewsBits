import React from "react";
import "./NavNews.css";
import HamburgerDrawer from "../HamburgerDrawer/HamburgerDrawer";

const NavNews = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      <img className="logoImg" src="/Newsbits.png" alt="IconImg" />
    </div>
  );
};

export default NavNews;
