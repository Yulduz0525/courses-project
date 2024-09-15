import React, { useEffect, useState } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import NavArrow from "../../assets/navArrow.png"
import en from "../../locales/en.json"
import uz from "../../locales/uz.json"
import ru from "../../locales/ru.json"
import {resorce} from "../../locales/index"
const Language = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [rotate,setRotate] = useState(false)
    const { i18n } = useTranslation();
    const rotateArrow = () =>{
        setRotate(!rotate)
    }
    // Tilni localStorage-dan olish
    const initialLanguage =
        typeof window !== "undefined"
            ? localStorage.getItem("language") || "uz"
            : "uz";
    
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

    // Tilni o'zgartirganda
    useEffect(() => {
        if (i18n && typeof i18n.changeLanguage === "function") {
            i18n.changeLanguage(selectedLanguage);
            localStorage.setItem("language", selectedLanguage);
        } else {
            console.error("i18n object or changeLanguage method is not available.");
        }
    }, [selectedLanguage, i18n]);

    // Tilni tanlash funksiyasi
    const onChangeLanguage = (value) => {
        setSelectedLanguage(value);
        setIsMenuOpen(false); // Menu yopish
    };

    // Har bir til uchun matn
    const getLanguageText = (lang) => {
        switch (lang) {
            case "uz":
                return "UZB";
            case "ru":
                return "RUS";
            case "en":
                return "ENG";
            default:
                return "ENG";
        }
    };

    const languageText = getLanguageText(selectedLanguage);

    return (
        <div className='custom-dropdown' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button onClick={rotateArrow} className='custom-dropdown-toggle d-flex border-0 btnText fw-semibold fs-4 bg-transparent items-center justify-center align-items-center gap-1'>
                        <p>{languageText}</p> 
                        <img className={`${rotate && "rotate"} arrowImg`} src={NavArrow}/>
            </button>
            {
                isMenuOpen && (
                    <div className="custom-dropdown-menu position-absolute d-flex flex-column align-items-center gap-1">
                        <div className="custom-dropdown-item py-1 px-2"
                            onClick={() => onChangeLanguage("uz")}
                        >
                            <p className='btnText fs-5'>{getLanguageText("uz")}</p>
                        </div>
                        <div className="custom-dropdown-item py-1 px-2"
                            onClick={() => onChangeLanguage("ru")}
                        >
                            <p className='btnText fs-5'>{getLanguageText("ru")}</p>
                        </div>
                        <div className="custom-dropdown-item py-1 px-2"
                            onClick={() => onChangeLanguage("en")}
                        >
                            <p className='btnText fs-5'>{getLanguageText("en")}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Language;
