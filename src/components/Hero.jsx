import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src="/profile.jpg" alt="Caleb Kress" className="hero-photo" />
        <div className="hero-text">
          <h1>Caleb Kress</h1>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i> Austin, TX
          </p>
          <p>Software Engineer | Machine Learning Enthusiast | Data Scientist</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
