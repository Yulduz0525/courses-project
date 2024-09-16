import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resorce } from "./locales";
const language = localStorage.getItem('language') || 'uz';
const supportedLngs = ["en","uz","ru"]
i18next
    .use(initReactI18next)
    .init({
        debugger:true,
        fallbackLng:"uz",
        supportedLngs,
        interpolation:{
            escapeValue:false,
        },
        resources:resorce,
        lng:language
    })

export default i18next;
