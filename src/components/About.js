import React from 'react';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'B.E in Computer Science',
      institution: 'St. Joseph Engineering College Vamanjoor, Mangaluru',
      period: '2022-2026',
      details: 'CGPA: 9.05'
    },
    {
      degree: 'Pre-University Education',
      institution: 'Poornaprajna PU College Admar, Udupi',
      period: '2020-2022',
      details: 'Percentage: 94.33%'
    }
  ];

  const experience = [
    {
      position: 'Web Development Internship',
      company: 'InternPe',
      period: 'Dec 2023 - Jan 2024',
      description: 'Developed a calculator, e-commerce website, to-do list, and Connect 4 game as part of hands-on web development work',
      technologies: 'HTML, CSS, JavaScript'
    }
  ];

  return (
    <section className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a Computer Science and Engineering student with a unique blend of software and hardware project
            experience, from AI-based applications to Arduino innovations. I'm an award-winning RC aircraft
            enthusiast and active team player with strong leadership, communication, and technical skills.
            I'm passionate about building real-world solutions and continuously exploring new technologies.
          </p>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="period">{edu.period}</p>
                  <p className="details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h3>Experience</h3>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>{exp.position}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="period">{exp.period}</p>
                  <p className="description">{exp.description}</p>
                  <p className="technologies">
                    <strong>Technologies Used:</strong> {exp.technologies}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;