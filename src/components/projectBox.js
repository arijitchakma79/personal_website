import React from 'react';
import '../styles/project.css';

const ProjectBox = ({ name, link, description, image }) => {
  return (
    <a href={link} className="project-card-link" target="_blank" rel="noopener noreferrer">
      <div className="project-card">
        {/* Image */}
        <div className="project-image">
          <img src={image} alt={`${name} screenshot`} />
        </div>

        {/* Project Name */}
        <h2 className="project-name">{name}</h2>

        {/* Project Description */}
        <p className="project-description">{description}</p>
      </div>
    </a>
  );
};

export default ProjectBox;
