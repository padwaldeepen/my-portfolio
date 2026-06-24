import { useState } from 'react';
import { Box, Typography, Divider, Collapse, useMediaQuery, useTheme, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { experience } from '../../data';
import { fonts } from '../../theme';

interface JobCardProps {
  job: (typeof experience)[number];
  idx: number;
  isMobile: boolean;
}

const JobCard = ({ job, idx, isMobile }: JobCardProps) => {
  const [open, setOpen] = useState(false);

  const content = (
    <>
      {job.points.length > 0 && (
        <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 1.5 }}>
          {job.points.map((point) => (
            <Typography
              component="li"
              key={point}
              variant="body2"
              sx={{ color: 'text.secondary', mb: 0.5 }}
            >
              {point}
            </Typography>
          ))}
        </Box>
      )}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {job.stacks.map((tech) => (
          <Typography
            key={tech}
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
            {tech}
          </Typography>
        ))}
      </Box>
    </>
  );

  return (
    <Box>
      {idx > 0 && <Divider sx={{ my: 5 }} />}
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="caption"
          sx={{ fontFamily: fonts.mono, color: 'text.secondary', fontSize: '0.75rem' }}
        >
          {job.period}
        </Typography>
        <Typography variant="h4" sx={{ mt: 0.5, mb: 0.25 }}>
          {job.role}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', fontFamily: fonts.mono, fontSize: '0.8rem', mb: 1.5 }}
        >
          {job.company}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
        {job.summary}
      </Typography>
      {isMobile ? (
        <>
          <Collapse in={open} timeout={400}>
            {content}
          </Collapse>
          <Button
            size="small"
            onClick={() => setOpen(!open)}
            endIcon={
              <ExpandMoreIcon
                sx={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
              />
            }
            sx={{ mt: 0.5, fontFamily: fonts.mono, fontSize: '0.7rem', textTransform: 'none' }}
          >
            {open ? 'Show less' : 'Tap to expand'}
          </Button>
        </>
      ) : (
        content
      )}
    </Box>
  );
};

export const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box component="section" id="experience" sx={{ py: { xs: 6, md: 10 } }}>
      <SectionLabel index="02">Experience</SectionLabel>
      <Typography variant="h2" sx={{ mb: 5, fontSize: { xs: '1.35rem', md: '2rem' } }}>
        Where I&apos;ve worked
      </Typography>
      {experience.map((job, idx) => (
        <Box key={job.period + job.company}>
          <JobCard job={job} idx={idx} isMobile={isMobile} />
        </Box>
      ))}
    </Box>
  );
};
