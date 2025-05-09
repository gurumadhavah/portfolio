import React from 'react';
import { Link } from 'react-router-dom';
import myPhoto from '../images/myphoto.jpg';
import './Home.css';
import Resume from './SoftCopy_of_GURUMADHAVA_H.pdf'


const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="text-content">
          <h1>Hi, I'm Gurumadhava H</h1>
          <h2>Computer Science & Engineering Student</h2>
          <p>
            Passionate about building real-world solutions with a unique blend of software and hardware expertise.
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/gurumadhava-h-58514628b" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/guru6685" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:gurumadhavah@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="cta-buttons">
              <Link to={Resume} target="_blank"
              rel="noopener noreferrer" className="btn-blue">
              View Resume
            </Link>
          </div>
        </div>
        <div className="image-container">
          <div className="profile-img-placeholder">
          <img src={myPhoto} alt="Gurumadhava H" className="profile-img-placeholder" />
            <i className="fas fa-user-circle"></i>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home;