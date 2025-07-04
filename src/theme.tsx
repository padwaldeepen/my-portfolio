import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#424242', light: '#686868', dark: '#292929', contrastText: '#FAFAFA' },
    secondary: { main: '#686868', light: '#FAFAFA', dark: '#292929', contrastText: '#FAFAFA' },
    background: { default: '#FAFAFA', paper: '#292929' },
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
    background: { default: '#131313', paper: '#292929' },
    text: { primary: '#FAFAFA', secondary: '#686868' },
    divider: '#686868',
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});
