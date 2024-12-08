import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      name: "SentimentAI",
      description: "A sentiment analysis model, trained on the sentiment140 dataset, that analyzes news articles and visualizes sentiment using D3.js.",
      techStack: ["Python", "Pandas", "scikit-learn", "JavaScript", "D3.js", "AWS EC2", "AWS Amplify"],
      githubLink: "https://github.com/calebkress/sentimentAI",
      demoLink: "#",
      screenshot: "/sentimentAI.png",
      date: "September 2024 - "
    },
    {
      name: "HomeScope",
      description: "A machine learning-driven home price prediction application for the Austin, TX area.",
      techStack: ["Python", "Pandas", "numpy", "scikit-learn", "JavaScript", "React", "Bootstrap", "AWS EC2", "AWS Amplify"],
      githubLink: "https://github.com/calebkress/homescope-release",
      demoLink: "https://homescope.homes/",
      screenshot: "/homescopemain.png",
      date: "August 2023 - March 2024"
    },
    {
      name: "WeGo Transportation Solutions",
      description: "A TaaS delivery service for the medical industry utilizing simulated autonomous vehicles.",
      techStack: ["JavaScript", "React", "Python", "Node.js", "MySQL", "MongoDB", "DigitalOcean Droplet"],
      githubLink: "#",
      demoLink: "#",
      screenshot: "/wego.png",
      date: "January 2023 - May 2023"
    },
    {
      name: "dataset.tools",
      description: "An Electron desktop utility for users of the data.world platform.",
      techStack: ["JavaScript", "React", "Node.js", "Express.js", "Electron", "MySQL"],
      githubLink: "https://github.com/PhiDataKappa/dataset.tools",
      demoLink: "#",
      screenshot: "/datasettools.png",
      date: "December 2018 - January 2019"
    },
    {
      name: "Campfire",
      description: "A collaborative storytelling app, where users tell stories through character-limited messages.",
      techStack: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
      githubLink: "https://github.com/Constant-Time/Campfire",
      demoLink: "#",
      screenshot: "/campfire.png",
      date: "November 2018"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            {project.screenshot && (
              <img 
                src={project.screenshot} 
                alt={`Screenshot of ${project.name} project`} 
                className="project-screenshot" 
                loading="lazy"
              />
            )}
            <h2>{project.name}</h2>
            <p className="project-date">{project.date}</p>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <div className="project-links">
              {project.githubLink !== '#' && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.name}`}
                >
                  GitHub
                </a>
              )}
              {project.demoLink !== '#' && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${project.name}`}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
