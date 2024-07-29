import React from 'react';
import Section from '../Section';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Section title="About Me">
      <p>
        I am a Lead Software Engineer specializing in payments, with a strong background in designing, developing, and maintaining secure and scalable payment systems. My expertise includes leading engineering teams, ensuring compliance with industry standards, collaborating with stakeholders to achieve business goals, and driving successful project completion. Additionally, I possess advanced skills in testing, performance optimization, and taking ownership of projects to deliver high-quality solutions.
      </p>
      <h2>Technical Skills</h2>
      <ul>
        <li><strong>Languages:</strong> Java, Typescript, NodeJs, Python, Javascript, Kotlin, SQL, NoSQL (DynamoDB), C, C#, Android Application</li>
        <li><strong>Certification:</strong> AWS Certified Solutions Architect</li>
        <li><strong>Frameworks:</strong> Serverless, Spring Framework, K6, Karate, Cypress, ReactJS, AngularJS, SASS, CSS, HTML</li>
        <li><strong>Tools:</strong> AWS SDK, AWS CDK, SAM, CFT, New Relic, Splunk, Git, Docker, Codefresh, Codeclimate, Jenkins, Sonar</li>
      </ul>
    </Section>
  );
}

export default AboutMe;
