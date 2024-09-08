import React from 'react';
import '../styles/resume.css'; 
import DrexelLogo from '../assets/resume/drexel_logo.png';
import BMSLogo from '../assets/resume/bms_logo.png';
import DGFLogo from '../assets/resume/dfg.png';
import DrexelAILogo from '../assets/resume/drexel_ai_logo.png';
import Resume from '../assets/resume/resume.pdf';

const ResumePage = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>

      {/* Download Resume Button */}
      <div className="download-button-container">
        <a href={Resume} download className="download-button">
          Download Resume
        </a>
      </div>

      {/* Education Section */}
      <div className="section">
        <h2 className="section-title">Education</h2>
        <div className="education-section">
          <img src={DrexelLogo} alt="Drexel Logo" className="institution-logo" />
          <div className="details-wrapper">
            <div className="education-details">
              <h3>Drexel University</h3>
              <p>BSc in Computer Science | 2027</p>
              <p>Minor in Mathematics</p>
              <div className="concentration-section">
                <p className="concentration-title">Concentration:</p>
                <ul className="concentration-list">
                  <li>Artificial Intelligence & Machine Learning</li>
                  <li>Algorithms & Theory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-section">
          <div className="experience-item">
            <img src={BMSLogo} alt="BMS Logo" className="experience-logo" />
            <div className="details-wrapper">
              <div className="experience-details">
                <h3>Bristol Myers Squibb</h3>
                <p>Software & Cloud Engineer | April 2024 - September 2024</p>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <img src={DGFLogo} alt="DFG Logo" className="experience-logo" />
            <div className="details-wrapper">
              <div className="experience-details">
                <h3>Develop For Good</h3>
                <p>Software Engineer | May 2024 - August 2024</p>
              </div>
            </div>
          </div>

          <div className="experience-item">
            <img src={DrexelAILogo} alt="Drexel AI Logo" className="experience-logo" />
            <div className="details-wrapper">
              <div className="experience-details">
                <h3>Drexel AI</h3>
                <p>Event Coordinator | May 2023 - April 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-section">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>Python</li>
              <li>Go/Golang</li>
              <li>JavaScript (Node.js)</li>
              <li>Typescript</li>
              <li>Java</li>
              <li>C/C++</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Technologies</h3>
            <ul className="skill-list">
              <li>AWS</li>
              <li>LangChain</li>
              <li>React</li>
              <li>React Native</li>
              <li>Express JS</li>
              <li>Flask</li>
              <li>MongoDB</li>
              <li>Git</li>
              <li>PostgresSQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Libraries</h3>
            <ul className="skill-list">
              <li>TensorFlow</li>
              <li>Numpy</li>
              <li>Pandas</li>
              <li>Scikit-learn</li>
              <li>Matplotlib</li>
              <li>OpenCV</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
