import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export const Footer = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div className="footer"><p >{dictionary.contentFooter}<NavLink to="https://github.com/AleksandarIliev">A. Iliev</NavLink></p></div>
    ); 
}