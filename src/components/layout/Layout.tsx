import React from 'react';
import { Box, useTheme } from '@mui/material';

import styles from './Layout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box className={styles['layout-root']} data-theme={isDark ? 'dark' : 'light'}>
      <Box className={styles['layout-container']}>{children}</Box>
    </Box>
  );
};

export default Layout;
