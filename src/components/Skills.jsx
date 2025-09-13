import React from 'react';
import './Skills.css';

const skills = [
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 90 },
  { name: "Tailwind CSS", level: 60 },
  { name: "Git & GitHub", level: 75 },
  { name: "Core Java", level: 70 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-card" key={s.name}>
            <div className="skill-head">
              <h4>{s.name}</h4>
              <span>{s.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${s.level}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

