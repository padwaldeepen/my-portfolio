import { useEffect, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { stats, profile } from '../../data';
import { fonts } from '../../theme';

const bodySx = {
  color: 'text.secondary',
  fontSize: '1.1rem',
  lineHeight: 1.8,
  maxWidth: 640,
};

const useCountUp = (target: number, duration = 1600, inView: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView || target === 0) return;
    const startTime = performance.now();
    let rafId: number;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);
  return count;
};

interface StatCardProps {
  label: string;
  value: number | string;
  inView: boolean;
}

const StatCard = ({ label, value, inView }: StatCardProps) => {
  const isNumber = typeof value === 'number';
  const count = useCountUp(isNumber ? (value as number) : 0, 1600, inView && isNumber);

  return (
    <Box
      sx={{
        p: 2.5,
        borderRadius: 2,
        bgcolor: 'action.hover',
        border: '1px solid',
        borderColor: 'divider',
        textAlign: 'center',
        transition: 'border-color 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        '&:hover': {
          borderColor: 'text.secondary',
          transform: 'translateY(-3px)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '1.1rem', sm: '1.15rem', md: '1.25rem' },
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'text.primary',
          fontFamily: fonts.mono,
        }}
      >
        {isNumber ? count : value}
        {isNumber && (
          <Box component="span" sx={{ color: 'text.secondary', fontWeight: 400 }}>
            +
          </Box>
        )}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          fontFamily: fonts.mono,
          color: 'text.secondary',
          mt: 0.5,
          fontSize: '0.65rem',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export const About = () => {
  const [inView, setInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box component="section" id="about" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="01">About</SectionLabel>
      <SectionHeading mb={3}>Building AI-powered products people love to use</SectionHeading>
      <Typography sx={bodySx}>
        {profile.tagline} I turn complex models and data into{' '}
        <Box
          component="span"
          sx={{
            fontFamily: fonts.serif,
            fontStyle: 'italic',
            color: 'text.primary',
            fontSize: '1.2rem',
          }}
        >
          clean, dependable
        </Box>{' '}
        interfaces that people use every day. My focus is making advanced technology feel{' '}
        <Box
          component="span"
          sx={{
            fontFamily: fonts.serif,
            fontStyle: 'italic',
            color: 'text.primary',
            fontSize: '1.2rem',
          }}
        >
          simple and human
        </Box>
        .
      </Typography>
      <Typography sx={{ ...bodySx, mt: 3 }}>
        With a graduate background in computer science and several years shipping production
        software, I work comfortably across the stack — modeling data, integrating AI, and crafting
        the interface that ties it all together.
      </Typography>
      <Box
        ref={statsRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
          gap: 3,
          mt: 6,
        }}
      >
        {stats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} inView={inView} />
        ))}
      </Box>
    </Box>
  );
};
