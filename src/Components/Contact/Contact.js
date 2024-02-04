import { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import styles from "./Contact.module.css"

export const Contact = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <>
            <div className={styles.contactStyle}>{dictionary.contentContact[0].office}</div>
            <div className={styles.contactStyle}>{dictionary.contentContact[0].email}</div>
            <div className={styles.contactStyle}>{dictionary.contentContact[0]["tel."]}</div>
            <div className={styles.contactStyle}>{dictionary.contentContact[0].workingTime}</div>
            <div className={styles.contactStyle}>{dictionary.contentContact[0].companyDate}</div>
        </>
    )
}