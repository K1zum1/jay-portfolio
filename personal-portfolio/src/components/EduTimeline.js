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
      <section className='project'><h2>Education & Experiences</h2></section>
    <VerticalTimeline>
      <VerticalTimelineElement
        id="education"
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#007BFF', color: '#fff' }} // Changed to Bootstrap blue
        contentArrowStyle={{ borderRight: '7px solid #007BFF' }}
        date="February 2022 - February 2024"
        iconStyle={{ background: '#007BFF', color: '#fff' }}
        icon={<img src={pan} alt="PANW Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Cybersecurity Bootcamp</h3>
        <h5 className="vertical-timeline-element-subtitle">Palo Alto Networks - Remote </h5>
        <p>
          Simulated breaches in virtual environments <br />
          Proficient in Strata, Prisma, and Cortex automation <br />
          PCCET certified for entry-level cybersecurity per NIST <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#28A745', color: '#fff' }} // Changed to Bootstrap green
        contentArrowStyle={{ borderRight: '7px solid #28A745' }}
        date="September 2022 - May 2024"
        iconStyle={{ background: '#FFC107', color: '#fff' }} // Changed to Bootstrap yellow for icon
        icon={<img src={DVC} alt="DVC Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Community College Student</h3>
        <h5 className="vertical-timeline-element-subtitle">Diablo Valley College - Pleasant Hills, CA </h5>
        <p>
          Started my associates of science in computer engineering <br />
          Became the Google Developers Student Lead after a year <br />
          Completed all required classes with a 4.0 GPA <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#17A2B8', color: '#ffffff' }} // Changed to Bootstrap info blue
        contentArrowStyle={{ borderRight: '7px solid #17A2B8' }}
        date="September 2023 - December 2023"
        iconStyle={{ background: '#FFC107', color: '#fff' }} // Reused Bootstrap yellow for consistency
        icon={<img src={cp} alt="CodePath Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Intermediate Cybersecurity Student</h3>
        <h5 className="vertical-timeline-element-subtitle">CodePath Org - Remote</h5>
        <p>
        SOC operations, incident handling, threat analysis expertise. <br />
        Proficient in endpoint monitoring, log analysis, network security. <br />
        Skilled in threat intelligence sharing with frameworks <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#FFC107', color: '#ffffff' }} // Bootstrap yellow for a bright look
        contentArrowStyle={{ borderRight: '7px solid #FFC107' }}
        date="January 2024 - May 2024"
        iconStyle={{ background: '#28A745', color: '#fff' }} // Bootstrap green for the icon
        icon={<img src={seti} alt="SETI Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Computing Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">SETI Institute - Mountain View, CA</h5>
        <p>
        Contributed to the modification of RADMC3D, an astrophysical tool to compute particle wind models of
        protoplanetary disk formation in new stars. <br />
        Assisted Dr. Gorti in designing a math model to compute density data that can be visualized. <br />
        Utilized Numpy, Matplotlib, and Python3, to process and aggregate data to feed into RADMC3D computation
        model.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#DC3545', color: '#ffffff' }} // Changed to Bootstrap red for contrast
        contentArrowStyle={{ borderRight: '7px solid #DC3545' }}
        date="May 2024 - August 2024"
        iconStyle={{ background: '#17A2B8', color: '#fff' }} // Bootstrap info blue for the icon
        icon={<img src={nsf} alt="NSF Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Cybersecurity Intern</h3>
        <h5 className="vertical-timeline-element-subtitle">National Science Foundation - Reston, VA</h5>
        <p>
          Incoming Step 1/2 Cybersecurity Intern for NSF at Florida International University & University of Illinois Urbana-Champaign <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#6C757D', color: '#fff' }} // Bootstrap secondary grey for a muted finish
        contentArrowStyle={{ borderRight: '7px solid #6C757D' }}
        date="August 2024 - May 2026"
        iconStyle={{ background: '#FFC107', color: '#fff' }} // Bootstrap yellow for the icon, for a pop of color
        icon={<img src={UCB} alt="UCB Logo" />}
      >
        <h3 className="vertical-timeline-element-title">Undergraduate</h3>
        <h5 className="vertical-timeline-element-subtitle">UC Institute - XXX, CA</h5>
        <p>
          On track to transfer to a 4 year institute <br />
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline></div>
  );
};
