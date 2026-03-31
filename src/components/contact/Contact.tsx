import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCopy, FiCheck, FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Contact.module.scss';

interface ContactLink {
  id: string;
  title: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  action: 'copy' | 'external';
}

const contactLinks: ContactLink[] = [
  {
    id: 'email',
    title: 'Email',
    value: 'padwaldeepen@gmail.com',
    href: 'mailto:padwaldeepen@gmail.com',
    icon: <FiMail />,
    action: 'copy',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    value: '/in/padwaldeepen',
    href: 'https://linkedin.com/in/padwaldeepen',
    icon: <FaLinkedin />,
    action: 'external',
  },
  {
    id: 'github',
    title: 'GitHub',
    value: '@padwaldeepen',
    href: 'https://github.com/padwaldeepen',
    icon: <FaGithub />,
    action: 'external',
  },
];

const Contact: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (value: string, id: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="contact" className={styles.contact}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className={styles.header}>
          <span className={styles.label}>Contact</span>
          <h2 className={styles.title}>
            Let&apos;s <span className={styles.highlight}>connect</span>
          </h2>
          <p className={styles.subtitle}>
            I&apos;m currently open to new opportunities and collaborations. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </motion.div>

        {/* Status Badge */}
        <motion.div variants={itemVariants} className={styles.statusBadge}>
          <span className={styles.statusDot} />
          <span>Open to new opportunities</span>
        </motion.div>

        {/* Contact Cards */}
        <motion.div variants={containerVariants} className={styles.cardsGrid}>
          {contactLinks.map((link) => (
            <motion.div
              key={link.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.cardIcon}>{link.icon}</div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>{link.title}</span>
                <span className={styles.cardValue}>{link.value}</span>
              </div>
              {link.action === 'copy' ? (
                <button
                  className={styles.cardAction}
                  onClick={() => handleCopy(link.value, link.id)}
                  aria-label={copiedId === link.id ? 'Copied' : 'Copy email'}
                >
                  {copiedId === link.id ? <FiCheck /> : <FiCopy />}
                </button>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardAction}
                  aria-label={`Open ${link.title}`}
                >
                  <FiExternalLink />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className={styles.cta}>
          <p className={styles.ctaText}>
            Looking forward to hearing from you!
          </p>
          <motion.a
            href="mailto:padwaldeepen@gmail.com"
            className={styles.ctaButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMail />
            Send me an email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
