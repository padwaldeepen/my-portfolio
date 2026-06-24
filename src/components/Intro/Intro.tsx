import { Box, Typography, Button, Stack } from '@mui/material';
import { fonts } from '../../theme';
import { profile } from '../../data';

export const Intro = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Box
      sx={{
        minHeight: { lg: '70vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        pb: { lg: 8 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          display: { xs: 'block', lg: 'none' },
          fontWeight: 800,
          fontSize: '1.75rem',
          letterSpacing: '-0.03em',
          mb: 0.5,
        }}
      >
        {profile.name}
      </Typography>
      <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2 }}>
        {profile.role}
      </Typography>
      <Typography
        variant="h1"
        sx={{ fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4rem' }, maxWidth: 800 }}
      >
        I build{' '}
        <Box
          component="span"
          sx={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}
        >
          intelligent
        </Box>{' '}
        systems that feel{' '}
        <Box
          component="span"
          sx={{ fontFamily: fonts.serif, fontStyle: 'italic', fontWeight: 400 }}
        >
          effortless
        </Box>
      </Typography>
      <Typography
        sx={{
          color: 'text.secondary',
          fontSize: '1.15rem',
          lineHeight: 1.7,
          mt: 3,
          maxWidth: 580,
        }}
      >
        {profile.tagline}
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ mt: 5 }} spacing={2}>
        <Button
          variant="contained"
          disableElevation
          size="large"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
        <Button variant="outlined" size="large" onClick={() => scrollTo('contact')}>
          Get in touch
        </Button>
      </Stack>

      {/* Scroll indicator */}
      <Box
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollTo('about')}
        className="float-dot"
        sx={{
          display: { xs: 'none', lg: 'flex' },
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          opacity: 0.5,
          transition: 'opacity 0.2s',
          '&:hover': { opacity: 1 },
        }}
      >
        <Typography
          sx={{ fontFamily: fonts.mono, fontSize: '0.6rem', letterSpacing: '0.15em', color: 'text.secondary' }}
        >
          SCROLL
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            bgcolor: 'text.secondary',
            borderRadius: 1,
          }}
        />
      </Box>
    </Box>
  );
};
