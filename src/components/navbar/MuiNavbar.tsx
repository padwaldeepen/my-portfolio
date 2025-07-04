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

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
];

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

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <AppBar position="sticky" className={styles.navbarRoot} elevation={0}>
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
          <div className={styles.menuIcon}>
            <IconButton
              onClick={handleMenu}
              size="large"
              aria-label="Open mobile menu"
              tabIndex={0}
            >
              <MenuIcon />
            </IconButton>
          </div>
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
            style: {
              boxShadow: '0 8px 32px rgba(16,185,129,0.13)',
              borderRadius: '0.8rem',
              minWidth: 180,
            },
            'aria-label': 'Mobile navigation menu',
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
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
