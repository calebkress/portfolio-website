import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <ul className="nav-list">
          <li><a href="#hero" aria-label="Home">Home</a></li>
          <li><a href="#about" aria-label="About">About</a></li>
          <li><a href="#projects" aria-label="Projects">Projects</a></li>
          <li><a href="#resume" aria-label="Resume">Resume</a></li>
          <li><a href="#contact" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
