import { Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  mb?: number;
}

export const SectionHeading = ({ children, mb = 5 }: SectionHeadingProps) => {
  return (
    <Typography variant="h2" sx={{ mb, fontSize: { xs: '1.35rem', md: '2rem' } }}>
      {children}
    </Typography>
  );
};
