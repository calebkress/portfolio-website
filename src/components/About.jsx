import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
            Hi, I’m Caleb Kress, a passionate software engineer with a strong interest in Machine Learning and Data Science. 
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
