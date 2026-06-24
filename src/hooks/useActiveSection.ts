import { useState, useEffect } from 'react';
import { navItems } from '../data';

export const useActiveSection = () => {
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

  return active;
};
