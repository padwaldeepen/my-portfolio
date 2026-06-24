import { createTheme, type ThemeOptions } from '@mui/material/styles';

const sans = '"Geist Sans", system-ui, -apple-system, sans-serif';
const mono = '"Geist Mono", ui-monospace, monospace';
const serif = '"Instrument Serif", Georgia, serif';

const baseOptions: ThemeOptions = {
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: sans,
    overline: {
      fontFamily: mono,
      letterSpacing: '0.18em',
      fontSize: '0.7rem',
      fontWeight: 500,
    },
    h1: { fontWeight: 600, letterSpacing: '-0.03em' },
    h2: { fontWeight: 600, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600, letterSpacing: '-0.02em' },
    h4: { fontWeight: 600, letterSpacing: '-0.01em' },
    button: { textTransform: 'none' as const, fontWeight: 500 },
  },
};

export const lightTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: 'light',
    primary: { main: '#2563eb', light: '#3b82f6', dark: '#1d4ed8', contrastText: '#ffffff' },
    background: { default: '#fafbfc', paper: '#f1f4f9' },
    text: { primary: '#10141c', secondary: '#55606f' },
    divider: 'rgba(16, 20, 28, 0.1)',
  },
});

export const darkTheme = createTheme({
  ...baseOptions,
  palette: {
    mode: 'dark',
    primary: { main: '#3b82f6', light: '#60a5fa', dark: '#2563eb', contrastText: '#0b0f17' },
    background: { default: '#0b0f17', paper: '#121826' },
    text: { primary: '#e7ecf3', secondary: '#94a1b2' },
    divider: 'rgba(231, 236, 243, 0.1)',
  },
});

export const fonts = { sans, mono, serif };
