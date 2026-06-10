import React from 'react';
import { motion } from 'framer-motion';
import {
  ProjectsContainer,
  ProjectsTitle,
  ProjectsGrid,
  ProjectCard,
  ProjectCardContent,
  ProjectHeader,
  ProjectTitle,
  ProjectStatusChip,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectActions,
  ProjectButton,
} from './Projects.styles';

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
    <ProjectsContainer>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProjectsTitle variant="h2">
          Featured Projects
        </ProjectsTitle>
      </motion.div>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectCard>
              <ProjectCardContent>
                <ProjectHeader>
                  <ProjectTitle variant="h5">
                    {project.title}
                  </ProjectTitle>
                  <ProjectStatusChip
                    label={project.status}
                    size="small"
                    color={project.status === 'Completed' ? 'secondary' : 'primary'}
                  />
                </ProjectHeader>
                <ProjectDescription variant="body2">
                  {project.description}
                </ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, tagIndex) => (
                    <ProjectTag
                      key={tagIndex}
                      label={tag}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </ProjectTags>
              </ProjectCardContent>
              <ProjectActions>
                <ProjectButton
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </ProjectButton>
              </ProjectActions>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};