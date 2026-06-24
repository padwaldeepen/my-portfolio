import { Box, Typography, Button, Stack } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { profile } from '../../data';
import { fonts } from '../../theme';

export const Contact = () => {
  return (
    <Box component="section" id="contact" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="04">Contact</SectionLabel>
      <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Let&apos;s work together
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 540, mb: 4 }}>
        I&apos;m currently available for freelance and full-time opportunities. Feel free to reach
        out if you have a project in mind or just want to say hi.
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button variant="contained" disableElevation size="large" href={`mailto:${profile.email}`}>
          Get in touch
        </Button>
        <Button
          variant="outlined"
          size="large"
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>
      </Stack>
      <Box sx={{ mt: 6 }}>
        <Typography
          variant="caption"
          sx={{
            fontFamily: fonts.mono,
            color: 'text.secondary',
            fontSize: '0.7rem',
            display: 'block',
            mb: 1,
          }}
        >
          {profile.email} &middot; {profile.location}
        </Typography>
      </Box>
    </Box>
  );
};
