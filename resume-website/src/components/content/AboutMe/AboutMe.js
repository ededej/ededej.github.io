import React, { useState, useEffect } from 'react';
import Section from '../Section';
import './AboutMe.css';

const AboutMeModal = ({ onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={onClose}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <p className="modal-warning">⚠️ Warning: reading this may cause excessive hiring enthusiasm.</p>
        <h3 className="modal-title">The Full Story (you asked for it)</h3>
        <p>I'm a software engineer at heart who ended up in leadership because I couldn't stop trying to make the team around me better. Turns out that's a useful instinct.</p>
        <p>My background is backend (distributed systems, high-traffic APIs, cloud infrastructure), but I've touched enough frontend, mobile, and DevOps to have dangerous opinions about all of it. I lean toward backend because that's where the hard, interesting problems live.</p>
        <p>Over 8+ years I've worked across finance, government, and education, which means I've had to care about security, compliance, scale, and user experience all at once. Those constraints make you a better engineer.</p>
        <p>What I actually enjoy: taking messy legacy systems and making them clean, mentoring engineers who are figuring out their craft, and shipping things that work reliably at scale. Less glamorous than it sounds, more satisfying than anything else I've tried.</p>
        <p>I'm open to lead and staff-level roles where the technical problems are hard and the team actually wants to get better.</p>
      </div>
    </div>
  );
};

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section title="About Me">
      <p className="about-tagline">
        Lead engineer who builds teams as well as systems. 8+ years delivering high-scale backend solutions across finance, government, and education.
      </p>
      <p className="about-intro">
        I care about two things equally: writing clean, scalable code and building teams that can do the same without me in the room.
      </p>
      <ul className="about-highlights">
        <li><strong>8+ years</strong> of engineering across finance, government, and education, with the last 4 in <strong>lead roles</strong></li>
        <li><strong>Leads and mentors engineering teams</strong>, drives technical roadmaps, and aligns engineering with business goals</li>
        <li>Deep backend expertise with full-stack range: React, Angular, Android, and more</li>
        <li>Delivered high-traffic APIs, virtual card systems, and scheduling software serving millions of customers</li>
      </ul>

      <button className="about-toggle" onClick={() => { setOpen(true); if (window.gtag) window.gtag('event', 'about_me_expanded', { event_category: 'engagement' }); }}>
        More about me ↗
      </button>

      {open && <AboutMeModal onClose={() => setOpen(false)} />}

      <h2>Technical Skills</h2>
      <div className="skills-section">
        {[
          { category: 'Languages', items: ['Java', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'Kotlin', 'SQL', 'NoSQL', 'C', 'C#', 'Android'] },
          { category: 'Frameworks', items: ['Serverless', 'Spring Framework', 'K6', 'Karate', 'Cypress', 'ReactJS', 'AngularJS', 'SASS', 'CSS'] },
          { category: 'Tools', items: ['AWS SDK', 'AWS CDK', 'SAM', 'CFT', 'New Relic', 'Splunk', 'Git', 'Docker', 'Codefresh', 'CodeClimate', 'Jenkins', 'Sonar', 'Terraform', 'Fargate', 'Lambda', 'EC2 Cloud', 'DynamoDB'] },
          { category: 'AI & Developer Productivity', items: ['Claude AI', 'Windsurf AI IDE', 'GitHub Copilot AI', 'Prompt Engineering', 'AI-Assisted Development & Testing', 'LLM-Powered Code Generation'] },
          { category: 'Certifications', items: ['AWS Certified Solutions Architect – Associate'] },
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
