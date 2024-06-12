import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import seti from '../assets/img/seti.jpg';
import nsf from '../assets/img/nsf.png';
import ncsa from '../assets/img/ncsa.png';

export const ExperienceTimeline = () => {
  return (
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
            Contributed to the modification of RADMC-3D, by creating high-fidelity models to simulate wind structures in protoplanetary disk. <br /><br />
            Developed a robust and efficient framework for a model that can be used by the scientific community to analyze JWST data and study protoplanetary disk winds <br /><br />
            Utilized NumPy, Matplotlib, and Python to process and aggregate data, feeding it into the RADMC-3D computation model to produce detailed images of protoplanetary disks.
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
    Helping to protect ACCESS’s CI – a highly complex and heterogeneous environment by managing vulnerabilities, analyzing security log data, and performing security vetting tasks.<br /><br />
    Collaborating on real-world projects, including cybersecurity defense strategies and contributed to the development and monitoring of tech platforms.<br /><br />
    Aiding in the development of an information sharing platform, and enhancing networking performance through the use of perfSONAR and best practices.
  </p>
</VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#8A2BE2', color: '#ffffff' }}
          contentArrowStyle={{ borderRight: '20px solid #8A2BE2' }}
          date="August 2024 - May 2025"
          iconStyle={{ background: '#FFFFFF', color: '#fff' }}
          icon={<img src={nsf} alt="NSF Logo" />}
        >
          <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem' }}>Incoming Cybersecurity Research Intern</h3>
          <h5 className="vertical-timeline-element-subtitle">National Science Foundation</h5>
          <p> To be updated... </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
};