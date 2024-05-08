import { BreakpointOverrides } from "@mui/system/createTheme/createBreakpoints";
import { ThemeOptions, Button, PaletteColor, TextField } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    colors: ThemeColors;
  }

  interface ThemeOptions {
    colors?: ThemeColorsOptions;
  }

  interface Palette {
    accent: PaletteColor;
    critical: PaletteColor;
    buttonLight: PaletteColor;
    buttonLighten: PaletteColor;
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions;
    critical?: PaletteColorOptions;
    buttonLight: PaletteColorOptions;
    buttonLighten: PaletteColorOptions;
  }

  interface TypeText {
    base: string;
    muted: string;
    faint: string;
  }

  interface TypographyVariants {
    large: React.CSSProperties;
    body: React.CSSProperties;
    small: React.CSSProperties;
    mini: React.CSSProperties;
    tiny: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    large?: React.CSSProperties;
    body?: React.CSSProperties;
    small?: React.CSSProperties;
    mini?: React.CSSProperties;
    tiny?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    dialogMd: true;
    dialogLg: true;
    dialogXmd: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    large: true;
    body: true;
    small: true;
    mini: true;
    tiny: true;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    caption: false;
    button: false;
    overline: false;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    custom: true;
  }
}

declare module "@mui/material/InputBase" {
  interface InputBasePropsSizeOverrides {
    xs: true;
    small: true;
    medium: true;
    large: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    // custom: true;
  }
  interface ButtonPropsColorOverrides {
    buttonLight: true;
    buttonLighten: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsSizeOverrides {
    extraSmall: true;
    superSmall: true;
  }
}
