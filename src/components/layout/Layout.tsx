import React from 'react';
import { Box, useTheme } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

/**
 * Layout: Provides consistent max width, padding, and spacing for all pages.
 * Adds top padding to prevent content from scrolling under the navbar.
 */

import './layout.scss';

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
