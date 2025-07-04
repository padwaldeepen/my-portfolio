import React from 'react';
import { Box, Typography, Button, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCode,
  FaGlobeAmericas,
} from 'react-icons/fa';
import styles from './HomeSection.module.scss';
import devAvatar from '@assets/img/dev-avatar.png';

const ROLES = ['Full Stack Developer', 'AI Enthusiast', 'Traveler', 'Creative Problem Solver'];

const STATS = [
  { icon: <FaCode />, label: '5+ Years Experience' },
  { icon: <FaGlobeAmericas />, label: '15+ States Visited' },
  { icon: <FaMapMarkerAlt />, label: 'Based in Tampa, FL' },
];

const SOCIALS = [
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/padwaldeepen/', label: 'LinkedIn' },
  { icon: <FaGithub />, href: 'https://github.com/deepenpadwal', label: 'GitHub' },
  { icon: <FaEnvelope />, href: 'mailto:padwaldeepen@gmail.com', label: 'Email' },
];

const HomeSection: React.FC = () => (
  <Box className={styles.homeContainer}>
    {/* Hero Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={styles.heroSection}
    >
      <img src={devAvatar} alt="Developer avatar illustration" className={styles.avatarImg} />
      <Typography variant="h1" className={styles.headline}>
        Hi, I'm <span className={styles.coloredWord}>Deepen Padwal</span>
      </Typography>
      <Typography variant="h3" className={styles.animatedRoles}>
        <Typewriter
          options={{
            strings: ROLES,
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 30,
            pauseFor: 1800,
          }}
        />
      </Typography>
      <Typography variant="h5" className={styles.subheadline}>
        I build modern web experiences, explore new technologies, and love to travel the world.
      </Typography>
      <Box className={styles.ctaRow}>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="/contact"
          className={styles.ctaButton}
        >
          Contact Me
        </Button>
        <Button
          variant="outlined"
          color="success"
          size="large"
          href="/experience"
          className={styles.ctaButton}
        >
          View Experience
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          href="/resume"
          className={styles.ctaButton}
        >
          View Resume
        </Button>
      </Box>
    </motion.div>

    {/* Stats Row */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className={styles.statsRow}
    >
      {STATS.map((stat) => (
        <Chip
          key={stat.label}
          icon={stat.icon}
          label={stat.label}
          className={styles.statChip}
          color="default"
          variant="outlined"
        />
      ))}
    </motion.div>

    {/* Social Links */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className={styles.socialRow}
    >
      {SOCIALS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={styles.socialIcon}
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  </Box>
);

export default HomeSection;
