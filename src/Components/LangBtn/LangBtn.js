import { useContext, useState } from "react"
import { LangContext } from "../Context/LangContext"

export const LangBtn = () => {
    const [isClick, setIsClick]= useState(false);
    const [lang, setLang] = useContext(LangContext)
    const changeLang = () => {
        setIsClick(!isClick)
    }
    
    return (
        <span>
            <span>
                <button style={{ padding: 0 }} onClick={changeLang}>
                    Language - {lang}
                </button>
            </span>
            {isClick ?
                <div style={{ position: 'absolute' }}>
                    <div><button onClick={() => setLang('Bg')} >BG - Bulgarian</button></div>
                    <div><button onClick={() => setLang('En')}>EN - English</button></div>
                    <div><button onClick={() => setLang('De')}>DE - Deutsch</button></div>
                </div> : ''
            }
        </span>
    )
}