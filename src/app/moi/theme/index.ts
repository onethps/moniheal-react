import { type ThemeOptions } from "@mui/material";

import GraphickLCGWoff2Regular from "../assets/fonts/Graphik-Regular-Web.woff2";
import GraphickLCGWoff2Medium from "../assets/fonts/Graphik-Medium-Web.woff2";
import GraphickLCGWoff2Bold from "../assets/fonts/Graphik-Bold-Web.woff2";
import GraphickLCGWoff2Bolder from "../assets/fonts/Graphik-Black-Web.woff2";

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
          font-style: lighter;
          font-weight: 300;
          src: url(${GraphickLCGWoff2Regular}) format('woff2');
        },
        @font-face {
          font-family: 'GraphikLCG';
          font-style: normal;
          font-weight: 400;
          src: url(${GraphickLCGWoff2Medium}) format('woff2');
        },
        @font-face {
          font-family: 'GraphikLCG';
          font-style: bolder;
          font-weight: 700;
          src: url(${GraphickLCGWoff2Bold}) format('woff2');
        }
        @font-face {
          font-family: 'GraphikLCG';
          font-style: extra-bold;
          font-weight: 800;
          src: url(${GraphickLCGWoff2Bolder}) format('woff2');
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
