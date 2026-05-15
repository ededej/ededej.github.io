import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Experiences from './Experiences/Experiences';
import Education from './Education/Education';
import OtherInterests from './OtherInterests/OtherInterests';
import Languages from './Languages/Languages';
import './Content.css';

const Content = () => {
  return (
    <main className="content">
      <AboutMe />
      <Experiences />
      <Education />
      <Languages />
      <OtherInterests />
    </main>
  );
}

export default Content;
