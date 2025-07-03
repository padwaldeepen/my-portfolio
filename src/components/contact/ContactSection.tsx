import { Box, Paper, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './ContactSection.module.scss';

const CONTACTS = [
  {
    href: 'mailto:padwaldeepen@gmail.com',
    label: 'Email',
    icon: <MdEmail aria-hidden="true" />,
    className: styles.iconLink + ' ' + styles['iconLink--email'],
  },
  {
    href: 'https://www.linkedin.com/in/padwaldeepen/',
    label: 'LinkedIn',
    icon: <FaLinkedin aria-hidden="true" />,
    className: styles.iconLink + ' ' + styles['iconLink--linkedin'],
  },
  {
    href: 'https://github.com/deepenpadwal',
    label: 'GitHub',
    icon: <FaGithub aria-hidden="true" />,
    className: styles.iconLink + ' ' + styles['iconLink--github'],
  },
];

const ContactSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box className={styles.contactSectionBox}>
      <section className={styles.contactLinksSection} aria-label="Contact section">
        <Paper
          elevation={6}
          className={styles.contactPaper}
          sx={{
            p: { xs: 2.5, md: 5 },
            borderRadius: 6,
            background: `linear-gradient(135deg, ${theme.palette.background.paper} 80%, ${theme.palette.primary.light} 100%)`,
            boxShadow: '0 8px 32px 0 rgba(80,80,180,0.10), 0 1.5px 8px 0 rgba(80,80,180,0.08)',
            border: `2.5px solid ${theme.palette.primary.main}`,
            position: 'relative',
            overflow: 'hidden',
            transition: 'box-shadow 0.3s cubic-bezier(.4,1.3,.6,1)',
            '&:hover': {
              boxShadow: '0 12px 48px 0 rgba(80,80,180,0.18), 0 2px 12px 0 rgba(80,80,180,0.12)',
            },
          }}
        >
          <Box className={styles.contactPaperContent}>
            <h1 className={styles.contactLinksTitle}>Let’s Connect</h1>
            <div className={styles.contactLinksSubtext}>
              Reach out if you’d like to collaborate, chat tech, or grab a virtual coffee ☕.
            </div>
            <Box className={styles.linksRow}>
              {CONTACTS.map(({ href, label, icon, className }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  whileHover={{ scale: 1.13, boxShadow: '0 4px 32px 0 rgba(25,118,210,0.18)' }}
                  whileTap={{ scale: 0.93 }}
                  tabIndex={0}
                >
                  {icon}
                  <span className={styles.iconLabel}>{label}</span>
                </motion.a>
              ))}
            </Box>
          </Box>
        </Paper>
      </section>
    </Box>
  );
};

export default ContactSection;
