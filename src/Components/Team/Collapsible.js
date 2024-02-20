import { useState } from "react";
import styles from './Collapsible.module.css';

export const Collapsible = ({ children, label }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.container}>
            <button className={styles.toggle} onClick={() => setOpen(!open)}>{label}</button>
            <div className={open ? "content show" : "content"}>{children}</div>
        </div>
    )
}