import React, { useState, useEffect } from 'react';
import '../styles/homepage.css';
import ProfileImage from '../assets/profile.jpg'; 
import { LinkedIn, GitHub, Email, Instagram } from '@mui/icons-material'; 
import DevpostIcon from '../assets/devpost_logo.png'; 
import Footer from '../components/footer';

const phrases = [
  'Software Engineer',
  'Aspiring ML Engineer/Researcher',
  'Prev SWE @Bristol Myers Squibb',
  'Hackathon Competitor'
];

const HomePage = () => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter effect logic
  useEffect(() => {
    const handleTyping = () => {
      const fullText = phrases[loopNum % phrases.length];
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  return (
    <div>
      <div className="homepage-container">
        <div className="overlay">
          <div className="box">
            <h1>Arijit Chakma</h1>
            <p>{currentText}</p> 
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
          <h2>Hi There,</h2>
          <p>
            My name is Arijit Chakma. I am currently a third-year Computer Science student at Drexel University. 
            I am passionate about building software, AI/ML, and Computer Vision, as well as the underlying mathematics behind these models. 
            For fun, I enjoy going to the gym, eating ramen, and listening to audiobooks and Spotify.
          </p>
          <p>
            Currently, I am :
            <ul>
              <li>Looking for a Co-op/Internship for Spring/Summer 2025</li>
              <li>Looking for AI/ML Research Positions (Volunteer/Paid)</li>
              <li>Learning about AI/ML and Computer Vision</li>
              <li>Attending Fall 2024 Classes</li>
              <li>Attending Hackathons @JHU, UPENN</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Social Media Links - Placed after the content section */}
      <div className="social-links-section">
        <p>If you would like to connect with me, <a href='mailto:ac4393@drexel.edu'>email</a> me</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/arijitchakma/" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{ fontSize: 40, color: '#0e76a8' }} />
          </a>
          <a href="https://github.com/arijitchakma79/" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{ fontSize: 40, color: '#333' }} />
          </a>
          <a href="mailto:ac4393@drexel.edu">
            <Email sx={{ fontSize: 40, color: '#D44638' }} />
          </a>
          <a href="https://www.instagram.com/80asfluffshi/" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{ fontSize: 40, color: '#C13584' }} />
          </a>
          <a href="https://devpost.com/arijitchakma79?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
            <img src={DevpostIcon} alt="Devpost" className='devpost-img' />
          </a>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
