import {
  PaletteOptions,
  ThemeOptions,
  Container,
  createTheme,
} from "@mui/material";
import { palette } from "./palette";

import { fontFaceOverrides } from "./fonts";
import { typography } from "./typography";

const themeOptions: ThemeOptions = {
  typography,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      dialogLg: 688,
      dialogMd: 452,
      dialogXmd: 500,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body",
        variantMapping: {
          large: "p",
          body: "p",
          small: "p",
          mini: "p",
          tiny: "p",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {},
    },
    MuiSvgIcon: {
      variants: [
        {
          props: { fontSize: "superSmall" },
          style: {
            fontSize: 12,
          },
        },
        {
          props: { fontSize: "extraSmall" },
          style: {
            fontSize: 16,
          },
        },
        {
          props: { fontSize: "small" },
          style: {
            fontSize: 20,
          },
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: "500",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: "500",
        },
      },
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
          props: { variant: "contained", size: "medium" },
          style: {
            height: 50,
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
    MuiCssBaseline: {
      styleOverrides: fontFaceOverrides,
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

export const darkTheme = createTheme(themeOptions);
export const lightTheme = createTheme(themeOptions);
