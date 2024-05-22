import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DVC from '../assets/img/dvc.png';
import UCB from '../assets/img/ucb.png';


export const EduTimeline = () => {
  return (
    <div className="timeline-container" id="Experiences">
      <section className="project">
        <h2>My Education Journey</h2>
      </section>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#6495ED', color: '#fff' }}
          contentArrowStyle={{ borderRight: '20px solid #6495ED' }}
          date="September 2022 - May 2024"
          iconStyle={{ background: '#FFFFFF', color: '#fff' }}
          icon={<img src={DVC} alt="DVC Logo" />}
        >
          <h3 className="vertical-timeline-element-title">Diablo Valley College</h3>
          <h5 className="vertical-timeline-element-subtitle">Community College Student</h5>
          <p>
            Completed an associate of science in Computer Engineering <br /><br />
            Lead the Google Developer Student club as their GDSC Lead <br /><br />
            Completed all major-prerequisite classes, while maintaining a 4.0 GPA <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#6A5ACD', color: '#fff' }}
          contentArrowStyle={{ borderRight: '20px solid #6A5ACD' }}
          date="August 2024 - May 2026"
          iconStyle={{ background: '#FFFFFF', color: '#fff' }}
          icon={<img src={UCB} alt="UCB Logo" />}
        >
          <h3 className="vertical-timeline-element-title">University of California, Berkeley</h3>
          <h5 className="vertical-timeline-element-subtitle">Undergraduate Student</h5>
          <p>
          Continuing undergraduate studies in Electrical Engineering & Computer Sciences<br /><br />
          Hoping to work with PhD and Professors on cybersecurity research <br /><br />
          Looking for work-study jobs related to information security analysis <br />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
