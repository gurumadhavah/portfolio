import React from 'react';
import './Footer.css';
import linkedinlogo from '../images/likedIn.webp';
import githublogo from '../images/githublogo.jpeg';
import maillogo from '../images/maillogo.png';
import calllogo from '../images/calllogo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Gurumadhava H</h3>
          <p>Computer Science & Engineering Student</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="./portfolio">Home</a></li>
            <li><a href="./about">About</a></li>
            <li><a href="./skills">Skills</a></li>
            <li><a href="./projects">Projects</a></li>
            <li><a href="./achievements">Achievements</a></li>
            <li><a href="./contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/gurumadhava-h-58514628b" target="_blank" rel="noopener noreferrer">
            <img src={linkedinlogo} alt="LinkedIn" className="profile-img-placeholder" />
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/guru6685" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} alt="GitHub" className="profile-img-placeholder" />
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:gurumadhavah@gmail.com">
            <img src={maillogo} alt="Mail" className="profile-img-placeholder" />
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:+918197076859">
            <img src={calllogo} alt="Call" className="profile-img-placeholder" />
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Gurumadhava H. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;