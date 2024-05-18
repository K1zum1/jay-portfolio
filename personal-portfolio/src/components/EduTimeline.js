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
          <h3 className="vertical-timeline-element-title">Community College Student</h3>
          <h5 className="vertical-timeline-element-subtitle">Diablo Valley College</h5>
          <p>
            Started my Associate of Science in Computer Engineering <br /><br />
            Became the Google Developers Student Lead after a year <br /><br />
            Completed all required classes with a 4.0 GPA <br />
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
          <h3 className="vertical-timeline-element-title">Undergraduate Student</h3>
          <h5 className="vertical-timeline-element-subtitle">University of California, Berkeley</h5>
          <p>
            Continuing my undergraduate studies in Electrical Engineering & Computer Sciences <br /><br />
            Pursuing a minor in Business Administration <br /><br />
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
