import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About E-bookStore</h2>
          <p className="about-text">
            Founded in 2025, Verba has quickly become the premier destination for book lovers around the world.
            Our mission is to connect readers with the books they love and help them discover new favorites.
          </p>
          <p className="about-text">
            We offer a vast collection of e-books across all genres, from bestselling novels to academic textbooks.
            With our user-friendly interface and personalized recommendations, finding your next great read has never been easier.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">📚</div>
              <h3>Vast Library</h3>
              <p>Over 1 million titles across all genres</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Instant Access</h3>
              <p>Download books in seconds and start reading</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Great Value</h3>
              <p>Competitive pricing and regular discounts</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-placeholder"><img src="images/about_image.jpg" alt="Image"/></div>
        </div>
      </div>
    </section>
  );
};

export default About;