import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import styles from "./About.module.css";

export const About = ({ width }) => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <>
            <div className={styles.aboutStyle}>{dictionary.contentAbout[0].company}</div>
            <div className={styles.aboutStyle}>{dictionary.contentAbout[0].experience}</div>
            <div className={styles.aboutStyle}>{dictionary.contentAbout[0].partner}</div>
            {/* <p>Width: {width}</p> */}
        </>
    )
}