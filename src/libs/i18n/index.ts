import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en/en.json"
import fr from "./fr/fr.json"
import de from "./de/de.json"
import ar from "./ar/ar.json";

const resources = () => {
    return {
        en: {
            translation: en,
        },
        fr: {
            translation: fr
        },
        de: {
            translation:de
        },
        ar: {
            translation: ar
        },
    };
};
i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    fallbackLng: "en",
    resources: resources(),
    lng: "en",
});
export default i18n;
