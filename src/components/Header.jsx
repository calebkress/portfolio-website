import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <ul className="nav-list">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
