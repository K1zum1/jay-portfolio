import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import seti from '../assets/img/seti.jpg';
import ncsa from '../assets/img/ncsa.png';

export const ExperienceTimeline = () => (
  <div className="timeline-container">
    <section className="project">
      <h2>Relevant Experiences</h2>
    </section>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#6495ED', color: '#ffffff' }}
        contentArrowStyle={{ borderRight: '20px solid #6495ED' }}
        date="May 2024 - August 2024"
        iconStyle={{ background: '#FFFFFF', color: '#fff' }}
        icon={<img src={seti} alt="SETI Logo" />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem' }}>Computation Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">SETI Institute</h5>
        <p>
          Contributed to the modification of RADMC-3D, creating high-fidelity models to simulate wind structures in protoplanetary disks.<br /><br />  
          Developed a robust and efficient modeling framework that can be used by the scientific community to analyze
JWST data and study protoplanetary disk winds
<br /><br /> 
          Utilized Numpy, Matplotlib, and Python3, to process and aggregate data to feed into RADMC3D computation
model to produce images
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#6495ED', color: '#ffffff' }}
        contentArrowStyle={{ borderRight: '20px solid #6495ED' }}
        date="May 2024 - August 2024"
        iconStyle={{ background: '#FFFFFF', color: '#fff' }}
        icon={<img src={ncsa} alt="NCSA Logo" />}
      >
        <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem' }}>Cybersecurity Engineering Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">National Center for Supercomputing Applications</h5>
        <p>
          Checked for Service Principals in DNS and service indexes, aggregating data for security purposes. <br /><br /> 
          Developing a web platform using React and Python for submitting and aggregating compromised SSH keys for blacklisting.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);