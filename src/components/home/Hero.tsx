import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profileImg from '@assets/img/desk.svg';
import Typewriter from 'typewriter-effect';

const headline = "Hi, I'm Deepen Padwal";
const subheadline = 'Full-stack Developer | React, Node, Python';

const Hero: React.FC = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 6 },
        mt: { xs: '-2.5rem', md: '-3.5rem' },
      }}
      aria-label="Hero section"
    >
      {/* Decorative background circles */}
      <Box
        sx={{
          position: 'absolute',
          top: -120,
          left: -120,
          width: 400,
          height: 400,
          borderRadius: '50%',
          bgcolor: 'primary.light',
          opacity: 0.15,
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 220,
          height: 220,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          opacity: 0.1,
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          zIndex: 1,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 6,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            gap: 3,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            fontWeight={800}
            color="text.primary"
            gutterBottom
            sx={{ fontSize: { xs: 36, md: 56 } }}
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
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2, fontWeight: 500 }}>
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
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 6, md: 0 },
          }}
          aria-label="Profile image"
        >
          <Box
            component="img"
            src={profileImg}
            alt="Deepen Padwal profile illustration"
            sx={{
              width: { xs: 180, md: 260 },
              height: { xs: 180, md: 260 },
              borderRadius: '50%',
              objectFit: 'contain',
              bgcolor: 'background.paper',
              boxShadow: 6,
              border: (theme) => `4px solid ${theme.palette.background.paper}`,
            }}
          />
        </Box>
      </Container>
    </Paper>
  );
};

export default Hero;
