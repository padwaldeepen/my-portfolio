import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0891b2', light: '#22d3ee', dark: '#0e7490', contrastText: '#ffffff' },
    secondary: { main: '#475569', light: '#64748b', dark: '#334155', contrastText: '#ffffff' },
    success: { main: '#22c55e', light: '#4ade80', dark: '#16a34a', contrastText: '#ffffff' },
    background: { default: '#fafafa', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#475569' },
    divider: '#e2e8f0',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#22d3ee', light: '#67e8f9', dark: '#06b6d4', contrastText: '#0a0a0a' },
    secondary: { main: '#94a3b8', light: '#cbd5e1', dark: '#64748b', contrastText: '#0a0a0a' },
    success: { main: '#22c55e', light: '#4ade80', dark: '#16a34a', contrastText: '#ffffff' },
    background: { default: '#0a0a0a', paper: '#141414' },
    text: { primary: '#e2e8f0', secondary: '#94a3b8' },
    divider: '#1e293b',
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    h1: { fontWeight: 700, letterSpacing: '-0.02em' },
    h2: { fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 8,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});
