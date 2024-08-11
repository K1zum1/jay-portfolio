import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import seti from '../assets/img/seti.jpg';
import ncsa from '../assets/img/ncsa.png';
import setibanner from '../assets/img/seti_banner.jpg';
import ncsabanner from '../assets/img/ncsa_banner.jpg';

const ExperienceCard = ({ experience, thumbnail }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'transparent', boxShadow: 'none', border: 'none' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: '#FFFFFF', color: '#fff' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.alt} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div className="mb-4 rounded-lg flex-grow border-4 border-gray-800">
        <a href={experience.link} target="_blank" rel="noopener noreferrer">
          <img
            src={thumbnail}
            alt={`Thumbnail for ${experience.title}`}
            className="w-full object-contain rounded cursor-pointer"
            title="Click to view my work!"
          />
        </a>
      </div>
    
      <div
        style={{
          background: "#1a1a1a",
          boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.07)",
          border: "2px solid #FF4500",
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
          padding: "20px",  
        }}
        className="rounded-lg flex-grow"
      >
        <h3 className="text-white text-[24px] font-bold mb-2">{experience.title}</h3> 
        <p className="text-white text-[16px] font-semibold mb-4">{experience.company_name}</p> 
        <ul className="list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white text-[14px] pl-1 tracking-wider leading-relaxed" 
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export const ExperienceTimeline = () => {
  const experiences = [
    {
      date: "January 2024 - June 2024",
      title: "Computation Intern",
      icon: seti,
      alt: "SETI Logo",
      thumbnail: setibanner,
      link: "https://drive.google.com/file/d/1APInVrRmS74qXw3R7hxxOnI1XuLNepGg/view?usp=sharing",
      points: [
        "Contributed to the modification of RADMC-3D, creating high-fidelity models to simulate wind structures in protoplanetary disks.",
        "Developed a robust and efficient modeling framework that can be used by the scientific community to analyze JWST data and study protoplanetary disk winds.",
        "Utilized Numpy, Matplotlib, and Python3 to process and aggregate up to 1,000,000 data points to feed into RADMC3D computation model to produce 50+ images."
      ]
    },
    {
      date: "June 2024 - August 2024",
      title: "Cybersecurity Engineering Intern",
      icon: ncsa,
      alt: "NCSA Logo",
      thumbnail: ncsabanner,
      link: "https://docs.google.com/presentation/d/1N-T8K4B7m-UL9fgLMm3C3ZHH7zhUiaqmIHKVz4kWWCQ/edit?usp=sharing",
      points: [
        "Checked the existence of 100+ Service Principals in DNS, service indexes, and Qualys report. Compiled a spreadsheet containing 300+ data points.",
        "Developed a web application using React for the frontend and Node.js with Vercel serverless functions for the backend, enabling secure submission and aggregation of 500+ SSH keys.",
        "Implemented robust client-side validation for SSH key formats and fingerprint extraction using regular expressions and the node-forge library, allowing for 30% faster processing."
      ]
    },
    {
      date: "August 2024 - December 2024",
      title: "Cybersecurity Engineering Intern",
      icon: ncsa,
      alt: "NCSA Logo",
      thumbnail: ncsabanner,
      link: "path_to_your_pdf_or_external_link",
      points: [
        "Incoming Intern"
      ]
    },
  ];

  return (
    <div className="timeline-container">
      <section className="project">
        <h2>Relevant Experiences</h2>
      </section>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            thumbnail={experience.thumbnail}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;
