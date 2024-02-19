import { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import styles from './Team.module.css';

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.allSection}>
            <div className={styles.section}>
                <button onClick={toggle} className={styles.collapsible}>Our team</button>
                {open && (
                    <div className={styles.toggle}>
                        <p>{dictionary.contentTeam.personOne}</p>
                    </div>)}
            </div>

            <div className={styles.section}>
                <button onClick={toggle} className={styles.collapsible}>Certificates</button>
                {open && (
                    <div className={styles.toggle}>
                        <p>{dictionary.contentTeam.personOne}</p>
                    </div>)}
            </div>

            <div className={styles.section}>
                <button onClick={toggle} className={styles.collapsible}>Areas of work</button>
                {open && (
                    <div className={styles.toggle}>
                        <p>{dictionary.contentTeam.personOne}</p>
                    </div>)}
            </div>
        </div>
    )
}