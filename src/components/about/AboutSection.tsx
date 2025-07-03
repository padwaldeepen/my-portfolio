import React, { useState, useRef } from 'react';
import styles from './About.module.scss';
import { Typography, Box, Paper, useTheme, Avatar, Popover } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AnimationIcon from '@mui/icons-material/Animation';

const HOBBIES = [
  {
    key: 'anime',
    label: 'Anime',
    icon: <AnimationIcon fontSize="large" color="secondary" />,
    desc: 'I love immersive anime worlds and Studio Ghibli marathons.',
    accent: '#ff80ab',
  },
  {
    key: 'movies',
    label: 'Movies',
    icon: <MovieIcon fontSize="large" color="warning" />,
    desc: 'From Nolan films to indie gems, movies inspire my creativity.',
    accent: '#ffd740',
  },
  {
    key: 'travel',
    label: 'Travel',
    icon: <DirectionsCarIcon fontSize="large" color="info" />,
    desc: 'I love road trips, discovering new places, and food adventures.',
    accent: '#64b5f6',
  },
  {
    key: 'music',
    label: 'Music',
    icon: <MusicNoteIcon fontSize="large" color="success" />,
    desc: 'Playlists for every mood—music keeps me focused and inspired.',
    accent: '#69f0ae',
  },
  {
    key: 'books',
    label: 'Books',
    icon: <AutoStoriesIcon fontSize="large" color="secondary" />,
    desc: 'Reading sparks new ideas and helps me grow as a developer.',
    accent: '#b388ff',
  },
];

const AboutSection = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [hoveredHobby, setHoveredHobby] = useState<string | null>(null);
  const popoverHover = useRef(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hoverRef = useRef<{ [key: string]: boolean }>({});

  // Accepts both PointerEvent and FocusEvent for accessibility
  const handlePointerEnter = (
    event: React.PointerEvent<HTMLElement> | React.FocusEvent<HTMLElement>,
    hobbyKey: string,
  ) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    hoverRef.current[hobbyKey] = true;
    setAnchorEl(event.currentTarget as HTMLElement);
    setActiveHobby(hobbyKey);
  };

  const handlePointerLeave = (hobbyKey: string) => {
    hoverRef.current[hobbyKey] = false;
    closeTimeout.current = setTimeout(() => {
      if (!hoverRef.current[hobbyKey]) {
        setAnchorEl(null);
        setActiveHobby(null);
      }
    }, 200);
  };

  const getHobby = (key: string) => HOBBIES.find((h) => h.key === key);

  // About paragraph with interactive keywords
  const aboutParagraph = (
    <>
      I’m a passionate Full Stack Developer who loves to blend code and creativity. When I’m not
      building web apps, you’ll find me lost in{' '}
      <span
        className={styles['hobbyWord']}
        tabIndex={0}
        style={{ color: getHobby('anime')?.accent, fontWeight: 600, cursor: 'pointer' }}
        onPointerEnter={(e) => handlePointerEnter(e, 'anime')}
        onFocus={(e: React.FocusEvent<HTMLElement>) => handlePointerEnter(e, 'anime')}
        onPointerLeave={() => handlePointerLeave('anime')}
        onBlur={() => handlePointerLeave('anime')}
        aria-describedby={activeHobby === 'anime' ? 'hobby-popover' : undefined}
      >
        anime worlds
      </span>
      , binging{' '}
      <span
        className={styles['hobbyWord']}
        tabIndex={0}
        style={{ color: getHobby('movies')?.accent, fontWeight: 600, cursor: 'pointer' }}
        onPointerEnter={(e) => handlePointerEnter(e, 'movies')}
        onFocus={(e: React.FocusEvent<HTMLElement>) => handlePointerEnter(e, 'movies')}
        onPointerLeave={() => handlePointerLeave('movies')}
        onBlur={() => handlePointerLeave('movies')}
        aria-describedby={activeHobby === 'movies' ? 'hobby-popover' : undefined}
      >
        movies
      </span>
      , or on a spontaneous{' '}
      <span
        className={styles['hobbyWord']}
        tabIndex={0}
        style={{ color: getHobby('travel')?.accent, fontWeight: 600, cursor: 'pointer' }}
        onPointerEnter={(e) => handlePointerEnter(e, 'travel')}
        onFocus={(e: React.FocusEvent<HTMLElement>) => handlePointerEnter(e, 'travel')}
        onPointerLeave={() => handlePointerLeave('travel')}
        onBlur={() => handlePointerLeave('travel')}
        aria-describedby={activeHobby === 'travel' ? 'hobby-popover' : undefined}
      >
        road trip
      </span>
      . I enjoy discovering hidden food spots, making{' '}
      <span
        className={styles['hobbyWord']}
        tabIndex={0}
        style={{ color: getHobby('music')?.accent, fontWeight: 600, cursor: 'pointer' }}
        onPointerEnter={(e) => handlePointerEnter(e, 'music')}
        onFocus={(e: React.FocusEvent<HTMLElement>) => handlePointerEnter(e, 'music')}
        onPointerLeave={() => handlePointerLeave('music')}
        onBlur={() => handlePointerLeave('music')}
        aria-describedby={activeHobby === 'music' ? 'hobby-popover' : undefined}
      >
        playlists
      </span>{' '}
      for every mood, and reading{' '}
      <span
        className={styles['hobbyWord']}
        tabIndex={0}
        style={{ color: getHobby('books')?.accent, fontWeight: 600, cursor: 'pointer' }}
        onPointerEnter={(e) => handlePointerEnter(e, 'books')}
        onFocus={(e: React.FocusEvent<HTMLElement>) => handlePointerEnter(e, 'books')}
        onPointerLeave={() => handlePointerLeave('books')}
        onBlur={() => handlePointerLeave('books')}
        aria-describedby={activeHobby === 'books' ? 'hobby-popover' : undefined}
      >
        books
      </span>{' '}
      that spark new ideas. Every project, every story, and every adventure adds a new layer to my
      journey.
    </>
  );

  return (
    <section className={styles['aboutWrapper']} aria-label="About Me section">
      <Paper
        elevation={6}
        sx={{
          p: { xs: 2.5, md: 5 },
          borderRadius: 6,
          background: `linear-gradient(135deg, ${theme.palette.background.paper} 80%, ${theme.palette.primary.light} 100%)`,
          boxShadow: '0 8px 32px 0 rgba(80,80,180,0.10), 0 1.5px 8px 0 rgba(80,80,180,0.08)',
          border: `2.5px solid ${theme.palette.primary.main}`,
          position: 'relative',
          overflow: 'hidden',
          transition: 'box-shadow 0.3s cubic-bezier(.4,1.3,.6,1)',
          '&:hover': {
            boxShadow: '0 12px 48px 0 rgba(80,80,180,0.18), 0 2px 12px 0 rgba(80,80,180,0.12)',
          },
        }}
      >
        <Box
          className={styles['aboutRow']}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 3, md: 6 },
          }}
        >
          <Box className={styles['aboutTextSection']} sx={{ flex: 1 }}>
            <Typography
              variant="h3"
              component="h2"
              className={styles['heading']}
              gutterBottom
              sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 800,
                letterSpacing: '0.01em',
                mb: 2,
              }}
            >
              Hey there, I'm Deepen
            </Typography>
            <Typography
              variant="body1"
              className={styles['paragraph']}
              sx={{ fontSize: { xs: '1.08rem', md: '1.18rem' }, lineHeight: 1.85, fontWeight: 500 }}
            >
              {aboutParagraph}
            </Typography>
            <Typography
              variant="body1"
              className={styles['paragraph']}
              sx={{ fontSize: { xs: '1.08rem', md: '1.18rem' }, lineHeight: 1.85, mt: 2 }}
            >
              Whether it’s a Studio Ghibli marathon, a Christopher Nolan film, or a late-night
              coding session, I believe in connecting the dots between technology and life. Let’s
              build, learn, and explore together!
            </Typography>
          </Box>
          <Box
            className={styles['avatarBox']}
            sx={{
              flexShrink: 0,
              ml: { md: 4 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Avatar
              alt="Cartoon developer avatar"
              src="/src/assets/img/desk.svg"
              sx={{
                width: 180,
                height: 180,
                boxShadow: 6,
                bgcolor: 'background.paper',
                border: (theme) => `4px solid ${theme.palette.background.paper}`,
                filter: 'drop-shadow(0 2px 16px #b388ff44)',
                transition: 'filter 0.3s',
                '&:hover': {
                  filter: 'drop-shadow(0 6px 32px #ff80ab66)',
                },
              }}
            />
          </Box>
        </Box>
        <Popover
          id="hobby-popover"
          open={Boolean(anchorEl) && !!activeHobby}
          anchorEl={anchorEl}
          onClose={() => {}} // Prevent Popover from closing on focus loss
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: 3,
              minWidth: 220,
              px: 2.5,
              py: 2,
              background: '#fff',
              boxShadow: '0 4px 24px 0 rgba(80,80,180,0.13)',
              border: (t) => `2px solid ${getHobby(activeHobby!)?.accent}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              transition: 'box-shadow 0.2s',
              pointerEvents: 'auto',
            },
            onPointerEnter: () => {
              if (activeHobby) hoverRef.current[activeHobby] = true;
            },
            onPointerLeave: () => {
              if (activeHobby) handlePointerLeave(activeHobby);
            },
          }}
          disableRestoreFocus
        >
          {activeHobby && (
            <>
              <Box sx={{ mb: 1 }}>{getHobby(activeHobby)?.icon}</Box>
              <Typography
                variant="subtitle1"
                fontWeight={700}
                sx={{ color: getHobby(activeHobby)?.accent, mb: 0.5 }}
              >
                {getHobby(activeHobby)?.label}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                {getHobby(activeHobby)?.desc}
              </Typography>
            </>
          )}
        </Popover>
      </Paper>
    </section>
  );
};

export default AboutSection;
