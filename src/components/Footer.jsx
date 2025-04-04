import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email) {
      setAlertMessage('Please enter your email address.');
    } else if (!isValidEmail(email)) {
      setAlertMessage('Please enter a valid email address.');
    } else {
      setAlertMessage(`Thank you for subscribing! We've sent a confirmation to ${email}`);
      setEmail('');
    }
    
    setShowAlert(true);
    
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <footer className="footer" id='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">E-bookStore</h3>
          <p className="footer-description">
            Your ultimate destination for digital books and reading materials.
            Discover, purchase, and enjoy books from the comfort of your device.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img src="images/portfolio.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/atharv-naik-desai-31b460350/" className="social-icon">
              <img src="images/linkedin.svg" alt="" />
            </a>
            <a href="https://github.com/Atharv-ND" className="social-icon">
              <img src="images/git.svg" alt="Image" />
            </a>
          </div>
        </div> 
        
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Categories</h3>
          <ul className="footer-links">
            <li><a href="#fiction">Fiction</a></li>
            <li><a href="#sci-fi">Science</a></li>
            <li><a href="#history">History</a></li>
            <li><a href="#biography">Biography</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-title">Contact Us</h3>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> Atharv Naik Desai</p>
            <p>23BCE0393</p>
            <p><i className="fas fa-phone"></i> +91 8767101565</p>
            <p><i className="fas fa-envelope"></i> atharvnaikdesai@gmail.com</p>
          </div>
          <div className="newsletter">
            <h4>Subscribe to our Newsletter</h4>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" onClick={handleSubscribe}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Alert*/}
      <div className={`footer-alert ${showAlert ? 'show' : ''}`}>
        <div className="alert-icon">
          <i className={`fas ${!email || !isValidEmail(email) ? 'fa-exclamation-circle' : 'fa-check-circle'}`}></i>
        </div>
        <div className="alert-content">
          <p>{alertMessage}</p>
        </div>
        <button className="alert-close" onClick={() => setShowAlert(false)}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Verba. All Rights Reserved.</p>
        <p>Designed with ❤️ for book lovers</p>
      </div>
    </footer>
  );
};

export default Footer;
