import React from 'react';
import '../Experiences.css';
import './CapitalOne.css';

const CapitalOne = () => {
  return (
    <div>
      <h3 className="experience-name">Capital One Bank - McLean, VA</h3>

      <p><strong>Lead Software Engineer <span className="promotion-note">(promoted from Principal)</span>, June 2024 – Present</strong></p>
      <ul>
        <li>Lead backend engineering across three domains (virtual credit cards, auto loan servicing, bank marketing), mentoring teams of up to 5 engineers</li>
        <li>Championed adoption of AI-assisted development tools (Claude AI, Windsurf AI IDE) across the team, training engineers on AI-powered workflows for APIs, infrastructure, and automated test generation</li>
        <li>Led a critical cutover from a legacy third-party system to an internal cloud solution with zero downtime, improving observability and cutting vendor costs 25-30% per day through autoscaling</li>
        <li>Drove merchant integrations and payment flow expansion in virtual cards, and led cloud migration enabling real-time auto loan servicing</li>
      </ul>
      <p><strong>Stack:</strong> Java, Kotlin, Python, Spring Boot, Lambda, Fargate, EC2, DynamoDB, REST APIs, New Relic, Splunk, K6, Karate, Claude AI, Windsurf AI IDE, GitHub Copilot AI, Jenkins</p>

      <p><strong>Principal Software Engineer <span className="promotion-note">(promoted from Senior)</span>, July 2022 – June 2024</strong></p>
      <ul>
        <li>Led development of five new APIs and authored a coding best practices document to ensure maintainability and observability across the team</li>
        <li>Mentored engineers through PR reviews, pair programming, and demos while shaping the technical roadmap with cost-reducing solutions</li>
        <li>Collaborated with UI and backend teams to expand virtual card spending and ease of use</li>
        <li>Won an Organizational Excellence Award for a creative solution impacting millions of customers and significant revenue</li>
      </ul>
      <p><strong>Stack:</strong> Java, Kotlin, Python, Spring Boot, Lambda, Fargate, EC2, DynamoDB, REST APIs, New Relic, Splunk, K6, Karate, GitHub Copilot AI, Jenkins</p>

      <p><strong>Senior Software Engineer, June 2021 – July 2022</strong></p>
      <ul>
        <li>Designed and delivered a high-traffic application (1000 TPS) with low latency for virtual credit cards, removing bottlenecks from the legacy version</li>
        <li>Implemented threading for parallel card checks to maintain performance under load</li>
        <li>Deployed on AWS with scalable containers, reducing costs by 35% during low-traffic periods</li>
        <li>Designed a new DynamoDB schema for low-latency data reuse</li>
      </ul>
      <p><strong>Stack:</strong> Java, Kotlin, Python, Spring Boot, Lambda, Fargate, EC2, DynamoDB, REST APIs, New Relic, Splunk, K6, Karate, GitHub Copilot AI, Jenkins</p>
    </div>
  );
}

export default CapitalOne;
