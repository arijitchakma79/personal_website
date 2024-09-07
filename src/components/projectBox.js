import React from 'react';
import '../styles/project.css';

const ProjectBox = ({ name, date, link, description, image, skills }) => {
  return (
    <a href={link} className="project-card-link" target="_blank" rel="noopener noreferrer">
      <div className="project-card">
        {/* Single Image */}
        <div className="project-image">
          <img src={image} alt={`${name} screenshot`} />
        </div>

        <h2 className="project-name">{name}</h2>
        <p className="project-date">Date: {date}</p>
        <p className="project-description">{description}</p>

        {/* Skills */}
        <div className="project-skills">
          <h4>Skills Used:</h4>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;
