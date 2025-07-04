import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeSection from '@pages/Home';
import About from '@pages/About';
import Skills from '@pages/Skills';
import Projects from '@pages/Projects';
import Experience from '@pages/Experience';
import ContactSection from '@pages/Contact';

import MuiNavbar from '@components/navbar/MuiNavbar';
import './App.scss';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Layout from '@components/layout/Layout';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="app min-h-screen flex flex-col">
        <Layout darkMode={isDarkMode} setDarkMode={setIsDarkMode}>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomeSection />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
        </Layout>
      </div>
    </ThemeProvider>
  );
};

export { App };
