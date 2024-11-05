import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h1 className="footer-title">Contact Me</h1>
          <p className="footer-subtitle">
            Feel free to reach out via email or connect on social media.
          </p>
        </div>
        <ul className="footer-socials">
          <li>
            <a href="mailto:myemail@gmail.com">
              <MdOutlineEmail size={24} /> adamdev94@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Adam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;