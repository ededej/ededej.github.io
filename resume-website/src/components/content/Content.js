import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Certifications from './Certifications/Certifications';
import Experiences from './Experiences/Experiences';
import Education from './Education/Education';
import OtherInterests from './OtherInterests/OtherInterests';
import './Content.css';

const Content = () => {
  return (
    <main className="content">
      <AboutMe />
      <Certifications />
      <Experiences />
      <Education />
      <OtherInterests />
    </main>
  );
}

export default Content;
