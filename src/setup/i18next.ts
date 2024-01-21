import i18next from "i18next";
import Backend from "i18next-http-backend";

import { initReactI18next } from "react-i18next";

export const setupI18next = (url: string): void => {
  i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
      backend: {
        loadPath: url,
      },
      fallbackLng: "uk",
      keySeparator: false,
    });
};
