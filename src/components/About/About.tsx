import { Box, Typography } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { stats, profile } from '../../data';
import { fonts } from '../../theme';

const bodySx = {
  color: 'text.secondary',
  fontSize: '1.1rem',
  lineHeight: 1.8,
  maxWidth: 640,
};

export const About = () => {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="01">About</SectionLabel>
      <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Building AI-powered products people love to use
      </Typography>
      <Typography sx={bodySx}>
        {profile.tagline} I turn complex models and data into{' '}
        <Box
          component="span"
          sx={{
            fontFamily: fonts.serif,
            fontStyle: 'italic',
            color: 'text.primary',
            fontSize: '1.2rem',
          }}
        >
          clean, dependable
        </Box>{' '}
        interfaces that people use every day. My focus is making advanced technology feel{' '}
        <Box
          component="span"
          sx={{
            fontFamily: fonts.serif,
            fontStyle: 'italic',
            color: 'text.primary',
            fontSize: '1.2rem',
          }}
        >
          simple and human
        </Box>
        .
      </Typography>
      <Typography sx={{ ...bodySx, mt: 3 }}>
        With a graduate background in computer science and several years shipping production
        software, I work comfortably across the stack — modeling data, integrating AI, and crafting
        the interface that ties it all together.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
          gap: 3,
          mt: 6,
        }}
      >
        {stats.map((s) => {
          const isNumber = typeof s.value === 'number';
          return (
            <Box
              key={s.label}
              sx={{
                p: 2.5,
                borderRadius: 2,
                bgcolor: 'action.hover',
              }}
            >
              <Typography
                sx={{
                  fontSize: isNumber ? '2rem' : '0.9rem',
                  fontWeight: isNumber ? 600 : 400,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: isNumber ? 'text.primary' : 'text.secondary',
                }}
              >
                {s.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  fontFamily: fonts.mono,
                  color: 'text.secondary',
                  mt: 0.5,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
