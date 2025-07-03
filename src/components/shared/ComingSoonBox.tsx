import React from 'react';
import { Box, Typography } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CelebrationIcon from '@mui/icons-material/Celebration';

interface ComingSoonBoxProps {
  label?: string;
  description?: string;
}

const ComingSoonBox: React.FC<ComingSoonBoxProps> = ({
  label = 'Coming Soon!',
  description = 'This section is under construction. Stay tuned for updates!',
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 320,
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: 3,
        p: 5,
        gap: 2,
        position: 'relative',
        overflow: 'hidden',
        mt: 6,
        mb: 6,
        maxWidth: 600, // Increased width
        width: '100%',
        mx: 'auto',
      }}
      aria-label="Coming soon section"
    >
      <Box sx={{ position: 'absolute', top: 12, right: 12, opacity: 0.12, fontSize: 96 }}>
        <CelebrationIcon sx={{ fontSize: 96, color: 'primary.light' }} />
      </Box>
      <HourglassEmptyIcon color="primary" sx={{ fontSize: 56, mb: 1 }} />
      <Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
};

export default ComingSoonBox;
