import React from 'react';
import './Header.css';
import profilePicture from '../../assets/image.png'; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={profilePicture} alt="Ermal Dedej" className="header-picture" />
        <div className="header-text">
          <h1 className="header-name">Ermal Dedej</h1>
          <p className="header-title">Lead Software Engineer</p>
        </div>
      </div>
      <div className="header-right">
        <p className="header-contact">
          <a href="mailto:dedej33@gmail.com" className="header-email">dedej33@gmail.com</a>
          <a href="https://www.linkedin.com/in/ermal-dedej-3258b2b6/" target="_blank" rel="noopener noreferrer" className="header-linkedin">LinkedIn</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
