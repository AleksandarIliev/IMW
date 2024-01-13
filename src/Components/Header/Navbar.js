import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
    const [show, setShow] = useState(false)
    const handleNavBtn = () => {
        setShow((current) => !current)
    }

    return (
        <>
            <div className="navbar">
                <NavLink to="/">IMW Ltd.</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </div>
            <div className="navBtn" onClick={handleNavBtn}>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
            </div>
            {show && <div className="miniNav">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/team">Team</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/logout">Logout</NavLink>
            </div>}
        </>
    );
}