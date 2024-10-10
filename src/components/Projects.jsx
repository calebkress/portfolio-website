import React from 'react';

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
    <section id="projects">
      <h1>Projects</h1>
      <div>
        {projectList.map((project, index) => (
          <div key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
            <a href={project.githubLink}>GitHub</a> | <a href={project.demoLink}>Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;