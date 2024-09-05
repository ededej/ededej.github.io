import React from 'react';
import Section from '../Section';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Section title="About Me">
      <p>
        In my soul, I’m an engineer who loves solving problems. My goal? To provide solutions that are easy to implement, with a heavy focus on usability (because who doesn’t love things that work and are easy to use?). I’m a software engineer who uses soft tools to deliver strong results—get it? Soft tools? Strong results? Yeah, I like wordplay :).
      </p>
      <p> 
      By day, I’m a Lead Software Engineer specializing in building secure and scalable backend systems. But hey, I’m not just living in the back end. I’ve dabbled in frontend tech too—React, Angular, Java (Android apps)—you name it, I’ve probably tinkered with it. I like to think of myself as semi-full stack, but definitely leaning toward backend because that’s where the real fun (and magic) happens you know like 1's and 0's.
      </p>
      <p> 
      When I’m not coding(threading) or leading engineering teams, I’m busy collaborating with stakeholders to bring big ideas to life. I make sure projects run smoothly, hit business goals, and get delivered on time. I’ve got a knack for performance optimization, testing, and taking ownership of projects from start to finish—just like a true nerdy superhero.
      </p>
      <p> 
      I’ve worked across industries like finance, education, and government—you name it, I’ve probably helped build something cool. From virtual credit cards and student class progress tracking to... an atomic bomb? (Kidding, it’s government, but something way cooler that doesn’t destroy the world, like scheduling systems for new U.S. citizens). Who knew government could be fun?! And since I’m endlessly curious, I’m always up-to-date on the latest tech trends, keeping everything I touch optimized, secure, and ready for the future.
      </p>
    <h2>Technical Skills</h2><ul>
        <li><strong>Languages:</strong> Java, Typescript, NodeJs, Python, Javascript, Kotlin, SQL, NoSQL (DynamoDB), C, C#, Android Application</li>
        <li><strong>Certification:</strong> AWS Certified Solutions Architect</li>
        <li><strong>Frameworks:</strong> Serverless, Spring Framework, K6, Karate, Cypress, ReactJS, AngularJS, SASS, CSS, HTML</li>
        <li><strong>Tools:</strong> AWS SDK, AWS CDK, SAM, CFT, New Relic, Splunk, Git, Docker, Codefresh, Codeclimate, Jenkins, Sonar</li>
      </ul>
    </Section>
  );
}

export default AboutMe;
