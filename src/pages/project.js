import React from "react";
import ProjectBox from '../components/projectBox'; 
import '../styles/project.css'; 
import projectsData from '../assets/projects.json'

const ProjectsPage = () => {
    return (
      <div>
        <h1>Projects</h1>
        <div className="projects-grid">
          {/* Loop through the JSON data and render a Project component for each item */}
          {projectsData.map((project, index) => (
            <ProjectBox
              key={index} // Provide a unique key for each project
              name={project.name}
              date={project.date}
              link={project.link}
              description={project.description}
              image={project.image}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    );
  };
  
  
  export default ProjectsPage;