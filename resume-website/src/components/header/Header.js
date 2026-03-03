import React from 'react';
import './Header.css';
import profilePicture from '../../assets/image.png'; // Adjust the path based on your project structure

const track = (action, label) => {
  if (window.gtag) window.gtag('event', action, { event_category: 'engagement', event_label: label });
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
      <div className="header-left">
        <img src={profilePicture} alt="Ermal Dedej" className="header-picture" />
        <div className="header-text">
          <h1 className="header-name">Ermal Dedej</h1>
          <p className="header-title">Lead Software Engineer</p>
          <span className="open-to-work">● Open to opportunities</span>
        </div>
      </div>
      <div className="header-right">
        <p className="header-contact">
          <a href="mailto:dedej33@gmail.com" className="header-email" onClick={() => track('email_click', 'header')}>dedej33@gmail.com</a>
          <a href="https://www.linkedin.com/in/ermal-dedej-3258b2b6/" target="_blank" rel="noopener noreferrer" className="header-linkedin" onClick={() => track('linkedin_click', 'header')}>LinkedIn</a>
        </p>
      </div>
      </div>
    </header>
  );
}

export default Header;
