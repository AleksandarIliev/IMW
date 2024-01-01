import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const handleNavBtn = () => {
        
    }

    return (
        <div className="navbar">
            <NavLink to="/">IMW Ltd.</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <div className="navBtn" onClick={handleNavBtn}>
                <div className="lineOne"></div>
                <div className="lineTwo"></div>
                <div className="lineThree"></div>
            </div>
        </div>
    );
}