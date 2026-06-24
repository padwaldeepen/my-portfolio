import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorMode } from '../../color-mode';

export const ThemeToggle = () => {
  const { mode, toggle } = useColorMode();

  return (
    <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      <IconButton
        onClick={toggle}
        aria-label="Toggle color mode"
        sx={{
          display: { xs: 'none', lg: 'inline-flex' },
          position: 'fixed',
          top: 24,
          right: 24,
          zIndex: 1200,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.default',
          backdropFilter: 'blur(8px)',
          '&:hover': { bgcolor: 'background.paper' },
        }}
      >
        {mode === 'dark' ? (
          <LightModeIcon fontSize="small" aria-hidden="true" />
        ) : (
          <DarkModeIcon fontSize="small" aria-hidden="true" />
        )}
      </IconButton>
    </Tooltip>
  );
};
