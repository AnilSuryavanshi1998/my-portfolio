import React from 'react';
import './Projects.css';

const projectList = [
  {
    name: "My Portfolio Website",
    description: "A simple and responsive portfolio website built using React.js and CSS.",
    link: "https://github.com/AnilSuryavanshi1998/my-portfolio"
  },
  {
    name: "Weather App",
    description: "An app that shows current weather using OpenWeatherMap API. Built with HTML, CSS, and JavaScript.",
    link: "https://github.com/AnilSuryavanshi1998/weather-app"
  },
  {
    name: "Daily Task Tracker",
    description: "A React + Vite app to manage daily tasks with dark mode, priority, drag & drop, search, filter, and progress tracking.",
    link: "https://github.com/AnilSuryavanshi1998/daily-task-tracker",
    demo: "https://daily-task-tracker.vercel.app" // ✅ सही Live Demo link
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (   // ✅ sahi syntax
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

