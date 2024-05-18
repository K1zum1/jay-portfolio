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
          <h3 className="vertical-timeline-element-title" style={{ fontSize: '1.5rem' }}>Computing Intern</h3>
          <h5 className="vertical-timeline-element-subtitle">Carl Sagan Center SETI Institute</h5>
          <p>
            Contributed to the modification of RADMC-3D, an astrophysical tool to compute particle wind models of protoplanetary disk formation in new stars. <br /><br />
            Assisted Dr. Gorti in researching and designing an astrophysical math model to compute density data that can be visualized in 2D slices and 3D. <br /><br />
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
          <p>
            Developing and refining machine learning models to predict and identify phishing attempts in real-time, significantly reducing the incidence of successful phishing attacks within the organization.<br /><br />
            Leading the initiative to enhance endpoint security by deploying and configuring advanced Endpoint Detection and Response (EDR) tools across critical network segments.<br /><br />
            Conducting comprehensive security audits and penetration testing to identify vulnerabilities in web applications, resulting in a 30% improvement in web application security posture.
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
};