import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionLabelProps {
  index: string;
  children: ReactNode;
}

export const SectionLabel = ({ index, children }: SectionLabelProps) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        {index}
      </Typography>
      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {children}
      </Typography>
    </Box>
  );
};
