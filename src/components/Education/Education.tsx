import { Box, Typography } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { education } from '../../data';
import { fonts } from '../../theme';

export const Education = () => {
  return (
    <Box component="section" id="education" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="03">Education</SectionLabel>
      <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Academic background
      </Typography>
      {education.map((item, idx) => (
        <Box key={item.degree}>
          {idx > 0 && (
            <Box
              sx={{
                height: '2px',
                width: '40px',
                bgcolor: 'divider',
                borderRadius: 1,
                mb: 4,
                mt: 5,
              }}
            />
          )}
          <Box sx={{ mb: 0.5 }}>
            <Typography
              variant="caption"
              sx={{ fontFamily: fonts.mono, color: 'text.secondary', fontSize: '0.75rem' }}
            >
              {item.period}
            </Typography>
            <Typography variant="h4" sx={{ mt: 0.5, mb: 0.25 }}>
              {item.degree}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontFamily: fonts.mono, fontSize: '0.8rem', mb: 1.5 }}
            >
              {item.school}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
            {item.description}
          </Typography>
          {item.highlights.length > 0 && (
            <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
              {item.highlights.map((h) => (
                <Typography
                  component="li"
                  key={h}
                  variant="body2"
                  sx={{ color: 'text.secondary', mb: 0.25 }}
                >
                  {h}
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};
