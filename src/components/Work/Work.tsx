import { Box, Typography, Button } from '@mui/material';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { projects } from '../../data';
import { fonts } from '../../theme';

export const Work = () => {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="04">Projects</SectionLabel>
      {projects.map((project) => (
        <Box key={project.title} sx={{ mb: 5 }}>
          <Box
            sx={{
              borderRadius: 2,
              overflow: 'hidden',
              mb: 2,
              bgcolor: 'background.paper',
              aspectRatio: '16 / 9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {project.title}
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ mb: 0.5 }}>
            {project.title}
          </Typography>
          <Typography variant="caption" sx={{ fontFamily: fonts.mono, color: 'text.secondary' }}>
            {project.year}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, mb: 1.5 }}>
            {project.description}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
            {project.tags.map((tag) => (
              <Typography
                key={tag}
                variant="caption"
                sx={{
                  fontFamily: fonts.mono,
                  fontSize: '0.65rem',
                  px: 1.25,
                  py: 0.35,
                  borderRadius: 1,
                  bgcolor: 'action.hover',
                  color: 'text.secondary',
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {project.liveLink && (
              <Button
                variant="outlined"
                size="small"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </Button>
            )}
            {project.repoLink && (
              <Button
                variant="outlined"
                size="small"
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </Button>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
