import { useCallback, useRef, useState } from 'react';
import { Box, Container, useTheme } from '@mui/material';
import { ColorModeProvider } from './color-mode';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { DesktopNav } from './navigation/DesktopNav/DesktopNav';
import { BottomNav } from './navigation/BottomNav/BottomNav';
import { Reveal } from './components/Reveal/Reveal';
import { Intro } from './components/Intro/Intro';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Education } from './components/Education/Education';
import { Skills } from './components/Skills/Skills';
import { Work } from './components/Work/Work';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

const Shell = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Refs for direct DOM manipulation (no re-renders on mousemove)
  const glowRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  const [cursorLabel, setCursorLabel] = useState('');

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}%`);

      // Cursor ambient glow — direct DOM update to avoid re-render
      if (glowRef.current) {
        glowRef.current.style.background = isDark
          ? `radial-gradient(700px circle at ${e.clientX}px ${e.clientY}px, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)`
          : `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(0,0,0,0.09) 0%, rgba(0,0,0,0.04) 35%, transparent 65%)`;
      }

      // Cursor label position — direct DOM update
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${e.clientX + 18}px, ${e.clientY - 12}px)`;
      }
    },
    [isDark],
  );

  const handleCursorEnter = useCallback(
    (label: string) => () => {
      setCursorLabel(label);
      if (labelRef.current) {
        labelRef.current.style.opacity = '1';
      }
    },
    [],
  );

  const handleCursorLeave = useCallback(() => {
    setCursorLabel('');
    if (labelRef.current) {
      labelRef.current.style.opacity = '0';
    }
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
          background: 'none',
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
      {/* Cursor ambient glow overlay — neutral white/dark shadow following mouse */}
      <Box
        ref={glowRef}
        aria-hidden="true"
        sx={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          display: { xs: 'none', lg: 'block' },
          transition: 'background 0.08s linear',
        }}
      />

      {/* Cursor hover label */}
      <Box
        ref={labelRef}
        aria-hidden="true"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          display: { xs: 'none', lg: 'block' },
          opacity: 0,
          transition: 'opacity 0.15s ease',
          willChange: 'transform',
        }}
      >
        <Box
          sx={{
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            bgcolor: 'text.primary',
            color: 'background.default',
            fontFamily: 'monospace',
            fontSize: '0.7rem',
            letterSpacing: '0.05em',
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          }}
        >
          {cursorLabel}
        </Box>
      </Box>

      {/* Top-left logo — only on desktop */}
      <Box
        component="span"
        sx={{
          position: 'fixed',
          top: 24,
          left: 24,
          zIndex: 1100,
          display: { xs: 'none', lg: 'inline-flex' },
          alignItems: 'center',
          justifyContent: 'center',
          width: 44,
          height: 28,
          bgcolor: 'transparent',
          color: 'text.primary',
          fontWeight: 600,
          fontSize: '0.8rem',
          fontFamily: '"Geist Sans", system-ui, -apple-system, sans-serif',
          letterSpacing: '0.12em',
          borderRadius: 1,
          border: '1.5px solid',
          borderColor: 'text.primary',
        }}
      >
        DP
      </Box>
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
              pt: { xs: 2, lg: 12 },
              pb: { xs: 2, lg: 0 },
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
              <Skills />
            </Reveal>
            <Reveal>
              <Work
                onCardEnter={handleCursorEnter('View project')}
                onCardLeave={handleCursorLeave}
              />
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
