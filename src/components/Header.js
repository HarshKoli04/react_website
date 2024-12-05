import React, { useState } from 'react';
import './Header.css';
import head_logo from "./logo_image/JGen-Tech-LOGO.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo Section */}
        <div className="logo1">
          <a href="/">
            <img className='header_logo' src={head_logo} alt=""></img>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
