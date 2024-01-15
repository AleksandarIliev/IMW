import { createContext } from "react";

export const LangContext = createContext({
    lang: "En",
    setLang: () => { }
}, {
    lang: "De",
    setLang: () => { }
}, {
    lang: "Bg",
    setLang: () => { }
});