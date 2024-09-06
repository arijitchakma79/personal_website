// src/pages/HomePage.js
import React from 'react';
import '../styles/homepage.css';
import ProfileImage from '../assets/profile.jpg'; 

const HomePage = () => {
  return (
    <div>
      <div className="homepage-container">
        <div className="overlay">
          <div className="box">
            <h1>Arijit Chakma</h1>
            <p>Loves Building Softwares</p>
          </div>
        </div>
      </div>

      {/* Two-column layout for profile and bio */}
      <div className="content-section">
        {/* Left section for profile picture */}
        <div className="profile-section">
          <img src={ProfileImage} alt="Profile" />
        </div>

        {/* Right section for bio */}
        <div className="bio-section">
          <h2>About Me</h2>
          <p>
            Hi, I'm Arijit Chakma, a passionate software engineer with a love for building scalable
            and efficient software solutions. I have experience in various programming languages
            and enjoy solving complex problems.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, reading, or engaging
            in outdoor activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
