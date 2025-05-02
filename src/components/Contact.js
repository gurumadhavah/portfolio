import React, { useState } from 'react';
import './Contact.css';
import linkedinlogo from '../images/likedIn.webp';
import githublogo from '../images/githublogo.jpeg';
import maillogo from '../images/maillogo.png';
import calllogo from '../images/calllogo.jpeg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically connect to a backend service
    // For demonstration, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
            <img src={maillogo} alt="Mail" className="profile-img-placeholder" />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="details">
              <h3>Email</h3>
              <p><a href="mailto:gurumadhavah@gmail.com">gurumadhavah@gmail.com</a></p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon">
            <img src={calllogo} alt="Call" />
              <i className="fas fa-phone"></i>
            </div>
            <div className="details">
              <h3>Phone</h3>
              
              <p><a href="tel:+918197076859">+91 8197076859</a></p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon">
            <img src={linkedinlogo} alt="LinkedIn" className="profile-img-placeholder" />
              <i className="fab fa-linkedin"></i>
            </div>
            <div className="details">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/gurumadhava-h-58514628b" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon">
            <img src={githublogo} alt="GitHub" className="profile-img-placeholder" />
              <i className="fab fa-github"></i>
            </div>
            <div className="details">
              <h3>GitHub</h3>
              <p><a href="https://github.com/gurumadhavah" target="_blank" rel="noopener noreferrer">View my repositories</a></p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
            
            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;