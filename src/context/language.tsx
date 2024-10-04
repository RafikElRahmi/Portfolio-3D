import { i18n } from "@app/libs";
import { getValues } from "../utils/helpers";
import { useContext, useState, createContext, useMemo } from "react";

export enum languages {
    FRENCH = "fr",
    ENGLISH = "en",
    ARABIC = "ar",
    DEUTSCH = "de",
}

const LanguageContext = createContext({
    lang: languages.ENGLISH,
    languages,
    setLangauge: (_lang: languages) => {},
});

interface ILanguageProviderProps {
    children: React.ReactNode;
}
function LanguageProvider({ children }: ILanguageProviderProps) {
    const getStoredLang = () => {
        const language = localStorage.getItem("language");
        if (language && getValues(languages).includes(language)) {
            document.documentElement.setAttribute(
                "lang",
                `${language}-${language.toUpperCase()}`
            );
            if (language === languages.ARABIC) {
                document.documentElement.setAttribute("dir", `rtl`);
            } else {
                document.documentElement.setAttribute("dir", `ltr`);
            }
            i18n.changeLanguage(language);
            return language as languages;
        } else {
            const userLang = navigator.language;
            const lang = userLang.split("-")[0];
            if (getValues(languages).includes(lang)) {
                document.documentElement.setAttribute(
                    "lang",
                    `${lang}-${lang.toUpperCase()}`
                );
                if (lang === languages.ARABIC) {
                    document.documentElement.setAttribute("dir", `rtl`);
                } else {
                    document.documentElement.setAttribute("dir", `ltr`);
                }
                i18n.changeLanguage(lang);
                return lang as languages;
            } else {
                document.documentElement.setAttribute("lang", "en-US");
                document.documentElement.setAttribute("dir", `ltr`);
                i18n.changeLanguage(languages.ENGLISH);
                return languages.ENGLISH;
            }
        }
    };
    const [lang, setLang] = useState<languages>(getStoredLang());
    function setLangauge(lang: languages) {
        setLang(lang);
        document.documentElement.setAttribute(
            "lang",
            `${lang}-${lang.toUpperCase()}`
        );
        if (lang === languages.ARABIC) {
            document.documentElement.setAttribute("dir", `rtl`);
        } else {
            document.documentElement.setAttribute("dir", `ltr`);
        }
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
    }
    const value = useMemo(
        () => ({ lang, setLangauge, languages }),
        [setLangauge, lang]
    );
    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}
export const useLang = () => {
    const langContext = useContext(LanguageContext);
    if (!langContext) {
        throw new Error("useLang must be used within LanguageProvider");
    }
    return langContext;
};
export default LanguageProvider;
