import { Link } from 'react-router-dom';
import './Footer.css';
import ScrollToTop from './ScrollToTop';

import calllogo from '../images/calllogo.jpeg';
import githublogo from '../images/githublogo.jpeg';
import linkedinlogo from '../images/likedIn.webp';
import maillogo from '../images/maillogo.png';

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
            <ScrollToTop/>
            <li><Link to="/portfolio">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/achievements">Achievements</Link></li>
            <li><Link to="/contact">Contact</Link></li>
</ul>
        </div>
        
        <div className="footer-social">
          <h4>Connect With Me</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/gurumadhavah" target="_blank" rel="noopener noreferrer">
            <img src={linkedinlogo} alt="LinkedIn" className="profile-img-placeholder" />
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/gurumadhavah" target="_blank" rel="noopener noreferrer">
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