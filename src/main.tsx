import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeConfig from "./app/moi/theme/ThemeConfig.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { setupI18next } from "./setup/i18next.ts";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

setupI18next();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeConfig>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </ThemeConfig>
    </StyledEngineProvider>
  </React.StrictMode>
);
