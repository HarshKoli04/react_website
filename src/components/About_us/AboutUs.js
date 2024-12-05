import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling
// import teamImage from './path-to-your-team-image.jpg'; // Import your team image

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          JGen Tech is dedicated to innovating solutions in web development, data science, and artificial intelligence. 
          Our mission is to empower businesses through cutting-edge technology and exceptional service. 
          With a team of experts, we strive to deliver results that drive success for our clients.
        </p>
      </div>
      <img src="https://media.istockphoto.com/id/514325215/photo/say-cheese-for-success.jpg?s=612x612&w=0&k=20&c=Lg2vKGMNPEY-VAPxvz0hmSmbqIk-MU-oVEaWikyy7QU=" alt="Our Team" className="team-image" />
    </div>
  );
};

export default AboutUs;