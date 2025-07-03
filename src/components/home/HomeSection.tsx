import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImg from '@assets/img/desk.svg';
import Typewriter from 'typewriter-effect';
import styles from './HomeSection.module.scss';

const headline = "Hi, I'm Deepen Padwal";
const subheadline = 'Full-stack Developer | React, Node, Python';

const HomeSection: React.FC = () => {
  return (
    <Paper elevation={0} className={styles['heroRoot']} aria-label="Hero section">
      {/* Decorative background circles */}
      <div className={styles['heroBgCircle1']} />
      <div className={styles['heroBgCircle2']} />
      <Container maxWidth="md" className={styles['heroContainer']}>
        <Box className={styles['heroTextCol']}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            color="text.primary"
            gutterBottom
            className={styles['heroHeadline']}
          >
            <Typewriter
              options={{
                strings: [headline],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
              }}
            />
          </Typography>
          <Typography variant="h5" color="text.secondary" className={styles['heroSubheadline']}>
            {subheadline}
          </Typography>
          {/* Buttons hidden while under construction */}
          {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="/resume.pdf"
              download
              size="large"
              startIcon={<FaDownload />}
              sx={{
                fontWeight: 600,
                backgroundColor: theme => theme.palette.primary.main,
                color: theme => theme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: theme => theme.palette.primary.dark,
                },
                borderRadius: 2,
                px: 3,
              }}
              aria-label="Download Resume"
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="#projects"
              size="large"
              endIcon={<FaArrowRight />}
              sx={{
                fontWeight: 600,
                borderColor: theme => theme.palette.primary.main,
                color: theme => theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme => theme.palette.primary.dark,
                  color: theme => theme.palette.primary.dark,
                  backgroundColor: theme => theme.palette.action.hover,
                },
                borderRadius: 2,
                px: 3,
              }}
              aria-label="View Projects"
            >
              View Projects
            </Button>
          </Box> */}
        </Box>
        <Box className={styles['heroImgCol']} aria-label="Profile image">
          <img
            src={profileImg}
            alt="Deepen Padwal profile illustration"
            className={styles['heroProfileImg']}
          />
        </Box>
      </Container>
    </Paper>
  );
};

export default HomeSection;
