import { useContext, useState } from "react"
import { LangContext } from "../Context/LangContext"

export const LangBtn = () => {
    const [isClick, setIsClick]= useState(false);
    const { lang, setLang } = useContext(LangContext)
    const changeLang = () => {
        setIsClick(!isClick)
    }
    
    return (
        <span className="language">
            <span>
                <button onClick={changeLang}>
                    {lang}
                </button>
            </span>
            {isClick ?
                <div>
                    <div><button onClick={() => setLang('Bg')}>Bg</button></div>
                    <div><button onClick={() => setLang('En')}>En</button></div>
                    <div><button onClick={() => setLang('De')}>De</button></div>
                </div> : ''
            }
        </span>
    )
}