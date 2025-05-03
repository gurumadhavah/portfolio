import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={toggleNavbar}>
        <span style={{ fontSize: '24px', cursor: 'pointer' }} className={isOpen ? "fas fa-times" : "fas fa-bars"}>&#9776;</span>
          <i ></i>
        </button>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/achievements" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsOpen(false)}>
              Achievements
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;