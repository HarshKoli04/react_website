import React from 'react';
import './Testimonials.css'; // Import the CSS file for styling

const testimonialsData = [
  {
    name: 'John Doe',
    company: 'ABC Corp',
    quote: 'JGen Tech transformed our business with their innovative solutions. Highly recommend!',
  },
  {
    name: 'Jane Smith',
    company: 'XYZ Ltd',
    quote: 'The team at JGen Tech is incredibly professional and dedicated. Our project was a huge success!',
  },
  {
    name: 'Emily Johnson',
    company: 'Tech Innovations',
    quote: 'Outstanding service and support. JGen Tech delivered beyond our expectations!',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">"{testimonial.quote}"</p>
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.company}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;