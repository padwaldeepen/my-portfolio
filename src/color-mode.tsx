import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

type Mode = 'light' | 'dark';

interface ColorModeContextValue {
  mode: Mode;
  toggle: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'dark',
  toggle: () => {},
});

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('color-mode') as Mode | null;
    if (stored === 'light' || stored === 'dark') {
      setMode(stored);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setMode('light');
    }
  }, []);

  const value = useMemo(
    () => ({
      mode,
      toggle: () => {
        setMode((prev) => {
          const next = prev === 'dark' ? 'light' : 'dark';
          localStorage.setItem('color-mode', next);
          return next;
        });
      },
    }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
