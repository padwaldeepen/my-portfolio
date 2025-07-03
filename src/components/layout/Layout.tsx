import { Box, useTheme } from '@mui/material';
import React from 'react';
import MuiNavbar from '@components/navbar/MuiNavbar';
import Footer from '@components/footer/Footer';
import styles from './layoutSection.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout: React.FC<LayoutProps> = ({ children, darkMode, setDarkMode }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box className={styles['layout-root']} data-theme={isDark ? 'dark' : 'light'}>
      <MuiNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box className={styles['layout-container']}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
