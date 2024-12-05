import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import logo_image from './logo_image/JGen-Tech-LOGO.png'; // Import your logo image

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img src={logo_image} alt="JGen Tech Logo" className="logo" />
        <h1>Innovating Tomorrow with Data and AI</h1>
        <p>Web Development | Data Science | AI Solutions</p>
        <div className="hero-buttons">
          <button className="btn learn-more">Learn More</button>
          <button className="btn get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;