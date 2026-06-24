import { useState, useEffect, useRef } from 'react';
import { Box, useTheme } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import WorkIcon from '@mui/icons-material/Work';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SchoolIcon from '@mui/icons-material/School';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailIcon from '@mui/icons-material/Email';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import CodeIcon from '@mui/icons-material/Code';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollTo } from '../../utils/scrollTo';
import { navItems } from '../../data';

const icons: Record<string, [React.ElementType, React.ElementType]> = {
  about: [PersonOutlineOutlinedIcon, PersonIcon],
  experience: [WorkOutlineOutlinedIcon, WorkIcon],
  education: [SchoolOutlinedIcon, SchoolIcon],
  skills: [CodeOutlinedIcon, CodeIcon],
  work: [LayersOutlinedIcon, LayersIcon],
  contact: [EmailOutlinedIcon, EmailIcon],
};

export const BottomNav = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const active = useActiveSection();
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll.current || current < 50);
      lastScroll.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillBg = isDark ? 'rgba(18, 24, 38, 0.8)' : 'rgba(250, 251, 252, 0.85)';
  const activeChipBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.07)';
  const hoverBg = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)';

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
          gap: 0.25,
          px: 1,
          py: 0.75,
          borderRadius: 4,
          bgcolor: pillBg,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid',
          borderColor: 'divider',
          pointerEvents: 'auto',
          boxShadow: isDark ? '0 8px 32px rgba(0,0,0,0.4)' : '0 8px 32px rgba(0,0,0,0.1)',
        }}
      >
        {navItems.map((item) => {
          const isActive = active === item.id;
          const iconPair = icons[item.id];
          if (!iconPair) return null;
          const [Outline, Filled] = iconPair;

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
                width: 44,
                height: 44,
                borderRadius: 2,
                cursor: 'pointer',
                color: isActive ? 'text.primary' : 'text.secondary',
                bgcolor: isActive ? activeChipBg : 'transparent',
                transition:
                  'color 0.25s, background-color 0.25s, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: hoverBg,
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
