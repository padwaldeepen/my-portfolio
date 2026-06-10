import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiGraphql,
  SiTailwindcss,
  SiOpenai,
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';
import styles from './Skills.module.scss';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: 'Expert' | 'Proficient' | 'Learning';
  category: string;
}

const skills: Skill[] = [
  { name: 'React', icon: <FaReact />, level: 'Expert', category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, level: 'Proficient', category: 'Languages' },
  { name: 'Next.js', icon: <SiNextdotjs />, level: 'Proficient', category: 'Frontend' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 'Proficient', category: 'Backend' },
  { name: 'Python', icon: <FaPython />, level: 'Expert', category: 'Languages' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, level: 'Proficient', category: 'Database' },
  { name: 'GraphQL', icon: <SiGraphql />, level: 'Learning', category: 'API' },
  { name: 'AWS', icon: <FaAws />, level: 'Learning', category: 'Cloud' },
  { name: 'Azure', icon: <TbBrandAzure />, level: 'Learning', category: 'Cloud' },
  { name: 'Docker', icon: <FaDocker />, level: 'Learning', category: 'DevOps' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Expert', category: 'Tools' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Expert', category: 'Frontend' },
];

const aiTools = [
  { name: 'GitHub Copilot', desc: 'AI pair programming' },
  { name: 'Cursor AI', desc: 'AI-first code editor' },
  { name: 'ChatGPT', desc: 'Problem solving & research' },
  { name: 'Claude', desc: 'Code review & documentation' },
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return styles.levelExpert;
      case 'Proficient':
        return styles.levelProficient;
      default:
        return styles.levelLearning;
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className={styles.header}>
          <span className={styles.label}>Skills</span>
          <h2 className={styles.title}>
            My technical <span className={styles.highlight}>toolkit</span>
          </h2>
          <p className={styles.subtitle}>
            The technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div variants={containerVariants} className={styles.skillsGrid}>
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{ y: -4, borderColor: 'var(--accent)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.skillIcon}>{skill.icon}</div>
              <div className={styles.skillInfo}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillCategory}>{skill.category}</span>
              </div>
              <span className={`${styles.skillLevel} ${getLevelColor(skill.level)}`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Tools Section */}
        <motion.div variants={itemVariants} className={styles.aiSection}>
          <div className={styles.aiHeader}>
            <SiOpenai className={styles.aiIcon} />
            <h3 className={styles.aiTitle}>AI-Powered Development</h3>
          </div>
          <p className={styles.aiDesc}>
            I leverage cutting-edge AI tools to enhance my development workflow, improve code
            quality, and accelerate project delivery.
          </p>
          <div className={styles.aiTools}>
            {aiTools.map((tool) => (
              <div key={tool.name} className={styles.aiTool}>
                <span className={styles.aiToolName}>{tool.name}</span>
                <span className={styles.aiToolDesc}>{tool.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div variants={itemVariants} className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.levelExpert}`} />
            <span>Expert</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.levelProficient}`} />
            <span>Proficient</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendDot} ${styles.levelLearning}`} />
            <span>Learning</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
