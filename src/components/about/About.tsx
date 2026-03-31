import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';
import styles from './About.module.scss';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const stats = [
    { value: '5+', label: 'Years Experience', icon: <FaBriefcase /> },
    { value: 'M.S.', label: 'in MIS', icon: <FaGraduationCap /> },
    { value: '15+', label: 'States Visited', icon: <FaMapMarkerAlt /> },
    { value: 'AI', label: 'Enthusiast', icon: <FaRocket /> },
  ];

  const journey = [
    { place: 'Mumbai', desc: 'Where it all began' },
    { place: 'Montgomery', desc: 'Graduate studies' },
    { place: 'Tampa', desc: 'Building the future' },
  ];

  return (
    <section id="about" className={styles.about}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className={styles.header}>
          <span className={styles.label}>About</span>
          <h2 className={styles.title}>
            A bit about <span className={styles.highlight}>me</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.grid}>
          {/* Left Column - Bio */}
          <motion.div variants={itemVariants} className={styles.bio}>
            <p className={styles.introParagraph}>
              I&apos;m a <span className={styles.accent}>Full Stack Developer</span> with a passion for 
              building intelligent web applications. Currently working at{' '}
              <span className={styles.accent}>Tata Consultancy Services</span>, where I craft 
              user-facing features for enterprise applications.
            </p>
            <p>
              My journey in tech has taken me from Mumbai to the United States, where I completed 
              my Master&apos;s degree in Management Information Systems at Auburn University. 
              I&apos;m fascinated by the intersection of AI and web development, constantly 
              exploring how to leverage tools like GitHub Copilot and emerging AI technologies 
              to build better software.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me planning my next road trip across 
              America (I collect fridge magnets from every state!), watching anime, or diving 
              into the latest tech trends. My goal is to visit all 50 states while building 
              meaningful technology that makes a difference.
            </p>
          </motion.div>

          {/* Right Column - Stats & Journey */}
          <div className={styles.rightCol}>
            {/* Stats Grid */}
            <motion.div variants={itemVariants} className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statCard}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Journey Timeline */}
            <motion.div variants={itemVariants} className={styles.journey}>
              <h3 className={styles.journeyTitle}>My Journey</h3>
              <div className={styles.journeyPath}>
                {journey.map((stop, index) => (
                  <div key={stop.place} className={styles.journeyStop}>
                    <div className={styles.journeyDot} />
                    <div className={styles.journeyContent}>
                      <span className={styles.journeyPlace}>{stop.place}</span>
                      <span className={styles.journeyDesc}>{stop.desc}</span>
                    </div>
                    {index < journey.length - 1 && <div className={styles.journeyLine} />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Interests */}
        <motion.div variants={itemVariants} className={styles.interests}>
          <h3 className={styles.interestsTitle}>Beyond Code</h3>
          <div className={styles.interestsTags}>
            {['Anime & Studio Ghibli', 'Road Trips', 'AI & ML', 'Movies', 'Music', 'Reading', 'Photography'].map((interest) => (
              <span key={interest} className={styles.interestTag}>
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
