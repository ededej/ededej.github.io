import React from 'react';
import '../Experiences.css';
import './PyramidSystems.css';

const PyramidSystems = () => {
  return (
    <div>
      <h3 className="experience-name">Pyramid Systems - Fairfax, VA</h3>

      <p><strong>Software Engineer II <span className="promotion-note">(promoted from Software Engineer I)</span>, June 2018 – Apr 2019</strong></p>
      <ul>
        <li>Collaborated with team leads and business analysts to define and deliver development requirements</li>
        <li>Mentored new team members during onboarding to accelerate their ramp-up on active projects</li>
        <li>Participated across all software phases: requirements, design, implementation, deployment, and testing</li>
      </ul>

      <p><strong>Software Engineer I, June 2017 – June 2018</strong></p>
      <ul>
        <li>Developed features and maintained microservices for USCIS's National Appointments Scheduling application</li>
        <li>Transitioned the application to a more robust microservice architecture</li>
        <li>Improved scheduling efficiency with a new load-balancing algorithm</li>
        <li>Implemented a scheduler calendar feature for user clarity and demonstration</li>
      </ul>
      <p><strong>Stack:</strong> Java, JUnit, Spring Boot, SQL, AWS EC2 microservices, AngularJS, JavaScript, Git</p>
    </div>
  );
}

export default PyramidSystems;
