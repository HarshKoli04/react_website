import React from 'react';
import './CTA.css'; // Import the CSS file for styling

const CTA = () => {
  return (
    <div className="cta-container">
      <h2>Ready to Get Started?</h2>
      <p>Contact us today to discuss your project and see how we can help you succeed!</p>
      <div className="cta-buttons">
        <a href="#contact" className="cta-button primary">Get in Touch</a>
        <a href="#learn-more" className="cta-button secondary">Learn More</a>
      </div>
    </div>
  );
};

export default CTA;