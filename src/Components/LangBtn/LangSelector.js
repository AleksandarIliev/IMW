// import { useContext, useState } from "react"
// import { LangContext } from "../Context/LangContext"

// export const LangBtn = () => {
//     const [isClick, setIsClick]= useState(false);
//     const { lang, setLang } = useContext(LangContext)
//     const changeLang = () => {
//         setIsClick(!isClick)
//     }
    
//     return (
//         <span className="language">
//             <span>
//                 <button onClick={changeLang}>
//                     {lang}
//                 </button>
//             </span>
//             {isClick ?
//                 <div>
//                     <div><button onClick={() => setLang('Bg')}>Bg</button></div>
//                     <div><button onClick={() => setLang('En')}>En</button></div>
//                     <div><button onClick={() => setLang('De')}>De</button></div>
//                 </div> : ''
//             }
//         </span>
//     )
// }

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