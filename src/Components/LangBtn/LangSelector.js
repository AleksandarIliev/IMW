import { useContext } from "react";

import { langOption } from "../../Languages/Languages";
import { LanguageContext } from "../Context/LanguageContext";

export default function LangSelector () {
    const { userLang, userLangChange } = useContext(LanguageContext);

    const handleLangChange = e => userLangChange(e.target.value);

    return (
        <select className="langBtn" onChange={handleLangChange} value = {userLang}>
            {Object.entries(langOption).map(([id, name]) => (
                <option key={id} value={id}>{name}</option>
            ))}
        </select>
    )
}