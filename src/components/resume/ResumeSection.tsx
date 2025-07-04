import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  IconButton,
  Collapse,
  Button,
  Divider,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Work as WorkIcon,
  School as SchoolIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Business as BusinessIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Download as DownloadIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import styles from './ResumeSection.module.scss';

interface ResumeItem {
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

interface SkillCategory {
  title: string;
  skills: { name: string; level: string; icon: string }[];
}

const resumeData: ResumeItem[] = [
  {
    id: 'current-role',
    type: 'work',
    title: 'Full Stack Developer',
    subtitle: 'Senior Software Engineer',
    company: 'Tech Company',
    location: 'Tampa, FL',
    period: '2020 - Present',
    description: [
      'Developed and maintained full-stack web applications using React, Node.js, and TypeScript.',
      'Led a team of 3 developers in building a customer portal that improved user engagement by 40%.',
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%.',
      'Collaborated with UX designers to create responsive, accessible user interfaces.',
      'Mentored junior developers and conducted code reviews to maintain code quality.',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Docker'],
    icon: <WorkIcon />,
  },
  {
    id: 'previous-role',
    type: 'work',
    title: 'Software Developer',
    subtitle: 'Full Stack Developer',
    company: 'Previous Company',
    location: 'Montgomery, AL',
    period: '2018 - 2020',
    description: [
      'Built RESTful APIs using Express.js and MongoDB for mobile and web applications.',
      'Developed responsive frontend components using React and Material-UI.',
      'Optimized database queries and improved application performance by 30%.',
      'Worked with cross-functional teams to deliver features on time and within scope.',
    ],
    skills: ['Express.js', 'MongoDB', 'React', 'Material-UI', 'REST APIs'],
    icon: <BusinessIcon />,
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
      'Collaborated on the development of a Python application to efficiently fetch cryptocurrency articles from Reddit.',
      'Designed and implemented data tables using PyQt5 to display results from an Oracle database.',
      'Conducted ETL processes for sentiment analysis, maintaining strict quality control.',
      'Analyzed cryptocurrency trends through sentiment analysis, generating insights into market emotions.',
    ],
    skills: ['Python', 'PyQt5', 'Oracle', 'ETL', 'Sentiment Analysis'],
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

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 'Expert', icon: '⚛️' },
      { name: 'TypeScript', level: 'Expert', icon: '📘' },
      { name: 'JavaScript', level: 'Expert', icon: '🟨' },
      { name: 'HTML/CSS', level: 'Expert', icon: '🌐' },
      { name: 'Material-UI', level: 'Proficient', icon: '🎨' },
      { name: 'Tailwind CSS', level: 'Proficient', icon: '🎯' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Expert', icon: '🟢' },
      { name: 'Express.js', level: 'Expert', icon: '🚀' },
      { name: 'Python', level: 'Proficient', icon: '🐍' },
      { name: 'MongoDB', level: 'Proficient', icon: '🍃' },
      { name: 'PostgreSQL', level: 'Intermediate', icon: '🐘' },
      { name: 'REST APIs', level: 'Expert', icon: '🔗' },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 'Expert', icon: '📚' },
      { name: 'Docker', level: 'Proficient', icon: '🐳' },
      { name: 'AWS', level: 'Intermediate', icon: '☁️' },
      { name: 'CI/CD', level: 'Proficient', icon: '🔄' },
      { name: 'Linux', level: 'Intermediate', icon: '🐧' },
      { name: 'Vite', level: 'Proficient', icon: '⚡' },
    ],
  },
];

const ResumeSection: React.FC = () => {
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

  const handleDownload = () => {
    // Create a link to download the PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // PDF should be in public folder
    link.download = 'Deepen_Padwal_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <Box className={styles.resumeContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.resumeContent}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className={styles.header}>
          <Box className={styles.headerContent}>
            <Typography variant="h2" className={styles.name}>
              Deepen Padwal
            </Typography>
            <Typography variant="h4" className={styles.title}>
              Full Stack Developer
            </Typography>
            <Typography variant="body1" className={styles.summary}>
              Passionate full stack developer with 5+ years of experience building modern web
              applications. Specialized in React, Node.js, and TypeScript. Love creating
              user-friendly, scalable solutions and exploring new technologies.
            </Typography>
          </Box>

          <Box className={styles.headerActions}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              onClick={handleDownload}
              className={styles.actionButton}
            >
              Download PDF
            </Button>
          </Box>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className={styles.contactSection}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={styles.contactItem}>
                <EmailIcon className={styles.contactIcon} />
                <Typography variant="body2">padwaldeepen@gmail.com</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={styles.contactItem}>
                <LocationIcon className={styles.contactIcon} />
                <Typography variant="body2">Tampa, FL</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={styles.contactItem}>
                <LinkedInIcon className={styles.contactIcon} />
                <Typography variant="body2">linkedin.com/in/padwaldeepen</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={styles.contactItem}>
                <GitHubIcon className={styles.contactIcon} />
                <Typography variant="body2">github.com/deepenpadwal</Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        <Divider className={styles.divider} />

        {/* Skills Section */}
        <motion.div variants={itemVariants} className={styles.skillsSection}>
          <Typography variant="h3" className={styles.sectionTitle}>
            Skills & Technologies
          </Typography>
          <Box className={styles.skillsGrid}>
            {skillCategories.map((category) => (
              <Paper key={category.title} className={styles.skillCategory} elevation={1}>
                <Typography variant="h5" className={styles.categoryTitle}>
                  {category.title}
                </Typography>
                <Box className={styles.skillsList}>
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      label={`${skill.icon} ${skill.name}`}
                      className={styles.skillChip}
                      color={
                        skill.level === 'Expert'
                          ? 'success'
                          : skill.level === 'Proficient'
                            ? 'primary'
                            : 'default'
                      }
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        </motion.div>

        <Divider className={styles.divider} />

        {/* Experience & Education */}
        <motion.div variants={itemVariants} className={styles.experienceSection}>
          <Typography variant="h3" className={styles.sectionTitle}>
            Experience & Education
          </Typography>
          <Box className={styles.timeline}>
            {resumeData.map((item) => (
              <Paper key={item.id} className={styles.timelineItem} elevation={1}>
                <Box className={styles.itemHeader}>
                  <Box className={styles.itemIcon}>{item.icon}</Box>
                  <Box className={styles.itemContent}>
                    <Typography variant="h5" className={styles.itemTitle}>
                      {item.title}
                    </Typography>
                    <Typography variant="h6" className={styles.itemSubtitle}>
                      {item.subtitle}
                    </Typography>
                    {item.company && (
                      <Typography variant="body1" className={styles.itemCompany}>
                        {item.company}
                      </Typography>
                    )}
                    <Box className={styles.itemMeta}>
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
                  >
                    {expandedItems.has(item.id) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </IconButton>
                </Box>

                <Collapse in={expandedItems.has(item.id)} timeout="auto">
                  <Box className={styles.itemDetails}>
                    <Box className={styles.description}>
                      {item.description.map((desc, index) => (
                        <Typography key={index} variant="body2" className={styles.descriptionItem}>
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
                          {item.skills.map((skill, index) => (
                            <Chip
                              key={index}
                              label={skill}
                              className={styles.skillChip}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Collapse>
              </Paper>
            ))}
          </Box>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default ResumeSection;
