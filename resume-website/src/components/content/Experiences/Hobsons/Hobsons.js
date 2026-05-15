import React from 'react';
import '../Experiences.css';
import './Hobsons.css';

const Hobsons = () => {
  return (
    <div>
      <h3 className="experience-name">Hobsons - Arlington, VA</h3>

      <p><strong>Senior Software Engineer <span className="promotion-note">(promoted from Software Engineer)</span>, Dec 2019 – June 2021</strong></p>
      <ul>
        <li>Led modernization from a monolithic PHP application to single-responsibility domain services using AWS</li>
        <li>Designed CI/CD pipelines for seamless code delivery from local development to production environments</li>
        <li>Set up microservices embedded within a React application and supported team readiness throughout sprints</li>
        <li>Collaborated with the product team to translate business requirements into technical solutions</li>
      </ul>

      <p><strong>Software Engineer, Apr 2019 – Dec 2019</strong></p>
      <ul>
        <li>Implemented a self-service SAML service for secure authentication and authorization</li>
        <li>Migrated 500,000 users to a new login system</li>
        <li>Migrated from Jenkins CI to Codefresh CI/CD, improving testing and deployment speeds</li>
      </ul>
      <p><strong>Stack:</strong> TypeScript, Node.js, AWS Lambda, DynamoDB, API Gateway, SQL, PHP, React, SAML, New Relic, Splunk, Cypress</p>
    </div>
  );
}

export default Hobsons;
