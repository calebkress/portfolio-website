import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: "HomeScope",
      description: "A machine learning-driven home price prediction application for the Austin, TX area.",
      techStack: ["Python", "Pandas", "numpy", "scikit-learn", "JavaScript", "React", "Bootstrap", "AWS EC2", "AWS Amplify"],
      githubLink: "https://github.com/calebkress/house-price-prediction",
      demoLink: "#"
    },
    {
      name: "WeGo Transportation Solutions",
      description: "A TaaS delivery service for the medical industry utilizing simulated autonomous vehicles.",
      techStack: ["JavaScript", "React", "Python", "Node.js", "MySQL", "MongoDB", "DigitalOcean Droplet"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="project-links">
              {project.githubLink !== '#' && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {project.demoLink !== '#' && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
