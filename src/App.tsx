import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Skills from '@pages/Skills';
import Projects from '@pages/Projects';
import Experience from '@pages/Experience';
import Contact from '@pages/Contact';

import MuiNavbar from '@components/navbar/MuiNavbar';
import './App.scss';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';
import Footer from '@components/footer/Footer';
import Layout from '@components/layout/Layout';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState<boolean>(
    () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="app min-h-screen flex flex-col">
        <MuiNavbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Layout>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </main>
        </Layout>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export { App };
