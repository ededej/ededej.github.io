import React from 'react';
import './Footer.css'; // Create this CSS file for styling

const track = (action, label) => {
  if (window.gtag) window.gtag('event', action, { event_category: 'engagement', event_label: label });
};

const Footer = () => {
  return (
    <footer className="footer">
      <h4>&copy; {new Date().getFullYear()} Ermal Dedej |
      <a href="mailto:dedej33@gmail.com" className="header-email" onClick={() => track('email_click', 'footer')}>Email</a> |
          <a href="https://www.linkedin.com/in/ermal-dedej-3258b2b6/" target="_blank" rel="noopener noreferrer" className="header-linkedin" onClick={() => track('linkedin_click', 'footer')}>LinkedIn</a>
          </h4>
    </footer>
  );
}

export default Footer;
