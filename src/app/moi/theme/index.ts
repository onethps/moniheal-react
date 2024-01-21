import { type ThemeOptions } from "@mui/material";

import GraphickLCGWoff2Medium from "../assets/fonts/GraphikLCG-Medium.woff2";
import GraphickLCGWoff2SemiBold from "../assets/fonts/GraphikLCG-Semibold.woff2";
import GraphickLCGWoff2Bold from "../assets/fonts/GraphikLCG-Bold.woff2";

import { palette } from "./palette";

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "GraphikLCG, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'GraphikLCG';
          font-style: normal;
          font-weight: 300;
          src: url(${GraphickLCGWoff2Medium}) format('woff2');
        },
        @font-face {
          font-family: 'GraphikLCG';
          font-style: normal;
          font-weight: 400;
          src: url(${GraphickLCGWoff2SemiBold}) format('woff2');
        },
        @font-face {
          font-family: 'GraphikLCG';
          font-style: bold;
          font-weight: 500;
          src: url(${GraphickLCGWoff2Bold}) format('woff2');
        }
     
        `,
    },
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
