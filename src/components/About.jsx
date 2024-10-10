import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <img src="/profile.jpg" alt="Caleb Kress" className="about-photo" />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
             Hi, I’m Caleb Kress, a data scientist passionate about using Python and SQL to uncover insights and solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
