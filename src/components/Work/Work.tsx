import { Box, Typography, Chip } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { projects } from '../../data';
import { fonts } from '../../theme';

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
  onEnter?: () => void;
  onLeave?: () => void;
}

const ProjectCard = ({ project, index, onEnter, onLeave }: ProjectCardProps) => (
  <Box
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    sx={{
      position: 'relative',
      borderRadius: 3,
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'divider',
      bgcolor: 'background.paper',
      transition:
        'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease, border-color 0.35s ease',
      cursor: 'default',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 24px 56px rgba(0,0,0,0.2)',
        borderColor: 'text.secondary',
        '& .project-image': {
          transform: 'scale(1.04)',
        },
        '& .project-overlay': {
          opacity: 1,
        },
      },
    }}
  >
    {/* Image */}
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '16 / 9',
        bgcolor: 'action.hover',
      }}
    >
      <Box
        component="img"
        src={project.image}
        alt={project.title}
        className="project-image"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      />
      {/* Overlay on hover */}
      <Box
        className="project-overlay"
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.35)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: fonts.mono,
            fontSize: '0.75rem',
            color: '#fff',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          View Project
        </Typography>
      </Box>
      {/* Year badge */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          bgcolor: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(8px)',
          px: 1.25,
          py: 0.4,
          borderRadius: 1,
        }}
      >
        <Typography
          sx={{ fontFamily: fonts.mono, fontSize: '0.65rem', color: '#fff', letterSpacing: '0.1em' }}
        >
          {project.year}
        </Typography>
      </Box>
      {/* Index number */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          left: 12,
          width: 28,
          height: 28,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.12)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ fontFamily: fonts.mono, fontSize: '0.6rem', color: '#fff' }}>
          0{index + 1}
        </Typography>
      </Box>
    </Box>

    {/* Content */}
    <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
      <Typography
        variant="h4"
        sx={{ mb: 0.75, fontSize: { xs: '1rem', md: '1.1rem' }, letterSpacing: '-0.01em' }}
      >
        {project.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 2, fontSize: '0.875rem' }}
      >
        {project.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
        {project.tags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            size="small"
            sx={{
              fontFamily: fonts.mono,
              fontSize: '0.62rem',
              height: 22,
              bgcolor: 'action.hover',
              color: 'text.secondary',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              '& .MuiChip-label': { px: 1 },
            }}
          />
        ))}
      </Box>
    </Box>
  </Box>
);

interface WorkProps {
  onCardEnter?: () => void;
  onCardLeave?: () => void;
}

export const Work = ({ onCardEnter, onCardLeave }: WorkProps) => {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="05">Projects</SectionLabel>
      <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: '1.6rem', md: '2rem' } }}>
        Things I&apos;ve built
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'text.secondary', maxWidth: 540, mb: 6, lineHeight: 1.7 }}
      >
        A selection of projects spanning AI automation, data visualization, and enterprise software.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}
      >
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={idx}
            onEnter={onCardEnter}
            onLeave={onCardLeave}
          />
        ))}
      </Box>
    </Box>
  );
};
