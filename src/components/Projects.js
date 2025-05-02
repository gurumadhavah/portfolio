import React, { useState } from 'react';
import './Projects.css';
import face from '../images/facedetect.png';
import customer from '../images/Customer-Segmentation.jpg';
import lunar from '../images/lunar.jpg';
import quote from '../images/get-quotes-logo.png';
import stopwatch from '../images/stopwatch.jpeg';
import qr from '../images/qr.png';
import accident from '../images/accidentdetection.png';
import home from '../images/smarthomeautomation.jpg';
import irrigation from '../images/irigation.jpeg';
import gesture from '../images/gesturecontrolled.jpg';
import dustbin from "../images/dustbin'.webp";
import pickplace from '../images/pickplace2.webp';
import sudoku from '../images/sudoku.png';
import employee from '../images/employee.webp';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Face Detection System",
      description: "Developed a real-time face detection system using VGG16 architecture.",
      technologies: ["Python", "OpenCV", "TensorFlow"],
      category: "ml",
      period: "Feb 2025 - Present",
      status: "Ongoing",
      image :face
    },
    {
      id: 2,
      title: "Customer Segmentation",
      description: "Implemented customer segmentation analysis using machine learning techniques for targeted marketing.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      category: "ml",
      period: "April 2024 - June 2024",
      status: "Ongoing",
      image :customer
    },
    {
      id: 3,
      title: "Lunar Surface Detection and Analysis",
      description: "AI-based system for detecting and analyzing lunar surface features for space research.",
      technologies: ["Python", "TensorFlow", "Image Processing"],
      category: "ml",
      period: "2024",
      status: "Ongoing",
      image :lunar
    },
   /* {
      id: 4,
      title: "Browser Shooting Game",
      description: "Interactive browser-based shooting game with multiple levels and features.",
      technologies: ["JavaScript", "HTML Canvas", "CSS"],
      image: "browser-game.jpg",
      category: "web",
      period: "2024",
      status: "Ongoing"
    },*/
    {
      id: 5,
      title: "Quotes Website",
      description: "Dynamic website that provides different quotes each time, categorized by themes.",
      technologies: ["React", "Node.js", "API Integration"],
      category: "web",
      period: "2023",
      status: "Completed",
      image :quote
    },
    {
      id: 6,
      title: "Stopwatch App",
      description: "Precision stopwatch application with lap timing functionality.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "web",
      period: "2023",
      status: "Completed",
      image :stopwatch
    },
    {
      id: 7,
      title: "QR Code Generator",
      description: "Web application that generates custom QR codes for various inputs.",
      technologies: ["React", "JavaScript", "QR Library"],
      category: "web",
      period: "2023",
      status: "Completed",
      image :qr
    },
    {
      id: 8,
      title: "Accident Detection System",
      description: "IoT system that detects accidents and sends automatic alerts to emergency contacts.",
      technologies: ["Arduino", "Sensors", "GSM Module"],
      category: "hardware",
      period: "2023",
      status: "Completed",
      image :accident
    },
    {
      id: 9,
      title: "Smart Home Automation",
      description: "Comprehensive home automation system controlling lights, temperature, and security.",
      technologies: ["Arduino", "ESP32", "IoT"],
      category: "hardware",
      period: "2023",
      status: "Completed",
      image :home
    },
    {
      id: 10,
      title: "Gesture Controlled Car",
      description: "RC car that responds to hand gesture commands through sensor integration.",
      technologies: ["Arduino", "Motion Sensors", "Motors"],
      category: "hardware",
      period: "2023",
      status: "Completed",
      image :gesture
    },
    {
      id: 11,
      title: "Smart Irrigation System",
      description: "Automated irrigation system that waters plants based on soil moisture levels.",
      technologies: ["Arduino", "Moisture Sensors", "Pump Control"],
      category: "hardware",
      period: "2023",
      status: "Completed",
      image: irrigation
    },
    {
      id: 12,
      title: "Smart Dustbin",
      description: "Automated dustbin with motion sensing for hands-free operation.",
      technologies: ["Arduino", "Ultrasonic Sensors", "Servo Motors"],
      category: "hardware",
      period: "2022",
      status: "Completed",
      image :dustbin
    },
    {
      id: 13,
      title: "Remote Controlled Pick and Place Machine",
      description: "Robotic arm for picking and placing objects via remote control.",
      technologies: ["Arduino", "Servo Motors", "RF Communication"],
      category: "hardware",
      period: "2022",
      status: "Completed",
      image :pickplace
    },
    {
      id: 14,
      title: "Sudoku Game",
      description: "Interactive Sudoku game with difficulty levels and solving algorithms.",
      technologies: ["Java", "JavaFX", "Algorithms"],
      category: "software",
      period: "2022",
      status: "Completed",
      image :sudoku
    },
    {
      id: 15,
      title: "Employee Database Management",
      description: "System for managing employee records with a user-friendly GUI.",
      technologies: ["Python", "Tkinter", "SQL"],
      category: "software",
      period: "Oct 2024 - Nov 2024",
      status: "Completed",
      image :employee
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''} 
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={filter === 'ml' ? 'active' : ''} 
          onClick={() => setFilter('ml')}
        >
          ML & AI
        </button>
        <button 
          className={filter === 'web' ? 'active' : ''} 
          onClick={() => setFilter('web')}
        >
          Web Development
        </button>
        <button 
          className={filter === 'hardware' ? 'active' : ''} 
          onClick={() => setFilter('hardware')}
        >
          Hardware & IoT
        </button>
        <button 
          className={filter === 'software' ? 'active' : ''} 
          onClick={() => setFilter('software')}
        >
          Software
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-img">
              <div className="img-placeholder">
              <img src={project.image} alt={project.title} className="project-image" />
                <i className={
                  project.category === 'ml' ? 'fas fa-brain' :
                  project.category === 'web' ? 'fas fa-globe' :
                  project.category === 'hardware' ? 'fas fa-microchip' :
                  'fas fa-laptop-code'
                }></i>
              </div>
              <div className="status-badge">
                {project.status}
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-period">{project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span className="tech-badge" key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;