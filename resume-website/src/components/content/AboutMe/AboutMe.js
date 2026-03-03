import React from 'react';
import Section from '../Section';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Section title="About Me">
      <p className="about-tagline">
        Backend engineer who loves solving hard problems — and occasionally makes terrible wordplay jokes.
      </p>
      <ul className="about-highlights">
        <li><strong>10+ years</strong> shipping secure, scalable systems across finance, government, and education</li>
        <li>Lead engineer specializing in <strong>backend architecture</strong> — but comfortable across the full stack (React, Angular, Android)</li>
        <li>Delivered high-traffic APIs, virtual card systems, student progress tools, and scheduling software for new U.S. citizens</li>
        <li>Strong on performance, testing, and ownership — from design to production</li>
      </ul>
      <h2>Technical Skills</h2>
      <div className="skills-section">
        {[
          { category: 'Languages', items: ['Java', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'Kotlin', 'SQL', 'NoSQL (DynamoDB)', 'C', 'C#', 'Android'] },
          { category: 'Frameworks', items: ['Serverless', 'Spring Framework', 'K6', 'Karate', 'Cypress', 'ReactJS', 'AngularJS', 'SASS', 'CSS', 'HTML'] },
          { category: 'Tools', items: ['AWS SDK', 'AWS CDK', 'SAM', 'CFT', 'New Relic', 'Splunk', 'Git', 'Docker', 'Codefresh', 'Codeclimate', 'Jenkins', 'Sonar'] },
        ].map(({ category, items }) => (
          <div key={category} className="skills-category">
            <strong className="skills-category-label">{category}</strong>
            <div className="skills-badges">
              {items.map(skill => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default AboutMe;
