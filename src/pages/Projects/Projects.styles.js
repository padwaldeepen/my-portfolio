import { styled, Box, Typography, Card, CardContent, CardActions, Button, Chip } from '@mui/material';

export const ProjectsContainer = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: 1200,
  margin: '0 auto',
}));

export const ProjectsTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  fontWeight: 700,
  color: theme.palette.text.primary,
}));

export const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(4),
}));

export const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.paper,
  border: `1px solid ${theme.custom.colors.border}`,
  borderRadius: theme.shape.borderRadius * 3,
  boxShadow: theme.custom.shadows.md,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: theme.custom.shadows.lg,
    transform: 'translateY(-4px)',
  },
}));

export const ProjectCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

export const ProjectHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: theme.spacing(2),
}));

export const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const ProjectStatusChip = styled(Chip)(() => ({
  fontWeight: 500,
}));

export const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  lineHeight: 1.6,
}));

export const ProjectTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

export const ProjectTag = styled(Chip)(({ theme }) => ({
  borderColor: theme.custom.colors.border,
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
}));

export const ProjectActions = styled(CardActions)(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: 0,
}));

export const ProjectButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));