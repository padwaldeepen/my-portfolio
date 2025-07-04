import React, { useState } from 'react';
import { Box, Paper, Typography, Chip, IconButton, Collapse } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Business as BusinessIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import styles from './ExperienceSection.module.scss';

interface TimelineItem {
  id: string;
  type: 'work' | 'education';
  title: string;
  subtitle: string;
  company?: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 'tcs',
    type: 'work',
    title: 'Software Engineer',
    subtitle: 'Full Stack Developer',
    company: 'Tata Consultancy Services Limited (Client: PwC)',
    location: 'Tampa, FL',
    period: 'March 2021 - Present',
    description: [
      'Developed and maintained user-facing features for web applications using ReactJS, JavaScript, TypeScript, and Material UI, enhancing user engagement by 20%.',
      'Optimized web application performance, reducing loading times by 30% and improving user satisfaction.',
      'Managed version control using Git, facilitating seamless collaboration and reducing merge conflicts by 40%.',
      'Developed automated unit and integration tests to ensure high code quality and application stability.',
      'Utilized Jira and Confluence for effective project management, improving team productivity.',
      'Conducted thorough testing and debugging of web APIs using Postman to ensure reliability and uptime.',
      'Created technical documentation and facilitated knowledge transfer sessions to support team members.',
      'Designed and implemented data visualizations and reports using PowerBI to inform data-driven decision-making.',
      'Leveraged AI tools such as GitHub Copilot and Cursor AI to enhance code review processes and optimize development workflows.',
      'Provided mentorship to junior developers to support their growth and improve project delivery.',
    ],
    skills: [
      'ReactJS',
      'TypeScript',
      'Material UI',
      'Git',
      'Jira',
      'Postman',
      'PowerBI',
      'AI Tools',
    ],
    icon: <WorkIcon />,
  },
  {
    id: 'auburn-gra',
    type: 'work',
    title: 'Developer (GRA)',
    subtitle: 'Graduate Research Assistant',
    company: 'Auburn University at Montgomery',
    location: 'Montgomery, AL',
    period: 'September 2018 - May 2020',
    description: [
      'Collaborated on the development of a Python application to efficiently fetch cryptocurrency articles from Reddit, achieving a 50% improvement in data retrieval speed.',
      'Designed and implemented data tables using PyQt5 to display results from an Oracle database, enhancing data accessibility.',
      'Conducted ETL processes for sentiment analysis, maintaining strict quality control for accuracy.',
      'Contributed to the design and architecture of applications with a focus on scalability and maintainability.',
      'Analyzed cryptocurrency trends through sentiment analysis, generating reports that provided insights into market emotions.',
      'Worked with cross-functional teams to align project goals and ensure successful deliverables.',
    ],
    skills: ['Python', 'PyQt5', 'Oracle', 'ETL', 'Sentiment Analysis', 'Data Analysis'],
    icon: <BusinessIcon />,
  },
  {
    id: 'ms-degree',
    type: 'education',
    title: 'Master of Science (M.S.)',
    subtitle: 'Management Information Systems',
    company: 'Auburn University at Montgomery',
    location: 'Montgomery, AL',
    period: '2020',
    description: [
      'Specialized in information systems management and technology integration.',
      'Developed expertise in data analysis, system design, and project management.',
      'Completed research projects focusing on emerging technologies and their business applications.',
    ],
    skills: ['Information Systems', 'Data Analysis', 'Project Management', 'Research'],
    icon: <SchoolIcon />,
  },
  {
    id: 'be-degree',
    type: 'education',
    title: 'Bachelor of Engineering (B.E.)',
    subtitle: 'Information Technology',
    company: 'University of Mumbai',
    location: 'Mumbai, India',
    period: '2016',
    description: [
      'Comprehensive foundation in information technology and software engineering.',
      'Developed strong analytical and problem-solving skills.',
      'Gained practical experience through various programming and system design projects.',
    ],
    skills: ['Information Technology', 'Software Engineering', 'Programming', 'System Design'],
    icon: <SchoolIcon />,
  },
];

const ExperienceSection: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <Box className={styles.experienceContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.timelineContainer}
      >
        <Typography variant="h2" className={styles.sectionTitle}>
          Experience & Education
        </Typography>

        <Typography variant="h6" className={styles.sectionSubtitle}>
          My professional journey and academic background
        </Typography>

        <Box className={styles.timeline}>
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`${styles.timelineItem} ${styles[`timelineItem--${item.type}`]}`}
            >
              <Paper className={styles.timelineCard} elevation={2}>
                <Box className={styles.cardHeader}>
                  <Box className={styles.iconContainer}>{item.icon}</Box>

                  <Box className={styles.headerContent}>
                    <Typography variant="h5" className={styles.itemTitle}>
                      {item.title}
                    </Typography>
                    <Typography variant="h6" className={styles.itemSubtitle}>
                      {item.subtitle}
                    </Typography>
                    {item.company && (
                      <Typography variant="body1" className={styles.company}>
                        {item.company}
                      </Typography>
                    )}

                    <Box className={styles.metaInfo}>
                      <Box className={styles.metaItem}>
                        <LocationIcon className={styles.metaIcon} />
                        <Typography variant="body2">{item.location}</Typography>
                      </Box>
                      <Box className={styles.metaItem}>
                        <CalendarIcon className={styles.metaIcon} />
                        <Typography variant="body2">{item.period}</Typography>
                      </Box>
                    </Box>
                  </Box>

                  <IconButton
                    onClick={() => toggleExpanded(item.id)}
                    className={styles.expandButton}
                    aria-label={expandedItems.has(item.id) ? 'Show less' : 'Show more'}
                  >
                    {expandedItems.has(item.id) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>

                <Collapse in={expandedItems.has(item.id)} timeout="auto">
                  <Box className={styles.cardContent}>
                    <Box className={styles.description}>
                      {item.description.map((desc, descIndex) => (
                        <Typography
                          key={descIndex}
                          variant="body2"
                          className={styles.descriptionItem}
                        >
                          • {desc}
                        </Typography>
                      ))}
                    </Box>

                    {item.skills && (
                      <Box className={styles.skillsContainer}>
                        <Typography variant="h6" className={styles.skillsTitle}>
                          Key Skills & Technologies
                        </Typography>
                        <Box className={styles.skillsList}>
                          {item.skills.map((skill, skillIndex) => (
                            <Chip
                              key={skillIndex}
                              label={skill}
                              className={styles.skillChip}
                              size="small"
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Collapse>
              </Paper>
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default ExperienceSection;
