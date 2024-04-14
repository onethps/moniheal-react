import CssBaseline from "@mui/material/CssBaseline";
import { type ReactNode } from "react";

import { themeOptions } from "../theme/index";
import { ThemeProvider } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";

export default function ThemeConfig({ children }: { children: ReactNode }) {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
