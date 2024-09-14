import 'i18next'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
const Language = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    const { i18n } = useTranslation();
    const initialLanguage =
        typeof window !== "undefined"
            ? localStorage.getItem("language") || "UZB"
            : "ru"
    const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

    useEffect(() => {
        if (typeof window !== "undefined" &&
            i18n &&
            typeof i18n.changeLanguage === "function"
        ) {
            i18n.changeLanguage(selectedLanguage);
            localStorage.setItem("language", selectedLanguage);
        } else {
            console.error("i18n object or changeLanguage method is not available.");
        }
    }, [selectedLanguage, i18n])
    const onChangeLanguage = (value) => {
        setSelectedLanguage(value);
    };

    const languageText =
        selectedLanguage === "uz"
            ? "UZB"
            : selectedLanguage === "ru"
                ? "RUS"
                : "ENG"
    return (
        <div className='custom-dropdown' onClick={toggleMenu}>
            <button className='custom-dropdown-toggle flex border-2 border-solid border-white items-center justify-center'>
                <p>{languageText}</p>
            </button>
            {
                isMenuOpen && (
                    <div className="custom-dropdown-menu">
                        <div className="custom-dropdown-item"
                            onClick={() => onChangeLanguage("uz")}
                        >
                            <p>{languageText}</p>
                        </div>
                        <div className="custom-dropdown-item"
                            onClick={() => onChangeLanguage("ru")}
                        >
                            <p>{languageText}</p>
                        </div>
                        <div className="custom-dropdown-item"
                            onClick={() => onChangeLanguage("en")}
                        >
                            <p>{languageText}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Language