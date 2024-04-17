import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const { dictionary } = useContext(LanguageContext);
    const handleNavBtn = () => {
        setShow((current) => !current)
    }

    return (
        <>
            <div className="navbar">
                <NavLink to="/">IMW Ltd.</NavLink>
                <NavLink to="/about">{dictionary.about}</NavLink>
                <NavLink to="/team">{dictionary.team}</NavLink>
                <NavLink to="/products">{dictionary.products}</NavLink>
                <NavLink to="/contact">{dictionary.contact}</NavLink>
                <NavLink to="/register">{dictionary.register}</NavLink>
                <NavLink to="/login">{dictionary.login}</NavLink>
                <NavLink to="/logout">{dictionary.logout}</NavLink>
            </div>
            <div className="navBtn" onClick={handleNavBtn}>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
            </div>
            {show && <div className="miniNav">
                <NavLink to="/about">{dictionary.about}</NavLink>
                <NavLink to="/team">{dictionary.team}</NavLink>
                <NavLink to="/products">{dictionary.products}</NavLink>
                <NavLink to="/contact">{dictionary.contact}</NavLink>
            </div>}
            <div className="accountIcon"><p>&#xf2bd;</p></div>
            {show && <div className="accountMenu">
                <NavLink to="/register">{dictionary.register}</NavLink>
                <NavLink to="/login">{dictionary.login}</NavLink>
                <NavLink to="/logout">{dictionary.logout}</NavLink>
            </div>}
        </>
    );
}