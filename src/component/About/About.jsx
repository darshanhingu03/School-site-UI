import React from "react";
import img from "../../assent/images/student.jpg";
import "../../assent/style/About.css";

const About = () => {
  return (
    <div className="about__Container">
      <div className="about__section">
        <div className="about__image">
          <img src={img} style={{ width: "500px" }} alt="student" />
        </div>
        <div className="about__info">
          <span className="about__info-heading">
            Welcome To Our <span className="heading">College</span>
          </span>
          <p className="about__info-details">
            Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the
            Internet.Ipsum generators on the Internet tend to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet.
          </p>
          <button className="about__info-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
