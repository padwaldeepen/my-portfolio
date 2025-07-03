import React from 'react';
import { Box, useTheme } from '@mui/material';

import './layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box className="layout-root" data-theme={isDark ? 'dark' : 'light'}>
      <Box className="layout-container">{children}</Box>
    </Box>
  );
};

export default Layout;
