import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import seti from '../assets/img/seti.jpg';
import ncsa from '../assets/img/ncsa.png';
import setibanner from '../assets/img/seti_banner.jpg';
import ncsabanner from '../assets/img/ncsa_banner.jpg';

const colors = ['#3A7BD5', '#29B6F6', '#6DD5FA'];

const ExperienceCard = ({ experience, color, thumbnail }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
      }}
      contentArrowStyle={{ borderRight: `7px solid ${color}` }}
      date={experience.date}
      iconStyle={{ background: '#FFFFFF', color: '#fff' }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.alt} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div
        style={{
          background: '#1a1a1a',
          boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
          border: '5px solid',
          borderImage: `linear-gradient(135deg, ${color}, #FFFFFF) 1`,
          padding: '5px 10px',
          marginBottom: '10px',
          display: 'inline-block',
        }}
        className="rounded-lg text-center"
      >
        <a
          href={experience.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs font-semibold hover:text-gray-200"
        >
          Click here to see more info!
        </a>
      </div>

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
          background: '#1a1a1a',
          boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.07)',
          border: '5px solid',
          borderImage: `linear-gradient(135deg, ${color}, #FFFFFF) 1`,
          padding: '20px',
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
      date: 'January 2024 - June 2024',
      title: 'Computation Intern',
      icon: seti,
      alt: 'SETI Logo',
      thumbnail: setibanner,
      link: 'https://drive.google.com/file/d/1APInVrRmS74qXw3R7hxxOnI1XuLNepGg/view?usp=sharing',
      points: [
        'Spearheaded the development of a highly efficient modeling framework for planetary formation research, leveraging Numpy, Matplotlib, and Python3 to process and generate datasets containing up to 10 million data points.',
        'Utilized the RADMC3D computation model to generate over 50 high-resolution images, significantly aiding SETI scientists in their study of planetary formation processes.',
        'Played a key role in modifying and optimizing the RADMC-3D open-source software, producing high-fidelity models that accurately simulate wind structures in protoplanetary disks, leading to more detailed and dense image outputs for advanced research.',
      ],
    },
    {
      date: 'June 2024 - August 2024',
      title: 'Cybersecurity Engineering Intern',
      icon: ncsa,
      alt: 'NCSA Logo',
      thumbnail: ncsabanner,
      link: 'https://docs.google.com/presentation/d/1N-T8K4B7m-UL9fgLMm3C3ZHH7zhUiaqmIHKVz4kWWCQ/edit?usp=sharing',
      points: [
        'Architected and deployed a robust, open-source tool for aggregating and distributing compromised SSH keys through dynamic key revocation lists, utilizing Express.js, Next.js, PostgreSQL, and Libssh, hosted on Amazon EC2.',
        'Engineered a high-performance fingerprint validation algorithm with advanced regular expressions and ssh-keygen, enabling accurate extraction and validation of various SSH key types, ensuring scalability for large datasets containing compromised keys.',
        'Optimized system performance and scalability, ensuring seamless handling of large-scale data while maintaining stringent cybersecurity standards.',
      ],
    },
    {
      date: 'August 2024 - December 2024',
      title: 'Cybersecurity Analyst Intern',
      icon: ncsa,
      alt: 'NCSA Logo',
      thumbnail: ncsabanner,
      link: 'hi',
      points: [
        'Leading comprehensive vulnerability management initiatives using Qualys and Splunk, implementing advanced threat detection and mitigation strategies to safeguard HIPAA- and CUI-compliant systems, networks, and data.',
        'Conducting meticulous audits of over 100 Service Principals within DNS, service indexes, and Qualys reports, consolidating findings into a structured dataset with over 400 data points to streamline the decommissioning of end-of-life, vulnerable servers.',
        'Developing and enforcing security hardening protocols to enhance the resilience of critical systems and infrastructure, contributing to a more secure and compliant computing environment.',
      ],
    },
  ];

  return (
    <div className="timeline-container">
      <section className="project">
        <h2 className="text-[32px] text-white font-bold mb-8">Relevant Experiences</h2>
      </section>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
            color={colors[index % colors.length]}
            thumbnail={experience.thumbnail}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default ExperienceTimeline;