import React, { memo } from 'react';
import { Box, Typography, Paper, Chip, useTheme } from '@mui/material';
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
  SiNextdotjs,
} from 'react-icons/si';
import { TbBrandGraphql, TbBrandAzure } from 'react-icons/tb';
import { MdOutlineCloud, MdOutlineStorage } from 'react-icons/md';
import styles from './SkillsSection.module.scss';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: 'Expert' | 'Proficient' | 'Familiar';
  trending?: boolean;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Core Skills',
    skills: [
      { name: 'ReactJS', icon: <FaReact />, level: 'Expert' },
      { name: 'TypeScript', icon: <SiTypescript />, level: 'Proficient' },
      { name: 'Node.js', icon: <FaNodeJs />, level: 'Proficient' },
      { name: 'Python', icon: <FaPython />, level: 'Expert' },
      { name: 'GraphQL', icon: <TbBrandGraphql />, level: 'Familiar' },
      { name: 'AWS', icon: <FaAws />, level: 'Familiar' },
      { name: 'GitHub Copilot', icon: <MdOutlineCloud />, level: 'Proficient' },
      { name: 'Material UI', icon: <SiBootstrap />, level: 'Expert' },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 'Proficient' },
      { name: 'Docker', icon: <FaDocker />, level: 'Familiar' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Proficient' },
      { name: 'Azure', icon: <TbBrandAzure />, level: 'Familiar' },
    ],
  },
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

const SkillCard = memo(({ skill, isDark }: { skill: any; isDark: boolean }) => (
  <motion.div
    key={skill.name}
    variants={cardVariants}
    className={styles.skillCardWrapper}
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.97 }}
    tabIndex={0}
    role="button"
    aria-label={skill.name}
  >
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <Box className={styles.iconBox} style={{ color: isDark ? '#fff' : '#10b981' }}>
            {skill.icon}
          </Box>
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
        </div>
        <div className={styles.flipCardBack}>
          <Typography className={styles.skillBackTitle}>{skill.name}</Typography>
          <Typography className={styles.skillBackDesc}>
            {skill.level === 'Expert' && 'Highly experienced and use daily.'}
            {skill.level === 'Proficient' && 'Solid experience, use regularly.'}
            {skill.level === 'Familiar' && 'Used in projects, learning more.'}
          </Typography>
        </div>
      </div>
    </div>
  </motion.div>
));

const SkillsSection: React.FC = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box className={styles.skillsContainer}>
      <Typography variant="h2" className={styles.sectionTitle}>
        <span className={styles.coloredWord}>Skills</span>
      </Typography>
      <Typography variant="h6" className={styles.sectionSubtitle}>
        My technical <span className={styles.coloredWord}>toolkit</span> and areas of{' '}
        <span className={styles.coloredWord}>expertise</span>
      </Typography>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.categoriesGrid}
      >
        {skillCategories[0].skills.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} isDark={isDark} />
        ))}
      </motion.div>
    </Box>
  );
};

export default SkillsSection;
