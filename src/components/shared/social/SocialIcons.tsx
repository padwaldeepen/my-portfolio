import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './SocialIcons.module.scss';

interface SocialIconsProps {
  className?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ className }) => (
  <div className={`${styles.socialIcons} ${className || ''}`.trim()}>
    <a
      href="https://www.linkedin.com/in/padwaldeepen/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      tabIndex={0}
      className={styles.iconLink}
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/padwaldeepen"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      tabIndex={0}
      className={styles.iconLink}
    >
      <FaGithub />
    </a>
    <a
      href="mailto:padwaldeepen@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      tabIndex={0}
      className={styles.iconLink}
    >
      <FaEnvelope />
    </a>
  </div>
);

export default SocialIcons;
