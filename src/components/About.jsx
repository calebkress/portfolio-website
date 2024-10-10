import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
            Hi, I’m Caleb Kress, a software engineer with a passion for Machine Learning and Data Science. 
            My journey began studying ancient languages at the University of St. Andrews in Scotland, 
            where I developed a love for structure and problem-solving. After returning to Austin and 
            discovering programming, I quickly realized the parallels between language and code, 
            fueling my transition into software development.
        </p>
        <p>
            With a degree in Computer Science from St. Edward’s University and training from Hack Reactor, 
            I’ve developed a diverse skill set in both web development and data science. I thrive on solving complex 
            problems and building creative solutions—whether through predictive modeling, intuitive front-end 
            interfaces, or robust back-end systems.
        </p>
        <p>
        When I’m not coding, I enjoy exploring Austin’s food scene, hiking, and gaming. 
        I’m always looking for new challenges and opportunities to grow. 
        </p>

        <h2>Technologies I Work With</h2>
        {/* Python section */}
        <div className="tech-group">
          <div className="tech-item">
            <i className="devicon-python-plain colored"></i>
            <span>Python</span>
          </div>
          <div className="tech-item">
            <i className="devicon-pandas-plain-wordmark"></i>
            <span>Pandas</span>
          </div>
          <div className="tech-item">
            <i className="devicon-scikitlearn-plain colored"></i>
            <span>scikit-learn</span>
          </div>
          <div className="tech-item">
            <i className="devicon-numpy-plain colored"></i>
            <span>numpy</span>
          </div>
        </div>
        {/* JavaScript section */}
        <div className="tech-group">
          <div className="tech-item">
            <i className="devicon-javascript-plain colored"></i>
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <i className="devicon-react-plain colored"></i>
            <span>React</span>
          </div>
          <div className="tech-item">
            <i className="devicon-nodejs-plain colored"></i>
            <span>Node.js</span>
          </div>
          <div className="tech-item">
            <i className="devicon-express-original"></i>
            <span>Express.js</span>
          </div>
          <div className="tech-item">
            <i className="devicon-d3js-plain colored"></i>
            <span>D3.js</span>
          </div>
        </div>
        {/* General tech/DBs section */}
        <div className="tech-group">
          <div className="tech-item">
            <i className="devicon-html5-plain colored"></i>
            <span>HTML5</span>
          </div>
          <div className="tech-item">
            <i className="devicon-css3-plain colored"></i>
            <span>CSS3</span>
          </div>
          <div className="tech-item">
            <i className="devicon-bootstrap-plain colored"></i>
            <span>Bootstrap</span>
          </div>
          <div className="tech-item">
            <i className="devicon-mysql-plain colored"></i>
            <span>MySQL</span>
          </div>
          <div className="tech-item">
            <i className="devicon-mongodb-plain colored"></i>
            <span>MongoDB</span>
          </div>
        </div>
        {/* Tools */}
        <div className="tech-group">
          <div className="tech-item">
            <i className="devicon-git-plain colored"></i>
            <span>Git</span>
          </div>
          <div className="tech-item">
            <i className="devicon-github-original"></i>
            <span>Github</span>
          </div>
          <div className="tech-item">
            <i className="devicon-amazonwebservices-plain-wordmark colored"></i>
            <span>AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
