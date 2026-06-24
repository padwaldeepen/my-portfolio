import { useCallback } from 'react';
import { Box, Container } from '@mui/material';
import { ColorModeProvider } from './color-mode';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { DesktopNav } from './navigation/DesktopNav/DesktopNav';
import { BottomNav } from './navigation/BottomNav/BottomNav';
import { Reveal } from './components/Reveal/Reveal';
import { Intro } from './components/Intro/Intro';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

const Shell = () => {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <Box
      onMouseMove={handleMouseMove}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
        '&::before': {
          content: '""',
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          display: { xs: 'none', lg: 'block' },
          background:
            'radial-gradient(900px circle at var(--mouse-x, 50%) var(--mouse-y, 0%), color-mix(in oklab, var(--mui-palette-primary-main) 40%, transparent) 10%, color-mix(in oklab, var(--mui-palette-primary-main) 15%, transparent) 30%, transparent 65%)',
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          display: { xs: 'none', lg: 'block' },
          background:
            'linear-gradient(to right, color-mix(in oklab, currentColor 4%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, currentColor 4%, transparent) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black 25%, transparent 70%)',
        },
      }}
    >
      <ThemeToggle />
      <BottomNav />
      <Container
        maxWidth="lg"
        sx={{ position: 'relative', zIndex: 1, pt: { xs: 4, lg: 0 }, flex: 1 }}
      >
        <Box
          sx={{
            display: { xs: 'block', lg: 'grid' },
            gridTemplateColumns: { lg: '280px 1fr' },
            alignItems: { lg: 'start' },
            gap: { lg: 8 },
          }}
        >
          <DesktopNav />
          <Box
            component="main"
            sx={{
              py: { xs: 2, lg: 12 },
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Reveal>
              <Intro />
            </Reveal>
            <Reveal>
              <About />
            </Reveal>
            <Reveal>
              <Experience />
            </Reveal>
            <Reveal>
              <Education />
            </Reveal>
            <Reveal>
              <Contact />
            </Reveal>
            <Footer />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export const App = () => {
  return (
    <ColorModeProvider>
      <Shell />
    </ColorModeProvider>
  );
};
