import i18next from "i18next";
import Backend from "i18next-http-backend";

import yaml from "js-yaml";
import { initReactI18next } from "react-i18next";

export const setupI18next = (): void => {
  i18next
    .use(Backend)
    .use(initReactI18next)
    .init({
      backend: {
        loadPath: "/src/locales/messages.{{lng}}.yaml",
        parse: function (data) {
          return yaml.load(data);
        },
      },
      fallbackLng: "uk",
      keySeparator: false,
    });
};
