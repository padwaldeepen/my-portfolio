import { useEffect, useState } from 'react';
import { Box, Typography, IconButton, Tooltip } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { navItems, profile } from '../../data';
import { fonts } from '../../theme';

export const DesktopNav = () => {
  const [active, setActive] = useState(navItems[0]?.id ?? 'about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 250) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleKeyDown = (id: string) => (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTo(id);
    }
  };

  return (
    <Box
      component="nav"
      aria-label="Section navigation"
      sx={{
        display: { xs: 'none', lg: 'flex' },
        position: 'sticky',
        top: 0,
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'space-between',
        py: 5,
      }}
    >
      {/* Logo + Name */}
      <Box>
        {/* LOGO PLACEHOLDER — replace with your SVG */}
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            bgcolor: 'text.primary',
            color: 'background.default',
            fontWeight: 800,
            fontSize: '1rem',
            fontFamily: fonts.mono,
            letterSpacing: '-0.02em',
            borderRadius: 1,
            mb: 2.5,
          }}
        >
          DP
        </Box>

        <Typography
          sx={{
            fontWeight: 800,
            fontSize: '2.25rem',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}
        >
          {profile.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontFamily: fonts.mono,
            color: 'text.secondary',
            fontSize: '0.75rem',
            display: 'block',
            mt: 0.5,
          }}
        >
          {profile.role}
        </Typography>
      </Box>

      {/* Nav items */}
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <Box component="li" key={item.id} sx={{ mb: 1.5 }}>
              <Box
                onClick={() => scrollTo(item.id)}
                onKeyDown={handleKeyDown(item.id)}
                tabIndex={0}
                role="button"
                aria-current={isActive ? 'true' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  cursor: 'pointer',
                  fontFamily: fonts.mono,
                  fontSize: '0.8rem',
                  color: isActive ? 'text.primary' : 'text.secondary',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                <Box
                  sx={{
                    width: isActive ? 26 : 16,
                    height: isActive ? 3 : 1,
                    borderRadius: 1,
                    bgcolor: isActive ? 'primary.main' : 'text.primary',
                    opacity: isActive ? 1 : 0.25,
                    transition:
                      'width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, opacity 0.3s ease',
                  }}
                />
                {item.label}
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* Social icons */}
      <Box sx={{ display: 'flex', gap: 1.5 }}>
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
    </Box>
  );
};
