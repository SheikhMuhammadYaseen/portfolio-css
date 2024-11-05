import React from 'react';
import AboutImg from '../assets/about.png';

const About: React.FC = () => {
  return (
    <div id="About" className="about-container">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img className="about-image" src={AboutImg} alt="About" />
        <div className="about-details">
          <ul>
            {[
              { title: "Frontend Developer", desc: "Expert in creating dynamic user interfaces with React and TypeScript." },
              { title: "Database Developer", desc: "Experienced in managing and optimizing databases for efficiency and speed." },
              { title: "Backend Developer", desc: "Skilled in building secure and scalable backend APIs." },
            ].map((item, index) => (
              <li key={index} className="about-item">
                <div className="about-text">
                  <h3 className="about-role">{item.title}</h3>
                  <p className="about-description">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;