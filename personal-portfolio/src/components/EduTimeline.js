import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import pan from '../assets/img/pan.png';
import DVC from '../assets/img/dvc.png';
import UCB from '../assets/img/ucb.png';
import cp from '../assets/img/cp.png';
import seti from '../assets/img/seti.jpg';
import nsf from '../assets/img/nsf.png';

export const EduTimeline = () => {
  return (
    <div className="timeline-container">
      <section className='project'><h2>Relevant Experiences</h2></section>
    <VerticalTimeline>
      <VerticalTimelineElement
        id="education"
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#007BFF', color: '#fff' }}
        contentArrowStyle={{ borderRight: '20px solid #007BFF' }}
        date="February 2022 - February 2024"
        iconStyle={{ background: '#007BFF', color: '#fff' }}
        icon={<img src={pan} alt="PANW Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Cybersecurity Bootcamp</h3>
        <h5 className="vertical-timeline-element-subtitle">Palo Alto Networks - Remote </h5>
        <p>
          Simulated breaches in virtual environments <br /><br />
          Proficient in Strata, Prisma, and Cortex automation <br /><br />
          PCCET certified for entry-level cybersecurity per NIST <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#28A745', color: '#fff' }} 
        contentArrowStyle={{ borderRight: '20px solid #28A745' }}
        date="September 2022 - May 2024"
        iconStyle={{ background: '#FFC107', color: '#fff' }} 
        icon={<img src={DVC} alt="DVC Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Community College Student</h3>
        <h5 className="vertical-timeline-element-subtitle">Diablo Valley College - Pleasant Hills, CA </h5>
        <p>
          Started my associates of science in computer engineering <br /><br />
          Became the Google Developers Student Lead after a year <br /><br />
          Completed all required classes with a 4.0 GPA <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#17A2B8', color: '#ffffff' }}
        contentArrowStyle={{ borderRight: '20px solid #17A2B8' }}
        date="September 2023 - December 2023"
        iconStyle={{ background: '#FFC107', color: '#fff' }} 
        icon={<img src={cp} alt="CodePath Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Intermediate Cybersecurity Student</h3>
        <h5 className="vertical-timeline-element-subtitle">CodePath Org - Remote</h5>
        <p>
        SOC operations, incident handling, threat analysis expertise. <br /><br />
        Proficient in endpoint monitoring, log analysis, network security. <br /><br />
        Skilled in threat intelligence sharing with frameworks 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#FFC107', color: '#ffffff' }} 
        contentArrowStyle={{ borderRight: '20px solid #FFC107' }}
        date="January 2024 - May 2024"
        iconStyle={{ background: '#28A745', color: '#fff' }} 
        icon={<img src={seti} alt="SETI Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Computing Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">Carl Sagan Center SETI Institute - Mountain View, CA</h5>
        <p>
        Contributed to the modification of RADMC3D, an astrophysical tool to compute particle wind models of
        protoplanetary disk formation in new stars. <br /><br />
        Assisted Dr. Gorti in designing a math model to compute density data that can be visualized. <br /><br />
        Utilized Numpy, Matplotlib, and Python3, to process and aggregate data to feed into RADMC3D computation
        model.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#DC3545', color: '#ffffff' }} 
        contentArrowStyle={{ borderRight: '20px solid #DC3545' }}
        date="May 2024 - August 2024"
        iconStyle={{ background: '#17A2B8', color: '#fff' }}
        icon={<img src={nsf} alt="NSF Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Incoming Cybersecurity Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">National Center for Supercomputing Applications - Urbana, Il</h5>
        <p>
          Incoming Cybersecurity Engineering Intern at University of Illinois Urbana-Champaign <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#6C757D', color: '#fff' }} 
        contentArrowStyle={{ borderRight: '20px solid #6C757D' }}
        date="August 2024 - May 2026"
        iconStyle={{ background: '#FFC107', color: '#fff' }} 
        icon={<img src={UCB} alt="UCB Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Undergraduate Student</h3>
        <h5 className="vertical-timeline-element-subtitle">University of California, Berkeley - Berkeley, California</h5>
        <p>
          Continuing my undergraduate studies in Electrical Engineering & Computer Sciences 
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline></div>
  );
};
