import { PaletteMode, createTheme } from '@mui/material';

import RalewayWoff2 from '../app/moi/assets/fonts/Graphik-Regular-Web.woff2';

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: 'Graphik LCG, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Graphik LCG';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Graphik'), local('Graphik-Regular-Web'), url(${RalewayWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: `${getComputedStyle(document.documentElement).getPropertyValue('--mainGreen')}`.trim(),
          },
        }
      : {
          // palette values for dark mode
          main: `${getComputedStyle(document.documentElement).getPropertyValue('--mainGreen')}`.trim(),
        }),
  },
});

export const muiTheme = createTheme(getDesignTokens('light'));
