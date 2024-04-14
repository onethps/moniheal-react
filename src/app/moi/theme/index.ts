import { type ThemeOptions } from "@mui/material";
import GraphikMedium from "../assets/fonts/GraphikLCG-Medium.woff2";

import { palette } from "./palette";
export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "GraphikLCG",
    fontSize: 16,
  },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //   @font-face {
    //     font-family: 'GraphikLCG';
    //     font-style: medium;
    //     font-display: swap;
    //     font-weight: 500;
    //     src: local('GraphikLCG'), local('Raleway-Regular'), url(${GraphikMedium}) format('woff2');
    //     unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //   }
    // `,
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", size: "large" },
          style: {
            minHeight: 40,
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            border: "1px solid #173236",
            color: "#173236",
            "&:hover": {
              border: "1px solid #173236",
            },
          },
        },
        {
          props: { variant: "text" },
          style: {
            fontWeight: 600,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: "20px",
          boxShadow: "none",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: "50px",
          "& fieldset": {
            borderRadius: "10px",
            borderColor: "#90A4BE",
            transition: ".2s ease-in-out",
          },
        },
      },
    },
  },
  palette,
};
