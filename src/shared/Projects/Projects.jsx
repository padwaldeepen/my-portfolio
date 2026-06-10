import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Agent Framework',
    description: 'A modular framework for building intelligent agents with skills and sub-agents. Features dynamic task delegation and MCP protocol integration.',
    tags: ['React', 'TypeScript', 'MCP', 'AI'],
    link: '#',
    status: 'In Development',
  },
  {
    title: 'Skill-Based Code Assistant',
    description: 'An advanced coding assistant that learns from user patterns and provides contextual code suggestions using specialized skills.',
    tags: ['Python', 'Machine Learning', 'VS Code Extension'],
    link: '#',
    status: 'Planning',
  },
  {
    title: 'Sub-Agent Orchestrator',
    description: 'A system for coordinating multiple AI sub-agents to handle complex workflows autonomously.',
    tags: ['Node.js', 'Microservices', 'AI Orchestration'],
    link: '#',
    status: 'Concept',
  },
  {
    title: 'Portfolio Redesign',
    description: 'This very portfolio - a minimalist, Apple-inspired design with smooth animations and DRY MUI theming.',
    tags: ['React', 'Material UI', 'Framer Motion'],
    link: '#',
    status: 'Completed',
  },
];

export const Projects = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        maxWidth: 1200,
        mx: 'auto',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          mb: 6,
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'background.paper',
                  border: (theme) => `1px solid ${theme.custom.colors.border}`,
                  borderRadius: 3,
                  boxShadow: 'custom.shadows.md',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 'custom.shadows.lg',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.status}
                      size="small"
                      sx={{
                        backgroundColor: project.status === 'Completed' ? 'secondary.main' : 'primary.main',
                        color: 'white',
                        fontWeight: 500,
                      }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.tags.map((tag, tagIndex) => (
                      <Chip
                        key={tagIndex}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'custom.colors.border',
                          color: 'text.secondary',
                          fontSize: '0.75rem',
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: 'primary.main',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                    }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};