import React from 'react';
import { Box, Typography } from '@mui/material';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CelebrationIcon from '@mui/icons-material/Celebration';
import styles from './ComingSoonBox.module.scss';

interface ComingSoonBoxProps {
  label?: string;
  description?: string;
}

const ComingSoonBox: React.FC<ComingSoonBoxProps> = ({
  label = 'Coming Soon!',
  description = 'This section is under construction. Stay tuned for updates!',
}) => {
  return (
    <Box className={styles['comingSoonBox']} aria-label="Coming soon section">
      <Box className={styles['comingSoonIconBg']}>
        <CelebrationIcon sx={{ fontSize: 120, color: 'primary.light' }} />
      </Box>
      <HourglassEmptyIcon color="primary" className={styles['comingSoonIconMain']} />
      <Typography className={styles['comingSoonTitle']} gutterBottom>
        {label}
      </Typography>
      <Typography className={styles['comingSoonDesc']}>{description}</Typography>
    </Box>
  );
};

export default ComingSoonBox;
