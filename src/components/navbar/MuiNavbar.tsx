import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import classNames from 'classnames';
import styles from './MuiNavbar.module.scss';
import SocialIcons from '../shared/social/SocialIcons';
import Drawer from '@mui/material/Drawer';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

interface MuiNavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MuiNavbar: React.FC<MuiNavbarProps> = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDrawerOpen(false);
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Only show Drawer on mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <AppBar position="fixed" className={styles.navbarRoot} elevation={0}>
      <Toolbar className={styles.toolbar}>
        {/* Left: Logo */}
        <div className={styles.leftGroup}>
          <RouterLink to="/" className={styles.brand} aria-label="Deepen Padwal Portfolio Home">
            <span aria-hidden="true">DA</span>
          </RouterLink>
        </div>

        {/* Center: Nav Links */}
        <div className={styles.centerGroup}>
          <div className={styles.navLinks}>
            {navLinks.map((link) => (
              <RouterLink
                key={link.to}
                to={link.to}
                className={classNames(styles.linkBtn, {
                  [styles.active]: location.pathname === link.to,
                })}
              >
                <span>{link.label}</span>
                <span className={styles.underline} />
              </RouterLink>
            ))}
          </div>
        </div>

        {/* Right: Social Icons + Theme Toggle + Hamburger */}
        <div className={styles.rightGroup}>
          <div className={styles.desktopOnly}>
            <SocialIcons className={styles.navActions} />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className={classNames(styles.socialBtn, styles.themeToggleBtn)}
              style={{
                transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
                transform: 'rotate(' + (darkMode ? 180 : 0) + 'deg)',
              }}
            >
              {darkMode ? <FiMoon /> : <FiSun />}
            </button>
          </div>
          <div className={styles.menuIcon}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              aria-label="Open mobile menu"
              tabIndex={0}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleClose}
          PaperProps={{
            className: styles.mobileMenu,
            style: {
              borderRadius: '1rem',
              background: 'var(--paper)',
              boxShadow: '0 8px 32px rgba(16,185,129,0.13)',
            },
          }}
          ModalProps={{ keepMounted: true }}
        >
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <RouterLink
                key={link.to}
                to={link.to}
                className={classNames(styles.mobileLinkBtn, {
                  [styles.active]: location.pathname === link.to,
                })}
                onClick={handleClose}
              >
                {link.label}
              </RouterLink>
            ))}
          </div>
          <div className={styles.mobileSocial}>
            <a
              href="https://linkedin.com/in/padwaldeepen"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/padwaldeepen"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
            >
              <FaGithub />
            </a>
            <a
              href="mailto:padwaldeepen@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
            >
              <FaEnvelope />
            </a>
            <button
              onClick={toggleTheme}
              className={classNames(styles.socialBtn, styles.themeToggleBtn)}
            >
              {darkMode ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
