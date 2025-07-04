import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#424242', light: '#686868', dark: '#292929', contrastText: '#FAFAFA' },
    secondary: { main: '#686868', light: '#FAFAFA', dark: '#292929', contrastText: '#FAFAFA' },
    success: { main: '#10b981', light: '#34d399', dark: '#059669', contrastText: '#fff' },
    background: { default: '#FAFAFA', paper: '#FFFFFF' },
    text: { primary: '#131313', secondary: '#686868' },
    divider: '#686868',
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#424242', light: '#686868', dark: '#292929', contrastText: '#FAFAFA' },
    secondary: { main: '#686868', light: '#FAFAFA', dark: '#292929', contrastText: '#FAFAFA' },
    success: { main: '#10b981', light: '#34d399', dark: '#059669', contrastText: '#fff' },
    background: { default: '#131313', paper: '#292929' },
    text: { primary: '#FAFAFA', secondary: '#686868' },
    divider: '#686868',
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});
