import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import classNames from 'classnames';
import styles from './MuiNavbar.module.scss';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

export const SocialIcons: React.FC<{ className?: string }> = ({ className }) => (
  <div className={classNames(styles.socialIcons, className)}>
    <a
      href="https://www.linkedin.com/in/padwaldeepen/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className={styles.socialBtn}
      tabIndex={0}
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/padwaldeepen"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className={styles.socialBtn}
      tabIndex={0}
    >
      <FaGithub />
    </a>
    <a
      href="mailto:padwaldeepen@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      className={styles.socialBtn}
      tabIndex={0}
    >
      <FaEnvelope />
    </a>
  </div>
);

interface MuiNavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MuiNavbar: React.FC<MuiNavbarProps> = ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0} className={styles.navbarRoot}>
      <Toolbar className={styles.toolbar}>
        <RouterLink to="/" className={styles.brand} aria-label="Home">
          Deepen Padwal
        </RouterLink>
        {/* Desktop Nav Links */}
        <nav className={styles.navLinks} aria-label="Main navigation">
          {navLinks.map((link) => (
            <RouterLink
              key={link.to}
              to={link.to}
              className={classNames(styles.linkBtn, {
                [styles.active]: location.pathname === link.to,
              })}
              tabIndex={0}
              aria-current={location.pathname === link.to ? 'page' : undefined}
            >
              {link.label}
            </RouterLink>
          ))}
          <SocialIcons />
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={handleToggleTheme}
            className={styles.linkBtn}
            style={{ marginLeft: '1rem', fontSize: '1.1rem' }}
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>
        {/* Mobile Hamburger */}
        <div className={styles.menuIcon}>
          <IconButton
            edge="end"
            aria-label="Open menu"
            onClick={handleMenu}
            size="large"
            className={styles.socialBtn}
          >
            <MenuIcon />
          </IconButton>
        </div>
        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleClose}
          keepMounted
          className={styles.mobileMenu}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          PaperProps={{
            className: styles.mobileMenu,
            style: { boxShadow: 'none' },
          }}
        >
          <div className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <RouterLink
                key={link.to}
                to={link.to}
                className={classNames(styles.mobileLinkBtn, {
                  [styles.active]: location.pathname === link.to,
                })}
                tabIndex={0}
                aria-current={location.pathname === link.to ? 'page' : undefined}
                onClick={handleClose}
              >
                {link.label}
              </RouterLink>
            ))}
          </div>
          <div className={styles.mobileSocial}>
            <SocialIcons />
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={handleToggleTheme}
              className={styles.linkBtn}
              style={{ marginLeft: '0.5rem', fontSize: '1.1rem' }}
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
