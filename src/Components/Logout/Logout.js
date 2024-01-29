import { useEffect } from "react";

export const Logout = () => {
    // const auth = useAuth();

    return (
        <div className="logout">
            <p>Are you sure to want to logout:</p>
            <button onClick={() => auth.logout()} classname="logoutBtn">Logout</button>
        </div>
    )
}