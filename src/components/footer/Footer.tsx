import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              DP<span className={styles.dot}>.</span>
            </span>
            <p className={styles.tagline}>Building the future with AI and code.</p>
          </div>

          <div className={styles.links}>
            <a href="#hero" className={styles.link}>
              Home
            </a>
            <a href="#about" className={styles.link}>
              About
            </a>
            <a href="#skills" className={styles.link}>
              Skills
            </a>
            <a href="#experience" className={styles.link}>
              Experience
            </a>
            <a href="#contact" className={styles.link}>
              Contact
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href="https://github.com/padwaldeepen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/padwaldeepen"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:padwaldeepen@gmail.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>{currentYear} Deepen Padwal. All rights reserved.</p>
          <p className={styles.madeWith}>
            Crafted with <FaHeart className={styles.heart} /> in Tampa, FL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
