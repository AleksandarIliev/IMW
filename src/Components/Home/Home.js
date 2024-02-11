import { useState, useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import styles from "./Home.module.css";

export const Home = () => {
    const dictionary = useContext(LanguageContext);
    const [curentImg, setCurrentImg] = useState(0);
    const length = dictionary.contentHome.length;

    const next = () => {
        setCurrentImg(curentImg === length - 1 ? 0 : curentImg + 1);
    }

    const prev = () => {
        setCurrentImg(curentImg === 0 ? length - 1 : curentImg - 1);
    }

    return (
        <div className={styles.bigView}>
            <img src={dictionary.contentHome[index].image} className={styles.image} />
            <a className={styles.prev} onClick={prev()}>&#10094;</a>
            <a className={styles.next} onClick={next()}>&#10095;</a>
            <h2 className={styles.text}>{dictionary.contentHome[index].imageText}</h2>
        </div>
    )
}