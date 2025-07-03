import React from 'react';
import styles from '@components/skills/SkillCards.module.scss';
import SkillCards from '@components/skills/SkillCards';

const SkillsPage: React.FC = () => {
  return (
    <section
      className={styles['skillsSection'] + ' py-12 md:py-20 px-4 md:px-12 max-w-5xl mx-auto'}
      aria-label="Skills section"
    >
      <div className={styles['chartWrapper'] + ' w-full flex justify-center'}>
        <SkillCards />
      </div>
    </section>
  );
};

export default SkillsPage;
