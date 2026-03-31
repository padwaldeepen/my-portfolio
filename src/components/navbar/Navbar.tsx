import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Navbar.module.scss';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className={styles.container}>
          {/* Logo */}
          <motion.button
            className={styles.logo}
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={styles.logoText}>DP</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    className={styles.activeIndicator}
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right Actions */}
          <div className={styles.actions}>
            <motion.a
              href="https://github.com/padwaldeepen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/padwaldeepen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconBtn}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.button
              className={styles.themeToggle}
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </motion.button>
            
            {/* Mobile Menu Button */}
            <motion.button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.mobileMenuContent}>
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  className={`${styles.mobileNavLink} ${activeSection === link.id ? styles.active : ''}`}
                  onClick={() => scrollToSection(link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
