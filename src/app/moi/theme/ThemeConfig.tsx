import React, { type ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import { themeOptions } from '../theme/index';

export default function ThemeConfig({ children }: { children: ReactNode }) {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}