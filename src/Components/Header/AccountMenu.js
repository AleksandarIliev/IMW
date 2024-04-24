import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { RiAccountCircleLine, RiCloseLine } from "react-icons/ri";

export const AccountMenu = () => {
    const [show, setShow] = useState(false);
    const { dictionary } = useContext(LanguageContext);
    const handleNavBtn = () => {
        setShow((current) => !current)
    }
    return (
        <>
            <div><h3 className="accountIcon" onClick={handleNavBtn}>{(!show ? <RiAccountCircleLine /> : <RiCloseLine />)}</h3></div>
            {show && <div className="accountMenu">
                <NavLink to="/register">{dictionary.register}</NavLink>
                <NavLink to="/login">{dictionary.login}</NavLink>
                <NavLink to="/logout">{dictionary.logout}</NavLink>
            </div>}
        </>
    )
}