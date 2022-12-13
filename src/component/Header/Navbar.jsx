import React from "react";
import SearchSVG from "../../assent/SVG/searchSVG";
import "../../assent/style/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <span className="logo__text">Stoneridge</span>
      </div>
      <div className="navbar__link">
        <ul>
          <li id="unique">Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar__button">
        <div className="login">
          <span>Login</span>
        </div>
        <div className="search">
          <SearchSVG />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
