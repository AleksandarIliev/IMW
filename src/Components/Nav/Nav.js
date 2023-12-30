import { NavLink } from "react-router-dom";
import { MenuBtn } from "./MenuBtn";

export const Nav = ({windowSize}) => {
    return (
        <div className="nav">
            <NavLink id="firmaName" to="/" >IMW Ltd.</NavLink>
            {windowSize < 600 ? <MenuBtn></MenuBtn> : (
            <div className="btnNav">
                <NavLink to="/aboutUs" >About us</NavLink>
                <NavLink to="/ourTeam" >Our team</NavLink>
                <NavLink to="/products" >Products</NavLink>
                <NavLink to="/contact" >Contact</NavLink>

                <NavLink to="/login" >Login</NavLink>
                <NavLink to="/register" >Register</NavLink>
            </div>
            )}
        </div>
    );
}