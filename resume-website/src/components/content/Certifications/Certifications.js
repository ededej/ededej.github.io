import React from 'react';
import Section from '../Section';
import './Certifications.css';

const Certifications = () => (
  <Section title="Certifications">
    <div className="cert-card">
      <strong>AWS Certified Solutions Architect – Associate</strong>
      <span className="cert-meta">
        Amazon Web Services · Issued November 2021 ·{' '}
        <a
          href="https://www.credly.com/badges/00d5de84-a65f-4892-8432-18093827ae96"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-badge-link"
        >
          Verify on Credly ↗
        </a>
      </span>
    </div>
  </Section>
);

export default Certifications;
