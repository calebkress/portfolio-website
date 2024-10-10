import React from 'react';
import './Resume.css';  

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h1>Resume</h1>
      <p>Download my resume by clicking the link below.</p>
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="resume-button"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
