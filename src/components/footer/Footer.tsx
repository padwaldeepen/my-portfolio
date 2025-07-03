import React from 'react';
import { SocialIcons } from '../navbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import styles from './Footer.module.scss';
import { useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      className={styles['footerRoot']}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary,
        borderTop: `1px solid ${theme.palette.divider}`,
        px: { xs: 2, md: 6 },
        py: { xs: 3, md: 4 },
        mt: 'auto',
      }}
    >
      {/* Desktop/Tablet Footer */}
      <Box
        className={styles['footerContent']}
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexWrap: 'nowrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: { xs: 2, md: 8 },
          mb: 2,
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        <Box className={styles['footerSection']} sx={{ minWidth: 220, textAlign: 'left', flex: 1 }}>
          <Typography variant="h6" component="h4" fontWeight={700} gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body2" sx={{ mb: 0.5 }}>
            Florida, USA
          </Typography>
          <Typography variant="body2">
            <Link href="mailto:padwaldeepen@gmail.com" underline="hover" color="inherit">
              padwaldeepen@gmail.com
            </Link>
          </Typography>
        </Box>
        <Box
          className={styles['footerSection']}
          sx={{
            minWidth: 220,
            textAlign: 'right',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <Typography variant="h6" component="h4" fontWeight={700} gutterBottom>
            Connect
          </Typography>
          <Box className={styles['socialIcons']} sx={{ justifyContent: 'flex-end' }}>
            <SocialIcons />
          </Box>
        </Box>
      </Box>
      {/* Mobile Footer: Only copyright */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Typography variant="body2" align="center" className={styles['footerBottom']}>
          &copy; 2025 Deepen Padwal. All rights reserved.
        </Typography>
      </Box>
      {/* Desktop/Tablet copyright */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Typography
          variant="body2"
          align="center"
          className={styles['footerBottom']}
          sx={{ mt: 2 }}
        >
          &copy; {new Date().getFullYear()} Deepen Padwal. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
