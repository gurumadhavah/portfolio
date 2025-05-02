import React from 'react';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
    return (
    <header className="header">
    <div className="logo">
        <h1>Gurumadhava H</h1>
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