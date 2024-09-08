import React from "react";
import ProjectBox from '../components/projectBox'; 
import '../styles/project.css'; 
import projectsData from '../assets/projects.json'
import Footer from "../components/footer";


const ProjectsPage = () => {
    return (
      <div>
       <div className="projects-grid">
          {/* Loop through the JSON data and render a Project component for each item */}
          {projectsData.map((project, index) => (
            <ProjectBox
              key={index} 
              name={project.name}
              date={project.date}
              link={project.link}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  };
  
  
  export default ProjectsPage;