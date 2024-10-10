import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I’m Caleb Kress, a passionate software developer with a strong interest in Machine Learning and Data Science. 
            I love diving deep into code, solving complex problems, and bringing creative solutions to life through technology.
            Whether it's developing intuitive front-end interfaces or architecting back-end solutions, I enjoy every step of the process.
          </p>
          <p>
            I’m currently focused on sharpening my skills in machine learning and artificial intelligence, and I’m excited about 
            the future possibilities of working on projects that merge these fields with real-world applications. I’m always 
            looking for new challenges and opportunities to grow.
          </p>
          <p>
            When I’m not coding, you can find me exploring Austin’s food scene, hiking, or gaming. 
          </p>

          <h2>Technologies I Work With</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <i className="devicon-react-original colored"></i>
              <span>React</span>
            </div>
            <div className="tech-item">
              <i className="devicon-nodejs-plain colored"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <i className="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item">
              <i className="devicon-python-plain colored"></i>
              <span>Python</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
