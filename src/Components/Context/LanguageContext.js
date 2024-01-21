import { useContext, useState, createContext } from "react";
import { langOption, langList } from "../../Languages/Languages";

export const LanguageContext = createContext({
    userLang: "en",
    dictionary: langList.en
})

export function LanguageProvider({ children }) {
    const defaultLang = window.localStorage.getItem("rcml-lang");
    const [userLang, setUserLang] = useState(defaultLang || "en");

    const provider = {
        userLang,
        dictionary: langList[userLang],
        userLangChange: selected => {
            const newLang = langOption[selected] ? selected : "en"
            setUserLang(newLang);
            window.localStorage.setItem("rcml-lang", newLang);
        }
    };

    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
}   

export function Text ({ tid }) {
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[tid] || tid;
}