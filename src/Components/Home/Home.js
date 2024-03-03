import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import styles from "./Home.module.css";

export const Home = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = dictionary.contentHome.length - 1;
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
    }, [index]);

    return (
        <section>
            <div>
                {dictionary.contentHome.map((slider, sliderIndex) => {
                    const { id, image, imageText } = slider;
                    let position = "nextSlide";
                    if (sliderIndex === index) {
                        position = "activeSlide";
                    }
                    if (
                        sliderIndex === index - 1 ||
                        (index === 0 && sliderIndex === dictionary.contentHome.length - 1)
                    ) {
                        position = "lastSlide";
                    }
                    return (
                        <article key={id} className={position}>
                            <img src={image} alt={imageText} className={styles.image} />
                            <p className={styles.text}>{imageText}</p>
                        </article>
                    );
                })}
                <button className={styles.prev} onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className={styles.next} onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    )
}