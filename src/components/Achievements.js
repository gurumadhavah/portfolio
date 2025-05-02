import React from 'react';
import './Achievements.css';
import saeimg from '../images/sae.jpg';
import yuktiimg from '../images/yukthi.jpeg';
import tiaraimg from '../images/tiara.jpg';
import htfimg from '../images/htf.jpg';
import genaiimg from '../images/genai.jpg';
import verteximg from '../images/vertex.jpg';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "SAEISS Drone Development Competition 2025",
      location: "Chennai",
      achievement: "AIR 1",
      description: "Developed the lightest RC aircraft with the highest weight-carrying capacity among 100+ participating teams.",
      icon: "fas fa-trophy",
      image :saeimg
    },
    {
      id: 2,
      title: "Yukthi 2K25",
      location: "VTU Belagavi",
      achievement: "Winners",
      description: "Won the VTU-level aircraft competition, demonstrating superior aerodynamic design and engineering.",
      icon: "fas fa-medal",
      image:yuktiimg
    },
    {
      id: 3,
      title: "Tiara 2K25 - Sky Surge",
      location: "SJEC Mangalore",
      achievement: "1st Runners Up",
      description: "Secured second place in the aircraft design and performance competition.",
      icon: "fas fa-award",
      image:tiaraimg
    },
    {
      id: 4,
      title: "Hack to Future 1.0",
      location: "",
      achievement: "Participant",
      description: "Participated in the hackathon, developing innovative solutions for real-world problems.",
      icon: "fas fa-laptop-code",
      image:htfimg
    },
    {
      id: 5,
      title: "Developing GenAI Apps with Gemini and Streamlit",
      location: "Google Cloud",
      achievement: "Certification",
      description: "Completed specialized training in developing Generative AI applications using Google's Gemini and Streamlit.",
      icon: "fas fa-certificate",
      image:genaiimg
    },
    {
      id: 6,
      title: "Prompt Design in Vertex AI",
      location: "Google",
      achievement: "Certification",
      description: "Certified in designing effective prompts for AI models in Google's Vertex AI platform.",
      icon: "fas fa-certificate",
      image:verteximg
    }
  ];

  return (
    <section className="achievements">
      <h2 className="section-title">Achievements & Certifications</h2>
      
      <div className="achievements-container">
        {achievements.map(achievement => (
          <div className="achievement-card" key={achievement.id}>
            <div className="achievement-icon">
            <img src={achievement.image} alt={achievement.title} />
              <i className={achievement.icon}></i>
            </div>
            <div className="achievement-content">
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-details">
                {achievement.location && <span className="location">{achievement.location}</span>}
                <span className="achievement-badge">{achievement.achievement}</span>
              </div>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;