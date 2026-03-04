import React from 'react';
import Section from '../Section';
import './Certifications.css';

const Certifications = () => (
  <Section title="Certifications">
    <div className="cert-card">
      <div className="cert-info">
        <strong>AWS Certified Solutions Architect – Associate</strong>
        <span>Amazon Web Services · Issued November 2021</span>
        <a
          href="https://www.credly.com/badges/00d5de84-a65f-4892-8432-18093827ae96"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-badge-link"
        >
          Verify on Credly ↗
        </a>
      </div>
    </div>
  </Section>
);

export default Certifications;
