import { useState } from "react";
import './Collapsible.css';

export const Collapsible = ({ children, label }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <button className="toggle" onClick={() => setOpen(!open)}>{label}</button>
            <div className={open ? "content show" : "content"}>{children}</div>
        </div>
    )
}