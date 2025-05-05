import React from 'react';
import './Skills.css';
import pythonimg from '../images/python.png';
import javaimg from '../images/java.png';
import cimg from '../images/c.jpeg';
import goimg from '../images/Go.png';
import sqlimg from '../images/sql.webp';

import htmlimg from '../images/htmllogo.png';
import cssimg from '../images/csslogo.png';
import reactimg from '../images/reactlogo.jpeg';
import nodeimg from '../images/nodelogo.jpeg';
import javascriptimg from '../images/javascript.webp';

import tensorflowimg from '../images/tensorflow.png';
import opencvimg from '../images/opencvlogo.webp';
import pythonlibimg from '../images/librariePython.jpeg';

import arduinoimg from '../images/arduinologo.jpeg';
import sensoreimg from '../images/sensorslogo.png';
import esp32img from '../images/esp32logo.jpeg';

import colabimg from '../images/colablogo.jpeg';
import vscodeimg from '../images/vscodelogo.jpeg';
import ideljimg from '../images/ideljlogo.jpeg';
import jupitorimg from '../images/jupiterlogo.jpeg';

import leadershipimg from '../images/leadership.jpeg';
import eventmanageimg from '../images/event.jpeg';
import communicationimg from '../images/communication.jpeg';
import reportbuildingimg from '../images/report.jpeg';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: 'fab fa-python', image :pythonimg , level: 75  },
        { name: 'Java', icon: 'fab fa-java', level: 70, image :javaimg },
        { name: 'C', icon: 'fas fa-code', level: 85 ,image :cimg },
        { name: 'Go', icon: 'fas fa-code', level: 20 ,image :goimg },
        { name: 'SQL', icon: 'fas fa-database', level: 70 ,image: sqlimg }
      ]
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5', level: 90 ,image: htmlimg },
        { name: 'CSS', icon: 'fab fa-css3-alt', level: 85  ,image: cssimg },
        { name: 'React', icon: 'fab fa-react', level: 50  ,image: reactimg },
        { name: 'Node.js', icon: 'fab fa-node-js', level: 20 ,image: nodeimg },
        { name: 'JavaScript', icon: 'fab fa-node-js', level: 55  ,image: javascriptimg }
      ]
    },
    {
      category: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', icon: 'fas fa-brain', level: 65 ,image: tensorflowimg },
        { name: 'OpenCV', icon: 'fas fa-camera', level: 50 ,image: opencvimg },
        { name: 'Python Libraries', icon: 'fas fa-cogs', level: 75 ,image: pythonlibimg }
      ]
    },
    {
      category: 'Hardware & IoT',
      skills: [
        { name: 'Arduino', icon: 'fas fa-microchip', level: 85 ,image: arduinoimg },
        { name: 'Sensors', icon: 'fas fa-satellite-dish', level: 80 ,image:sensoreimg },
        { name: 'ESP32', icon: 'fas fa-wifi', level: 80 ,image: esp32img }
      ]
    },
    {
      category: 'Development Platforms',
      skills: [
        { name: 'Google Colab', icon: 'fas fa-cloud', level: 90 ,image: colabimg },
        { name: 'Jupyter Notebook', icon: 'fas fa-book', level: 85 ,image: jupitorimg },
        { name: 'Visual Studio Code', icon: 'fas fa-code', level: 95 ,image: vscodeimg },
        { name: 'IntelliJ IDEA', icon: 'fas fa-laptop-code', level: 80 ,image: ideljimg },
        { name: 'Arduino IDE', icon: 'fas fa-microchip', level: 95 ,image: arduinoimg }
      ]
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Leadership', icon: 'fas fa-users', level: 85 ,image: leadershipimg },
        { name: 'Communication', icon: 'fas fa-comments', level: 80 ,image: communicationimg },
        { name: 'Report Building', icon: 'fas fa-handshake', level: 85 ,image: reportbuildingimg },
        { name: 'Event Management', icon: 'fas fa-calendar-alt', level: 85 ,image: eventmanageimg }
      ]
    }
  ];

  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div className="skill-item" key={skillIndex}>
                  <div className="skill-icon">
  {skill.image ? (
    <img src={skill.image} alt={skill.name} className="skill-img" />
  ) : (
    <i className={skill.icon}></i>
  )}
</div>

                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-progress-container">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;