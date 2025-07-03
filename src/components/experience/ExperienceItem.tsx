import React from 'react';
import styles from './ExperienceItem.module.scss';

export interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  techStack: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  period,
  description,
  techStack,
}) => (
  <li
    className={
      styles['experienceItem'] +
      ' bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col gap-2'
    }
    aria-label={`Experience at ${company}`}
    tabIndex={0}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{role}</h3>
      <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
    </div>
    <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium">{company}</h4>
    <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
    <ul className="flex flex-wrap gap-2 mt-2" aria-label="Tech stack">
      {techStack.map((tech) => (
        <li
          key={tech}
          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded text-xs font-medium"
        >
          {tech}
        </li>
      ))}
    </ul>
  </li>
);

export default ExperienceItem;
