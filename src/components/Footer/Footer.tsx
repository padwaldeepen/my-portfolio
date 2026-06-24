import { Box, Typography } from '@mui/material';
import { fonts } from '../../theme';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="caption"
        sx={{ fontFamily: fonts.mono, color: 'text.secondary', fontSize: '0.65rem' }}
      >
        &copy; {new Date().getFullYear()} Deepen Padwal. All rights reserved.
      </Typography>
    </Box>
  );
};
