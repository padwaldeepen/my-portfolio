import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { fonts } from '../../theme';
import { profile } from '../../data';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 6, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mb: 2 }}>
        {profile.socials.github && (
          <Tooltip title="GitHub" arrow>
            <IconButton
              component="a"
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              size="small"
              sx={{
                color: 'text.secondary',
                '&:hover': { color: 'primary.main', transform: 'scale(1.15)' },
                transition: 'color 0.2s, transform 0.2s',
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="LinkedIn" arrow>
          <IconButton
            component="a"
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'scale(1.15)' },
              transition: 'color 0.2s, transform 0.2s',
            }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email" arrow>
          <IconButton
            component="a"
            href={`mailto:${profile.email}`}
            aria-label="Email"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': { color: 'primary.main', transform: 'scale(1.15)' },
              transition: 'color 0.2s, transform 0.2s',
            }}
          >
            <EmailOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <Typography
        variant="caption"
        sx={{ fontFamily: fonts.mono, color: 'text.secondary', fontSize: '0.65rem' }}
      >
        &copy; {new Date().getFullYear()} Deepen Padwal. All rights reserved.
      </Typography>
    </Box>
  );
};
