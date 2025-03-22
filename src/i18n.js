import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load translation files from backend
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    supportedLngs: ["en", "ar", "fr"], // Limit to supported languages
    fallbackLng: "en", // Default language
    debug: false, // Disable debug in production

    detection: {
      order: [
        "localStorage",
        "cookie",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"], // Store detected language
    },

    interpolation: {
      escapeValue: false, // React already prevents XSS
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Translation files location
      allowMultiLoading: false, // Load only one language at a time
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
      },
    },
  });

export default i18n;
