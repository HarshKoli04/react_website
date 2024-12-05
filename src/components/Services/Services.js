import React from 'react';
import './Services.css'; // Import the CSS file for styling
import { FaCode, FaChartLine, FaRobot } from 'react-icons/fa'; // Example icons from react-icons

const servicesData = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Building responsive and dynamic websites tailored to your business needs.',
  },
  {
    icon: <FaChartLine />,
    title: 'Data Science',
    description: 'Transforming data into actionable insights through analytics and visualization.',
  },
  {
    icon: <FaRobot />,
    title: 'AI Solutions',
    description: 'Implementing intelligent automation and AI systems to enhance efficiency.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;