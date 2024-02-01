import { useAuth } from "../Context/AuthProvider";
// import { useEffect } from "react";

export const Logout = () => {
    const auth = useAuth();

    return (
        <div className="logout">
            <h3>Hi {auth.user?.username}</h3>
            <p>Are you sure to want to logout:</p>
            <button onClick={() => auth.logOut()} classname="logoutBtn">Logout</button>
        </div>
    )
}