import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkIcon from '@mui/icons-material/Work';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolIcon from '@mui/icons-material/School';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import { navItems } from '../../data';

const icons: Record<string, [React.ElementType, React.ElementType]> = {
  about: [PersonOutlineOutlinedIcon, PersonIcon],
  experience: [WorkOutlineOutlinedIcon, WorkIcon],
  education: [SchoolOutlinedIcon, SchoolIcon],
  contact: [EmailOutlinedIcon, EmailIcon],
};

export const BottomNav = () => {
  const [active, setActive] = useState(navItems[0]?.id ?? 'about');
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll.current || current < 50);
      lastScroll.current = current;

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

  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        justifyContent: 'center',
        pb: 2,
        pointerEvents: 'none',
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
        transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 0.5,
          px: 1.5,
          py: 1,
          borderRadius: 4,
          bgcolor: 'rgba(18, 24, 38, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid',
          borderColor: 'divider',
          pointerEvents: 'auto',
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.id;
          const [Outline, Filled] = icons[item.id];

          return (
            <Box
              key={item.id}
              onClick={() => scrollTo(item.id)}
              role="button"
              tabIndex={0}
              aria-current={isActive ? 'true' : undefined}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollTo(item.id);
                }
              }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 48,
                height: 48,
                borderRadius: 2,
                cursor: 'pointer',
                color: isActive ? 'text.primary' : 'text.secondary',
                bgcolor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                transition:
                  'color 0.25s, background-color 0.25s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              {isActive ? <Filled fontSize="small" /> : <Outline fontSize="small" />}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
