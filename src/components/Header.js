import React from 'react';
import './Header.css';
import logo from '../images/logo.ico';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
    <header className="header">
    <div className="logo">
        <img src={logo} alt="Gurumadhava H" />
    </div>
    <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode}>
        {darkMode ? (
            <i className="fas fa-sun"></i>
        ) : (
            <i className="fas fa-moon"></i>
        )}
        </button>
    </div>
    </header>
);
};

export default Header;