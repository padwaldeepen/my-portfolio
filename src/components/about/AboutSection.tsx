import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AnimationIcon from '@mui/icons-material/Animation';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import styles from './AboutSection.module.scss';

const HOBBIES = [
  {
    key: 'anime',
    label: 'Anime',
    icon: <AnimationIcon fontSize="large" sx={{ color: '#ff80ab' }} />,
    desc: 'Immersive anime worlds & Studio Ghibli marathons.',
    accent: '#ff80ab',
  },
  {
    key: 'movies',
    label: 'Movies',
    icon: <MovieIcon fontSize="large" sx={{ color: '#ffd740' }} />,
    desc: 'From Nolan films to indie gems, movies inspire my creativity.',
    accent: '#ffd740',
  },
  {
    key: 'travel',
    label: 'Travel',
    icon: <DirectionsCarIcon fontSize="large" sx={{ color: '#64b5f6' }} />,
    desc: 'Road trips across the US—Florida, Georgia, Tennessee, Ohio, Indiana, Alabama, New Orleans, and more. I collect a fridge magnet from every state I visit, and my bucket list is to see all 50!',
    accent: '#64b5f6',
  },
  {
    key: 'music',
    label: 'Music',
    icon: <MusicNoteIcon fontSize="large" sx={{ color: '#69f0ae' }} />,
    desc: 'Playlists for every mood—music keeps me focused and inspired.',
    accent: '#69f0ae',
  },
  {
    key: 'books',
    label: 'Books',
    icon: <AutoStoriesIcon fontSize="large" sx={{ color: '#b388ff' }} />,
    desc: 'Reading sparks new ideas and helps me grow as a developer.',
    accent: '#b388ff',
  },
];

const FUN_FACTS = [
  { label: 'Studio Ghibli Fan', color: 'secondary' },
  { label: 'AI Enthusiast', color: 'success' },
  { label: 'Loves Road Trips', color: 'primary' },
  { label: 'Fridge Magnet Collector', color: 'secondary' },
  { label: '50 States Bucket List', color: 'primary' },
];

const AboutSection: React.FC = () => (
  <Box className={styles.aboutContainer}>
    {/* Intro Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={styles.introSection}
    >
      <Typography variant="h2" className={styles.sectionTitle}>
        About <span className={styles.coloredWord}>Me</span>
      </Typography>
      <Typography variant="h5" className={styles.introText}>
        Hi, I'm <span className={styles.coloredWord}>Deepen</span> — a{' '}
        <span className={styles.highlight}>full stack developer</span> passionate about{' '}
        <span className={styles.coloredWord}>AI</span>,{' '}
        <span className={styles.highlight}>creative problem-solving</span>, and building{' '}
        <span className={styles.highlight}>beautiful web experiences</span>.<br />
        My journey has taken me from <span className={styles.coloredWord}>Mumbai</span> to{' '}
        <span className={styles.highlight}>Montgomery</span> and now to{' '}
        <span className={styles.coloredWord}>Tampa</span>, always learning, always exploring.
      </Typography>
    </motion.div>

    {/* Hobbies Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      className={styles.hobbiesSection}
    >
      <Typography variant="h4" className={styles.hobbiesTitle}>
        <span className={styles.coloredWord}>Hobbies</span> & Interests
      </Typography>
      <Box className={styles.hobbiesGrid}>
        {HOBBIES.map((hobby) => (
          <Paper
            key={hobby.key}
            className={styles.hobbyCard}
            elevation={3}
            style={{ borderColor: hobby.accent }}
          >
            <span className={styles.hobbyIcon}>{hobby.icon}</span>
            <Typography className={styles.hobbyLabel} style={{ color: hobby.accent }}>
              {hobby.label}
            </Typography>
            <Typography className={styles.hobbyDesc}>{hobby.desc}</Typography>
          </Paper>
        ))}
      </Box>
    </motion.div>

    {/* Fun Facts Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      className={styles.factsSection}
    >
      <Typography variant="h5" className={styles.factsTitle}>
        <span className={styles.coloredWord}>Fun</span> Facts
      </Typography>
      <Box className={styles.factsChips}>
        {FUN_FACTS.map((fact) => (
          <Chip
            key={fact.label}
            label={fact.label}
            color={fact.color as any}
            className={styles.factChip}
            icon={<EmojiObjectsIcon />}
            variant="outlined"
          />
        ))}
      </Box>
    </motion.div>
  </Box>
);

export default AboutSection;
