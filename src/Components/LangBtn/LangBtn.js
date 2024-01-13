import { useState } from "react"

export const LangBtn = () => {
    const [lang, setLang] = useState("en")
    retrun (
        <p>{lang}</p>
    )
}