import { Box, Typography, useTheme } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { skills } from '../../data';
import { fonts } from '../../theme';

interface BentoCardProps {
  title: string;
  items: string[];
  featured?: boolean;
  wide?: boolean;
}

const BentoCard = ({ title, items, featured = false, wide = false }: BentoCardProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  // Featured card is always inverted: dark bg on light mode, light bg on dark mode
  const featuredBg = isDark ? '#e7ecf3' : '#10141c';
  const featuredText = isDark ? '#10141c' : '#e7ecf3';
  const featuredSubtext = isDark ? '#55606f' : '#94a1b2';
  const featuredChipBg = isDark ? 'rgba(16,20,28,0.1)' : 'rgba(255,255,255,0.12)';
  const featuredChipBorder = isDark ? 'rgba(16,20,28,0.2)' : 'rgba(255,255,255,0.2)';
  const featuredChipHover = isDark ? 'rgba(16,20,28,0.2)' : 'rgba(255,255,255,0.22)';

  return (
    <Box
      sx={{
        gridColumn: wide ? { xs: 'span 1', sm: 'span 2' } : 'span 1',
        p: { xs: 2, sm: 2.5 },
        borderRadius: 1.5,
        border: '1px solid',
        borderColor: featured ? 'transparent' : 'divider',
        bgcolor: featured ? featuredBg : 'action.hover',
        color: featured ? featuredText : 'inherit',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: featured
            ? '0 16px 40px rgba(0,0,0,0.25)'
            : '0 8px 24px rgba(0,0,0,0.1)',
        },
        '&::before': featured
          ? {
              content: '""',
              position: 'absolute',
              inset: 0,
              background: isDark
                ? 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(16,20,28,0.08), transparent)'
                : 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,255,255,0.1), transparent)',
              pointerEvents: 'none',
            }
          : undefined,
      }}
    >
      <Typography
        variant="overline"
        sx={{
          fontFamily: fonts.mono,
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          color: featured ? featuredSubtext : 'text.secondary',
          display: 'block',
          mb: 1.5,
        }}
      >
        {title}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {items.map((item) => (
          <Box
            key={item}
            className="skill-chip"
            sx={{
              fontFamily: fonts.mono,
              fontSize: '0.7rem',
              px: 1.25,
              py: 0.4,
              borderRadius: 1,
              bgcolor: featured ? featuredChipBg : 'background.paper',
              color: featured ? featuredText : 'text.primary',
              border: '1px solid',
              borderColor: featured ? featuredChipBorder : 'divider',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              '&:hover': {
                bgcolor: featured ? featuredChipHover : 'action.selected',
                transform: 'scale(1.05)',
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const allSkillItems = [
  ...skills.languages,
  ...skills.frontend,
  ...skills.backend,
  ...skills.ai,
  ...skills.databases,
  ...skills.tools,
  ...skills.cloud,
];

export const Skills = () => {
  const theme = useTheme();
  const bgColor = theme.palette.background.default;

  return (
    <Box component="section" id="skills" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="04">Skills</SectionLabel>
      <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Tools & technologies
      </Typography>

      {/* Bento grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 2,
          mb: 4,
        }}
      >
        {/* Languages — wide */}
        <BentoCard title="Languages" items={skills.languages} wide />
        {/* AI — featured */}
        <BentoCard title="AI & GenAI" items={skills.ai} featured />
        {/* Frontend */}
        <BentoCard title="Frontend" items={skills.frontend} />
        {/* Backend */}
        <BentoCard title="Backend" items={skills.backend} />
        {/* Databases */}
        <BentoCard title="Databases" items={skills.databases} />
        {/* Cloud */}
        <BentoCard title="Cloud" items={skills.cloud} />
        {/* Tools — wide */}
        <BentoCard title="Tools & Workflow" items={skills.tools} wide />
      </Box>

      {/* Marquee ticker */}
      <Box
        sx={{
          overflow: 'hidden',
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: 1.5,
          mx: { xs: -2, sm: 0 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: `linear-gradient(to right, ${bgColor}, transparent)`,
            zIndex: 1,
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 60,
            background: `linear-gradient(to left, ${bgColor}, transparent)`,
            zIndex: 1,
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          className="marquee-track"
          sx={{ display: 'flex', width: 'max-content', gap: 3 }}
        >
          {[...allSkillItems, ...allSkillItems, ...allSkillItems].map((item, idx) => (
            <Typography
              key={`${item}-${idx}`}
              sx={{
                fontFamily: fonts.mono,
                fontSize: '0.7rem',
                color: 'text.secondary',
                whiteSpace: 'nowrap',
                letterSpacing: '0.05em',
                userSelect: 'none',
              }}
            >
              {item}
              <Box component="span" sx={{ ml: 3, opacity: 0.3 }}>
                /
              </Box>
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
