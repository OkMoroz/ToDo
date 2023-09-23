import React from "react";
import "./Header.css";
import Banner from "../../components/Banner/Banner";

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <Banner />
      <h1 className="header">{title}</h1>
    </div>
  );
};

export default Header;
