import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FiArrowDown, FiExternalLink } from 'react-icons/fi';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
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

  return (
    <section id="hero" className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.backgroundGrid} />
      <div className={styles.gradientOrb} />
      <div className={styles.gradientOrbSecondary} />

      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>Available for opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className={styles.title}>
          <span className={styles.greeting}>Hi, I&apos;m</span>
          <span className={styles.name}>Deepen Padwal</span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={itemVariants} className={styles.role}>
          <span className={styles.roleLabel}>AI Full Stack Developer</span>
          <span className={styles.roleDivider}>/</span>
          <span className={styles.roleSecondary}>Building intelligent web experiences</span>
        </motion.div>

        {/* Description */}
        <motion.p variants={itemVariants} className={styles.description}>
          I craft modern web applications at the intersection of{' '}
          <span className={styles.highlight}>AI and full-stack development</span>. Passionate about
          learning, building, and exploring new technologies to create impactful digital solutions.
        </motion.p>

        {/* Location */}
        <motion.div variants={itemVariants} className={styles.location}>
          <FaMapMarkerAlt />
          <span>Tampa, Florida</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className={styles.actions}>
          <motion.a
            href="#contact"
            className={styles.primaryBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get in Touch
            <FiExternalLink className={styles.btnIcon} />
          </motion.a>
          <motion.a
            href="/resume"
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className={styles.socials}>
          <a
            href="https://github.com/padwaldeepen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/padwaldeepen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:padwaldeepen@gmail.com" className={styles.socialLink} aria-label="Email">
            <FaEnvelope />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className={styles.scrollIndicator}
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          aria-label="Scroll to about section"
        >
          <span className={styles.scrollText}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiArrowDown />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Side Navigation Indicator */}
      <div className={styles.sideNav}>
        <div className={styles.sideNavLine} />
        <span className={styles.sideNavText}>01</span>
      </div>
    </section>
  );
};

export default Hero;
