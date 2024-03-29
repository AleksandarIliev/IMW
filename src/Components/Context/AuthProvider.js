import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);
const [token, setToken] = useState(localStorage.getItem("site") || "");
const navigate = useNavigate();
const loginAction = async (data) => {
    try {
        const respons = await fetch("../data.json", {
            method: "POST",
            headers: {
                "Content-type": "aplication/json",
            },
            body: JSON.stringify(data),
        });
        const res = await respons.json();
        if (res.data) {
            setUser(res.data.user);
            setToken(res.token);
            localStorage.setItem("site", res.token);
            navigate("/");
            return;
        }
        throw new Error(res.message); 
    } catch (err) {
        console.error(err);
    }
}

const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/login");
}

    return (
        <AuthContext.Provider value={{token, user, loginAction, logOut}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}