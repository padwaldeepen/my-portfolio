import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Box } from '@mui/material';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  id?: string;
}

export const Reveal = ({ children, delay = 0, id }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      id={id}
      className={`reveal${visible ? ' is-visible' : ''}`}
      sx={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Box>
  );
};
