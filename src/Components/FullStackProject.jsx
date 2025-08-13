import React from "react";
import "./FullStackProject.css";

const FullStackProject = () => {
  return (
    <>
      {/* Main Heading */}
      <h1 className="fullstack-title">Full Stack Projects</h1>

      {/* Project 1 - The Trinket Bloom */}
      <section className="fullstack-container">
        {/* Left Side */}
        <div className="website-info">
          <h2 className="website-name">The Trinket Bloom</h2>
          <p className="website-description">
            Specializing in handcrafted resin art products, including earrings,
            pendants, and rings. Designed with a focus on aesthetic appeal and
            user-friendly navigation, the website allows customers to browse,
            customize, and purchase unique jewelry pieces.
          </p>

          <div className="architects-row">
            <div className="architect-box">
              <h2 className="frontend-heading">Frontend Architect</h2>
              <ul>
                <li>React.js with reusable components</li>
                <li>Responsive design for all devices</li>
                <li>Integrated with REST APIs</li>
              </ul>
            </div>

            <div className="architect-box">
              <h2 className="backend-heading">Backend Architect</h2>
              <ul>
                <li>Node.js</li>
                <li>Connected with SQLite3 database</li>
                <li>Handles data storage and API endpoints</li>
              </ul>
            </div>
          </div>

          <a
            href="https://thee-trinket-bloom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            Visit Website
          </a>
        </div>

        {/* Right Side - System Architecture Diagram */}
        <div className="right-column">
          <div className="system-architect-container">
            <h3 className="system-architect-heading">System Architect</h3>
            <div className="diagram">
              <div className="box frontend-box">Frontend (React.js)</div>
              <div className="arrow">⬇</div>
              <div className="box backend-box">Backend (Node.js)</div>
              <div className="arrow">⬇</div>
              <div className="box database-box">Database (SQLite3)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project 2 - Performance Measurement Plan */}
      <section className="fullstack-container">
        {/* Left Side */}
        <div className="website-info">
          <h2 className="website-name">Performance Measurement Plan</h2>
          <p className="website-description">
            Developed during my summer internship at Speridian Technologies, PMP
            is a structured framework allowing managers to set goals, track
            employee performance, collect feedback, and schedule reviews. The
            objective was to assess the overall performance of employees within
            the organization, helping improve efficiency and productivity.
          </p>

          <div className="architects-row">
            <div className="architect-box">
              <h2 className="frontend-heading">Frontend Architect</h2>
              <ul>
                <li>Angular with modular components</li>
                <li>Interactive UI for performance tracking</li>
                <li>Responsive design and data visualization</li>
              </ul>
            </div>

            <div className="architect-box">
              <h2 className="backend-heading">Backend Architect</h2>
              <ul>
                <li>Node.js with REST API endpoints</li>
                <li>MySQL for structured data storage</li>
                <li>Handles user uploads and performance records</li>
              </ul>
            </div>
          </div>

          <a
            href="https://your-pmp-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            Visit Website
          </a>
        </div>

        {/* Right Side - System Architecture Diagram */}
        <div className="right-column">
          <div className="system-architect-container">
            <h3 className="system-architect-heading">System Architect</h3>
            <div className="diagram">
              <div className="box frontend-box">Frontend (Angular)</div>
              <div className="arrow">⬇</div>
              <div className="box backend-box">Backend (Node.js)</div>
              <div className="arrow">⬇</div>
              <div className="box database-box">Database (MySQL)</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FullStackProject;
