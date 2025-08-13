import React from "react";
import "./SkillCard.css";

const SkillCard = () => {
  return (
    <div className="skills-wrapper">
      <div className="skill-card-container">
        {/* Frontend Card */}
        <div className="card frontend-card">
          <h2 className="frontend-heading">Frontend Expertise</h2>
          <ul className="frontend-skills">
            <li>HTML, CSS & JavaScript</li>
            <li>React & Angular</li>
            <li>Responsive Designs</li>
          </ul>
        </div>

        {/* Backend Card */}
        <div className="card backend-card">
          <h2 className="backend-heading">Backend Expertise</h2>
          <ul className="backend-skills">
            <li>Node.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
