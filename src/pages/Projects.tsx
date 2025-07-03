import React from 'react';
import ComingSoonBox from '@components/shared/coming-soon-box/ComingSoonBox';
import styles from '@components/projects/ProjectCard.module.scss';

// Project type for strict typing
interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS, and SCSS modules.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'SCSS'],
    githubUrl: 'https://github.com/padwaldeepen/portfolio',
    liveDemoUrl: 'https://deepen.dev',
  },
  {
    title: 'Task Manager API',
    description:
      'A RESTful API for managing tasks, built with Node.js, Express, and MongoDB. Includes JWT authentication.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/padwaldeepen/task-manager-api',
    liveDemoUrl: 'https://taskapi.deepen.dev',
  },
  {
    title: 'Data Visualization Dashboard',
    description:
      'Interactive dashboard for visualizing business data using React and Framer Motion.',
    techStack: ['React', 'Framer Motion'],
    githubUrl: 'https://github.com/padwaldeepen/data-viz-dashboard',
    liveDemoUrl: 'https://dataviz.deepen.dev',
  },
];

/**
 * Projects page: displays a responsive grid of project cards.
 * Accessible, modular, and strictly typed.
 */
const Projects: React.FC = () => (
  <section
    className={styles['projectsSection'] + ' py-16 px-4 max-w-6xl mx-auto'}
    aria-label="Projects section"
    data-testid="projects-section"
  >
    <ComingSoonBox
      label="Projects Coming Soon!"
      description="My best work is almost ready to show. Check back soon for awesome projects!"
    />
  </section>
);

export default Projects;
