import React from "react";
// import { FaGithub } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {
  const handleGetInTouch = () => {
    alert("📧 Email: hamzarafi773@gmail.com.com");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Let's Build Something Extraordinary</h2>
        <p className="contact-subtext">
          I'm ready to collaborate on exciting projects and transform innovative
          ideas into impactful digital experiences.
        </p>
        <div className="contact-buttons">
          <button className="contact-btn" onClick={handleGetInTouch}>
            Get in Touch
          </button>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            View Resume
          </a>
          <a
            href="https://github.com/hamzee06"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
           <i class="fa-brands fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
