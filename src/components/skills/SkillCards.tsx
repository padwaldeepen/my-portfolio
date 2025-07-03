import React from 'react';
import { motion } from 'framer-motion';
import { skills } from './skills';
import styles from './SkillCards.module.scss';

const SkillCards: React.FC = () => {
  return (
    <div className={styles.skillGrid}>
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <button
            key={skill.title}
            className={styles.skillCard}
            aria-label={`View details for ${skill.title}`}
            tabIndex={0}
          >
            <motion.div
              className={styles.cardInner}
              animate={{ boxShadow: '0 2px 16px 0 rgba(16,185,129,0.10)' }}
              whileHover={{ boxShadow: '0 8px 32px 0 rgba(16,185,129,0.18)' }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardFace + ' ' + styles.cardFront}>
                <Icon className={styles.skillIcon} aria-hidden />
                <div className={styles.skillTitle}>{skill.title}</div>
              </div>
              <div className={styles.cardFace + ' ' + styles.cardBack}>
                <div className={styles.skillTitle}>{skill.title}</div>
                <div className={styles.skillDesc}>{skill.description}</div>
              </div>
            </motion.div>
          </button>
        );
      })}
    </div>
  );
};

export default SkillCards;
