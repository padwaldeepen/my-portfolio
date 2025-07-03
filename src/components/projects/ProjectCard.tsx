import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '@mui/material/styles';

export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveDemoUrl,
}) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        minHeight: 260,
        boxShadow: theme.shadows[2],
        transition: 'box-shadow 0.2s',
        '&:hover': {
          boxShadow: theme.shadows[6],
        },
      }}
    >
      <Typography variant="h6" fontWeight={700} gutterBottom color="text.primary">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {techStack.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="small"
            sx={{
              bgcolor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light',
              color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.dark',
              fontWeight: 600,
            }}
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
        <Button
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<FaGithub />}
          variant="outlined"
          color="primary"
          sx={{ fontWeight: 600, textTransform: 'none' }}
        >
          GitHub
        </Button>
        <Button
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<FaExternalLinkAlt />}
          variant="contained"
          color="primary"
          sx={{ fontWeight: 600, textTransform: 'none' }}
        >
          Live Demo
        </Button>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
