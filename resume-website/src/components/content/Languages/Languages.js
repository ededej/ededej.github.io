import React from 'react';
import Section from '../Section';
import './Languages.css';

const languages = [
  { name: 'English', level: 'Native / Bilingual' },
  { name: 'Albanian', level: 'Native / Bilingual' },
  { name: 'Italian', level: 'Native / Bilingual' },
  { name: 'Spanish', level: 'Limited Working Proficiency' },
];

const Languages = () => (
  <Section title="Languages">
    <div className="languages-grid">
      {languages.map(({ name, level }) => (
        <div className="language-card" key={name}>
          <strong>{name}</strong>
          <span>{level}</span>
        </div>
      ))}
    </div>
  </Section>
);

export default Languages;
