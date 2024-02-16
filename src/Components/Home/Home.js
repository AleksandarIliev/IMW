import { useState, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import styles from "./Home.module.css";

export const Home = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);
    const length = dictionary.contentHome[0];

    const next = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    }

    const prev = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    }

    return (
        <div className={styles.bigView}>
            <img src={dictionary.contentHome[0].image} className={styles.image} alt={dictionary.contentHome[0].alt} />
            <a className={styles.prev} onClick={prev}>&#10094;</a>
            <a className={styles.next} onClick={next}>&#10095;</a>
            <h2 className={styles.text}>{dictionary.contentHome[0].imageText}</h2>
        </div>
    )
}