import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import styles from "./Home.module.css";

export const Home = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = dictionary.contentHome[0].length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        } else if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, dictionary.contentHome])    
    
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [index,  dictionary.contentHome]);

    return (
        <div>
            <img src={dictionary.contentHome[0].image} className={styles.image} alt={dictionary.contentHome[0].alt} />
            <button className={styles.prev} onClick={() => setIndex(index - 1)}>&#10094;</button>
            <button className={styles.next} onClick={() => setIndex(index + 1)}>&#10095;</button>
            <h3 className={styles.text}>{dictionary.contentHome[0].imageText}</h3>
        </div>
    )
}