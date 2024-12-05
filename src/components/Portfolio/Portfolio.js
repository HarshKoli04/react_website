import React from 'react';
import './Portfolio.css'; // Import the CSS file for styling

const portfolioData = [
  {
    image: 'https://pngimg.com/uploads/amazon/amazon_PNG13.png', // Replace with your image paths
    title: 'Project One',
    description: 'A brief description of Project One.',
    link: '#', // Replace with your project link
  },
  {
    image: 'https://static.vecteezy.com/system/resources/previews/013/734/184/original/3d-google-logo-google-is-usa-multinational-corporation-free-vector.jpg',
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    link: '#',
  },
  {
    image: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/10/Meta-Logo.jpeg',
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    link: '#',
  },
  {
    image: 'https://img.etimg.com/thumb/msid-115881982,width-630,resizemode-4,imgsize-72191/infosys-share-price-today-live-updates-02-dec-2024.jpg',
    title: 'Project Four',
    description: 'A brief description of Project Four.',
    link: '#',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Our Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioData.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="portfolio-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;