import React, { useState, memo } from 'react';
import { Box, Paper, Typography, Chip, IconButton, Snackbar, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Phone as PhoneIcon,
  ContentCopy as CopyIcon,
  Check as CheckIcon,
  OpenInNew as ExternalIcon,
} from '@mui/icons-material';
import styles from './ContactSection.module.scss';

interface ContactCard {
  id: string;
  title: string;
  subtitle: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  color: string;
  action?: 'copy' | 'external';
  description?: string;
}

const contactCards: ContactCard[] = [
  {
    id: 'email',
    title: 'Email',
    subtitle: "Let's get in touch",
    value: 'padwaldeepen@gmail.com',
    href: 'mailto:padwaldeepen@gmail.com',
    icon: <EmailIcon />,
    color: '#EA4335',
    action: 'copy',
    description: 'I typically respond within 24 hours',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: 'Professional networking',
    value: 'linkedin.com/in/padwaldeepen',
    href: 'https://www.linkedin.com/in/padwaldeepen/',
    icon: <LinkedInIcon />,
    color: '#0077B5',
    action: 'external',
    description: 'Connect for job opportunities and career growth',
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: 'Check out my code',
    value: 'github.com/deepenpadwal',
    href: 'https://github.com/deepenpadwal',
    icon: <GitHubIcon />,
    color: '#333333',
    action: 'external',
    description: 'Explore my projects and contributions',
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

const ContactCard = memo(({ card, hovered, setHoveredCard, handleCopyEmail }: any) => (
  <motion.div
    key={card.id}
    variants={cardVariants}
    className={styles.cardWrapper}
    onHoverStart={() => setHoveredCard(card.id)}
    onHoverEnd={() => setHoveredCard(null)}
    tabIndex={0}
    role="button"
    aria-label={card.title}
  >
    <Paper className={styles.contactCard} elevation={2}>
      {/* Card Header */}
      <Box className={styles.cardHeader}>
        <Box className={styles.iconContainer} style={{ backgroundColor: card.color }}>
          {card.icon}
        </Box>
        <Box className={styles.headerContent}>
          <Typography variant="h5" className={styles.cardTitle}>
            {card.title}
          </Typography>
          <Typography variant="body2" className={styles.cardSubtitle}>
            {card.subtitle}
          </Typography>
        </Box>
      </Box>
      {/* Card Content */}
      <Box className={styles.cardContent}>
        <Typography variant="body1" className={styles.cardValue}>
          {card.value}
        </Typography>
        <Typography variant="body2" className={styles.cardDescription}>
          {card.description}
        </Typography>
      </Box>
      {/* Card Actions */}
      {card.action === 'copy' ? (
        <Tooltip title="Copy email address">
          <IconButton
            onClick={handleCopyEmail}
            className={styles.actionButton}
            aria-label="Copy email address"
          >
            <CopyIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Open in new tab">
          <IconButton
            component="a"
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionButton}
            aria-label={`Open ${card.title} in new tab`}
          >
            <ExternalIcon />
          </IconButton>
        </Tooltip>
      )}
      <motion.a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.primaryAction}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {card.action === 'copy' ? 'Send Email' : 'Visit Profile'}
      </motion.a>
      {/* Hover Overlay */}
      {hovered === card.id && (
        <motion.div
          className={styles.hoverOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </Paper>
  </motion.div>
));

const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('padwaldeepen@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Box className={styles.contactContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={styles.contactContent}
      >
        {/* Header Section */}
        <Box className={styles.headerSection}>
          <Typography variant="h2" className={styles.mainTitle}>
            Let's <span className={styles.coloredWord}>Connect</span>
          </Typography>
          <Typography variant="h6" className={styles.subtitle}>
            Ready to join a great team, discuss <span className={styles.coloredWord}>tech</span>, or
            just say hello? I'm actively seeking new job opportunities and interesting roles.
          </Typography>
          <Chip
            label="Open to New Roles"
            className={styles.availabilityChip}
            color="success"
            variant="outlined"
          />
        </Box>

        {/* Contact Cards Grid */}
        <Box className={styles.cardsGrid}>
          {contactCards.map((card) => (
            <ContactCard
              key={card.id}
              card={card}
              hovered={hoveredCard}
              setHoveredCard={setHoveredCard}
              handleCopyEmail={handleCopyEmail}
            />
          ))}
        </Box>

        {/* Call to Action */}
        <Box className={styles.ctaSection}>
          <Typography variant="h6" className={styles.ctaTitle}>
            Let's build something amazing together! 🚀
          </Typography>
          <Typography variant="body1" className={styles.ctaText}>
            Whether you have a position in mind or want to connect about career opportunities, I'd
            love to hear from you. Let's make something great happen!
          </Typography>
        </Box>
      </motion.div>

      {/* Success Snackbar */}
      <Snackbar
        open={copiedEmail}
        autoHideDuration={2000}
        onClose={() => setCopiedEmail(false)}
        message="Email copied to clipboard!"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        className={styles.snackbar}
      />
    </Box>
  );
};

export default ContactSection;
