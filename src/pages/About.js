import React from 'react';

const About = () => {
  return (
    <div className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
      <div className="main-content">
        <div className="recipes-section">
          <h2>About Tasty Bites</h2>
          <div style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <p style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
              Tasty Bites is a web-based recipe platform developed by a group of Computer Science Engineering students as part of our university learning journey.
            </p>
            <p style={{ marginBottom: '20px' }}>
              The project was created to combine our technical skills with our interest in food and community sharing. 
              It showcases the practical application of web development concepts learned during our coursework — 
              including front-end design, user interactivity, and responsive UI development using React.
            </p>
            <p style={{ marginBottom: '20px' }}>
              Through Tasty Bites, users can explore a collection of recipes, share their own cooking tips, 
              and read community reviews — creating an engaging and collaborative food experience.
            </p>
            <h3 style={{ color: '#4a7c59', marginBottom: '15px' }}>Join Our Community</h3>
            <p>
              We aim to continue expanding this platform by adding more interactive and user-driven features. 
              Share your recipes, contribute ideas, and be part of our growing culinary community!
            </p>
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar-section">
            <h3>Contact Info</h3>
            <p><strong>Email:</strong> hello@tastybites.com</p>
            <p><strong>Follow us:</strong></p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <i className="fab fa-facebook" style={{ fontSize: '1.5rem', color: '#4a7c59' }}></i>
              <i className="fab fa-instagram" style={{ fontSize: '1.5rem', color: '#4a7c59' }}></i>
              <i className="fab fa-pinterest" style={{ fontSize: '1.5rem', color: '#4a7c59' }}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
