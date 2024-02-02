import { Navigate } from "react-router-dom";

export const Error = () => {
    return (
        <Navigate to="/" replace={true} >{alert("Someting going wrong. Please go back or reload the page.")}</Navigate>
    )
}