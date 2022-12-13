import React from "react";
import Navbar from "./Navbar";

import "../../assent/style/Header.css";

const Header = () => {
  return (
    <div className="header__section">
      <Navbar />
      <div className="header__content">
        <h1 className="heading">Stoneridge College</h1>
        <p className="paragraph">
          available, but the majority have suffered alteration in some form, by
          injected humour, <br />
          or r andomised words which don't look even slightly
        </p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default Header;
