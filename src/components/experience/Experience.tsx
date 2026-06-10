import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiChevronRight, FiMapPin, FiCalendar } from 'react-icons/fi';
import styles from './Experience.module.scss';

interface ExperienceItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'tcs',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'Full Stack Developer',
    company: 'Tata Consultancy Services (Client: PwC)',
    location: 'Tampa, FL',
    period: 'Mar 2021 - Present',
    current: true,
    highlights: [
      'Developed user-facing features using ReactJS, TypeScript, and Material UI, enhancing user engagement by 20%',
      'Optimized web application performance, reducing loading times by 30%',
      'Leveraged AI tools like GitHub Copilot and Cursor AI to enhance development workflows',
      'Managed version control using Git, reducing merge conflicts by 40%',
      'Created technical documentation and mentored junior developers',
    ],
    skills: ['React', 'TypeScript', 'Material UI', 'Git', 'Jira', 'PowerBI', 'AI Tools'],
  },
  {
    id: 'auburn-gra',
    type: 'work',
    title: 'Developer (GRA)',
    subtitle: 'Graduate Research Assistant',
    company: 'Auburn University at Montgomery',
    location: 'Montgomery, AL',
    period: 'Sep 2018 - May 2020',
    highlights: [
      'Developed Python application to fetch cryptocurrency articles from Reddit with 50% improved data retrieval speed',
      'Designed and implemented data tables using PyQt5 for Oracle database visualization',
      'Conducted ETL processes for sentiment analysis with strict quality control',
      'Analyzed cryptocurrency trends through sentiment analysis, generating market insight reports',
    ],
    skills: ['Python', 'PyQt5', 'Oracle', 'ETL', 'Sentiment Analysis'],
  },
  {
    id: 'ms-degree',
    type: 'education',
    title: 'Master of Science',
    subtitle: 'Management Information Systems',
    company: 'Auburn University at Montgomery',
    location: 'Montgomery, AL',
    period: '2020',
    highlights: [
      'Specialized in information systems management and technology integration',
      'Developed expertise in data analysis, system design, and project management',
      'Completed research projects focusing on emerging technologies',
    ],
    skills: ['Data Analysis', 'System Design', 'Project Management', 'Research'],
  },
  {
    id: 'be-degree',
    type: 'education',
    title: 'Bachelor of Engineering',
    subtitle: 'Information Technology',
    company: 'University of Mumbai',
    location: 'Mumbai, India',
    period: '2016',
    highlights: [
      'Comprehensive foundation in information technology and software engineering',
      'Developed strong analytical and problem-solving skills',
      'Gained practical experience through programming and system design projects',
    ],
    skills: ['Software Engineering', 'Programming', 'System Design'],
  },
];

const Experience: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const activeExperience = experiences.find((exp) => exp.id === activeId);

  return (
    <section id="experience" className={styles.experience}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className={styles.header}>
          <span className={styles.label}>Experience</span>
          <h2 className={styles.title}>
            Where I&apos;ve <span className={styles.highlight}>worked</span>
          </h2>
          <p className={styles.subtitle}>My professional journey and educational background.</p>
        </motion.div>

        {/* Experience Content */}
        <motion.div variants={itemVariants} className={styles.content}>
          {/* Tab List */}
          <div className={styles.tabList}>
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`${styles.tab} ${activeId === exp.id ? styles.active : ''}`}
                onClick={() => setActiveId(exp.id)}
              >
                <span className={styles.tabIcon}>
                  {exp.type === 'work' ? <FiBriefcase /> : <FiBookOpen />}
                </span>
                <span className={styles.tabContent}>
                  <span className={styles.tabTitle}>{exp.company}</span>
                  <span className={styles.tabPeriod}>{exp.period}</span>
                </span>
                <FiChevronRight className={styles.tabArrow} />
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <AnimatePresence mode="wait">
            {activeExperience && (
              <motion.div
                key={activeExperience.id}
                className={styles.panel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.panelHeader}>
                  <div className={styles.panelTitleGroup}>
                    <h3 className={styles.panelTitle}>{activeExperience.title}</h3>
                    <span className={styles.panelSubtitle}>{activeExperience.subtitle}</span>
                  </div>
                  {activeExperience.current && <span className={styles.currentBadge}>Current</span>}
                </div>

                <div className={styles.panelMeta}>
                  <span className={styles.metaItem}>
                    <FiMapPin /> {activeExperience.location}
                  </span>
                  <span className={styles.metaItem}>
                    <FiCalendar /> {activeExperience.period}
                  </span>
                </div>

                <ul className={styles.highlights}>
                  {activeExperience.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                <div className={styles.skills}>
                  {activeExperience.skills.map((skill) => (
                    <span key={skill} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
