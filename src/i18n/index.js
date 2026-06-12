import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import hi from "./hi.json";
import en from "./en.json";
import pa from "./pa.json";
import bn from "./bn.json";
import mr from "./mr.json";
import ta from "./ta.json";
import te from "./te.json";

i18n.use(initReactI18next).init({
  resources: {
    hi: { translation: hi },
    en: { translation: en },
    pa: { translation: pa },
    bn: { translation: bn },
    mr: { translation: mr },
    ta: { translation: ta },
    te: { translation: te },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
