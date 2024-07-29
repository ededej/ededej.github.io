import React from 'react';
import Section from '../Section';
import CapitalOne from './CapitalOne/CapitalOne';
import Hobsons from './Hobsons/Hobsons';
import PyramidSystems from './PyramidSystems/PyramidSystems';
import SAIC from './SAIC/SAIC';
import './Experiences.css';

const Experiences = () => {
  return (
    <Section title="Experience">
      <CapitalOne />
      <div className="divider" />
      <Hobsons />
      <div className="divider" />
      <PyramidSystems />
      <div className="divider" />
      <SAIC />
    </Section>
  );
}

export default Experiences;
