import React from 'react';
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Ermal Dedej | 
      <a href="mailto:dedej33@gmail.com" className="header-email">Email</a> |
          <a href="https://www.linkedin.com/in/ermal-dedej-3258b2b6/" target="_blank" rel="noopener noreferrer" className="header-linkedin">LinkedIn</a>
          </p>
    </footer>
  );
}

export default Footer;
