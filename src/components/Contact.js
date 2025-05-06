import React, { useState } from 'react';
import './Contact.css';
import linkedinlogo from '../images/likedIn.webp';
import githublogo from '../images/githublogo.jpeg';
import maillogo from '../images/maillogo.png';
import calllogo from '../images/calllogo.jpeg';
import emailjs from 'emailjs-com';

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5eaoynf',       // Replace with your service ID
      'template_vin8uyc',      // Replace with your template ID
      e.target,
      '7FEgwJidkW0QNHSfz'      // Replace with your public key
    ).then(
      (result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent.'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        e.target.reset(); // Optional: reset the form HTML
      },
      (error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Oops! Something went wrong. Please try again later.'
        });
      }
    );
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="icon">
              <img src={maillogo} alt="Mail" className="profile-img-placeholder" />
            </div>
            <div className="details">
              <h3>Email</h3>
              <p><a href="mailto:gurumadhavah@gmail.com">gurumadhavah@gmail.com</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src={calllogo} alt="Call" />
            </div>
            <div className="details">
              <h3>Phone</h3>
              <p><a href="tel:+918197076859">+91 8197076859</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src={linkedinlogo} alt="LinkedIn" className="profile-img-placeholder" />
            </div>
            <div className="details">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/gurumadhava-h-58514628b" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <img src={githublogo} alt="GitHub" className="profile-img-placeholder" />
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
