import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#10b981', light: '#6ee7b7', dark: '#14b8a6', contrastText: '#fff' },
    secondary: { main: '#14b8a6', light: '#6ee7b7', dark: '#10b981', contrastText: '#fff' },
    background: { default: '#f0fdf4', paper: '#ffffff' },
    text: { primary: '#1f2937', secondary: '#6b7280' },
    divider: '#d1fae5',
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#10b981', light: '#6ee7b7', dark: '#14b8a6', contrastText: '#fff' },
    secondary: { main: '#14b8a6', light: '#6ee7b7', dark: '#10b981', contrastText: '#fff' },
    background: { default: '#18181b', paper: '#23232a' },
    text: { primary: '#f0fdf4', secondary: '#b5bfc9' },
    divider: '#14b8a6',
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});
