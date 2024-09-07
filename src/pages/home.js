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
          <h2>Hi There</h2>
          <p>
             My name is Arijit Chakma. I am a current third year student Computer Science student at Drexel University. I am passionate about building softwares, AI /ML 
             and Computer Vision and the underlying Mathematics behind those models. For fun, I love going to Gym, eating Ramen, and listening to Audiobooks and Spotify.
          </p>
          <p>
            Currently, I am :
            <ul>
              <li>Looking for a Co-op/Internship for Spring/Summer 2025</li>
              <li>Looking for AI/ML Resarch Projects (Volunteer/Paid)</li>
              <li>Learning about AI/ML and Computer Vision</li>
              <li>Attending Hackathons</li>
              <li>Building cool projects</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
