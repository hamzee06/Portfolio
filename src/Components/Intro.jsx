import React from "react";
import "./Intro.css"; // We'll put the styling here

const Intro = () => {
  return (
    <div className="portfolio-section">
      <h1 className="name">
        <span className="gradient-text">Hamza Rafi</span>
      </h1>
      <h2 className="role">Full Stack Developer</h2>
      <p className="description">
        I specialize in building robust and dynamic web applications.
      </p>
      <p className="skills-text">
        Leveraging <span className="html">Html</span>{" "}
        <span className="css">Css</span>{" "}
        <span className="javascript">Javascript</span> for intuitive user
        interfaces, <span className="react">React</span> for powerful frontend
        UI and <span className="django">Node.js framework</span> for
        Scalable backend solutions
      </p>

      <div className="skill-tags">
        <span className="tag html-css">HTML & CSS</span>
        <span className="tag js-react">JavaScript & React & Angular</span>
        <span className="tag Node">Node.js</span>
      </div>
    </div>
  );
};

export default Intro;

