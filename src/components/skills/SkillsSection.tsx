import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaPython,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiAngular,
  SiBootstrap,
  SiPostgresql,
  SiMysql,
  SiAzure,
  SiPowerbi,
  SiHasura,
  SiCypress,
} from 'react-icons/si';
import { TbBrandGraphql, TbBrandAzure } from 'react-icons/tb';
import { MdOutlineCloud, MdOutlineStorage } from 'react-icons/md';
import styles from './SkillsSection.module.scss';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: 'Expert' | 'Proficient' | 'Familiar';
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 'Expert' },
      { name: 'JavaScript', icon: <FaJs />, level: 'Expert' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 'Proficient' },
      { name: 'SQL', icon: <FaDatabase />, level: 'Proficient' },
      { name: 'GraphQL', icon: <TbBrandGraphql />, level: 'Familiar' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'ReactJS', icon: <FaReact />, level: 'Expert' },
      { name: 'Angular', icon: <SiAngular />, level: 'Proficient' },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 'Proficient' },
      { name: 'Material UI', icon: <SiBootstrap />, level: 'Expert' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 'Proficient' },
      { name: 'Express.js', icon: <FaNodeJs />, level: 'Proficient' },
      { name: 'Hasura', icon: <SiHasura />, level: 'Familiar' },
    ],
  },
  {
    title: 'Cloud',
    skills: [
      { name: 'AWS', icon: <FaAws />, level: 'Familiar' },
      { name: 'Azure', icon: <TbBrandAzure />, level: 'Familiar' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Proficient' },
      { name: 'MySQL', icon: <SiMysql />, level: 'Proficient' },
      { name: 'Oracle', icon: <FaDatabase />, level: 'Familiar' },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      { name: 'GitHub Copilot', icon: <MdOutlineCloud />, level: 'Proficient' },
      { name: 'Cursor AI', icon: <MdOutlineCloud />, level: 'Proficient' },
      { name: 'GenAI', icon: <MdOutlineCloud />, level: 'Familiar' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const SkillsSection: React.FC = () => (
  <Box className={styles.skillsContainer}>
    <Typography variant="h2" className={styles.sectionTitle}>
      Skills
    </Typography>
    <Typography variant="h6" className={styles.sectionSubtitle}>
      My technical toolkit and areas of expertise
    </Typography>
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={styles.categoriesGrid}
    >
      {skillCategories.map((cat) => (
        <motion.div key={cat.title} variants={cardVariants} className={styles.categorySection}>
          <Typography variant="h5" className={styles.categoryTitle}>
            {cat.title}
          </Typography>
          <Box className={styles.skillsGrid}>
            {cat.skills.map((skill) => (
              <Paper key={skill.name} className={styles.skillCard} elevation={2}>
                <Box className={styles.iconBox}>{skill.icon}</Box>
                <Typography className={styles.skillName}>{skill.name}</Typography>
                <Chip
                  label={skill.level}
                  className={styles.levelChip}
                  size="small"
                  color={
                    skill.level === 'Expert'
                      ? 'success'
                      : skill.level === 'Proficient'
                        ? 'primary'
                        : 'default'
                  }
                  variant="outlined"
                />
              </Paper>
            ))}
          </Box>
        </motion.div>
      ))}
    </motion.div>
  </Box>
);

export default SkillsSection;
