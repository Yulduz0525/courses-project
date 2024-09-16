import { i18n } from "next-i18next";
import { initReactI18next } from "react-i18next";
import i18nextBrowserLanguagedetector from "i18next-browser-languagedetector";

import { resorce } from "./locales";

const supportedLngs = ["en","uz","ru"]
i18n
    .use(i18nextBrowserLanguagedetector)
    .use(initReactI18next)
    .init({
        debugger:true,
        fallbackLng:"en",
        supportedLngs,
        interpolation:{
            escapeValue:false,
        },
        resources:resorce,
    })

export default i18n;

