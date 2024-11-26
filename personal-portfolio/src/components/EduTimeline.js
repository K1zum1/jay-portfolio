import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import DVC from '../assets/img/dvc.png';
import UCB from '../assets/img/ucb.png';

const colors = ['#9983CF', '#B194D7', '#AC8CD3', '#CEA7E0', '#E5B0DF'];

const EducationCard = ({ education, color }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ 
        background: '#1a1a1a',
        boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
        border: '5px solid',
        borderImage: `linear-gradient(135deg, ${color}, #FFFFFF) 1`,
        padding: '20px',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: `7px solid ${color}` }}
      date={education.date}
      iconStyle={{ background: '#FFFFFF', color: '#fff' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={education.icon} alt={education.alt} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <h3 className="text-white text-[24px] font-bold mb-2">{education.title}</h3>
      <p className="text-white text-[16px] font-semibold mb-4">{education.subtitle}</p>
      <ul className="list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li key={`education-point-${index}`} className="text-white text-[14px] pl-1 tracking-wider leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export const EduTimeline = () => {
  const educationData = [
    {
      date: "September 2022 - May 2024",
      title: "Diablo Valley College",
      subtitle: "Community College Student",
      icon: DVC,
      alt: "DVC Logo",
      points: [
        "Continued my undergraduate studies at DVC due to a sudden relocation from Canada to the US.",
        "Got Involved in many student associations, specifically led the Google Developer Student Club as their GDSC Lead.",
        "Maintained a 4.0 GPA while completing all major prerequisites + recommended classes.",
      ],
    },
    {
      date: "August 2024 - May 2026",
      title: "University of California, Berkeley",
      subtitle: "Undergraduate Student",
      icon: UCB,
      alt: "UCB Logo",
      points: [
        "Pursuing undergraduate studies in Electrical Engineering & Computer Sciences.",
        "Aiming to collaborate with PhD students and professors on cybersecurity research.",
        "Seeking work-study opportunities in information security analysis.",
      ],
    },
  ];

  return (
    <div className="timeline-container" id="Education">
      <section className="project">
        <h2 className="text-[32px] text-white font-bold mb-8">My Education Journey</h2>
      </section>
      <VerticalTimeline>
        {educationData.map((education, index) => (
          <EducationCard key={`education-${index}`} education={education} color={colors[index % colors.length]} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default EduTimeline;