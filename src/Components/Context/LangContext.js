import React from "react";

const LangContext = React.createContext({
    lang: "en",
    setLang: () => { }
});

export default LangContext;