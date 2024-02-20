import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enConfig from "./locales/en.json";
import ruConfig from "./locales/ru.json";
import deConfig from "./locales/de.json";
import ltConfig from "./locales/lt.json";

i18next.use(initReactI18next).init({
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  resources: {
    en: { translation: enConfig },
    de: { translation: deConfig },
    ru: { translation: ruConfig },
    lt: { translation: ltConfig },
  },
});
