import React from 'react';
import avatarImg from '../assets/home.png';
import TextChange from '../components/TextChange';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-text">
          <h1 className="home-title">
            Hi, I'm <TextChange />
          </h1>
        <p className="home-description">
          Welcome to my portfolio! I build engaging frontends, manage databases, and create secure backends.
        </p>

        {/* Contact button opens email client */}
        <a href="mailto:your-email@example.com" className="home-button">
          Contact Me
        </a>
      </div>

      {/* Home page image with hover effect */}
      <div className="home-image">
        <img src={avatarImg} alt="Avatar" className="home-image-avatar" />
      </div>
    </div>
  );
};

export default Home;