import "./MenuBtn.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const MenuBtn = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (e) => {
        setIsClicked(current => !current);
        e.target.classList.toggle("change");
    }

    return (
        <>
            <div className="container" onClick={handleClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            {isClicked ? (
                <>
                    <NavLink to="/aboutUs" >About us</NavLink>
                    <NavLink to="/ourTeam" >Our team</NavLink>
                    <NavLink to="/products" >Products</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>

                    <NavLink to="/login" >Login</NavLink>
                    <NavLink to="/register" >Register</NavLink>
                </>
            ) : []}
        </>
    )
}