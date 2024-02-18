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
    }, [index,  dictionary.contentHome]);

    return (    
        <div className="section-center">
        {dictionary.contentHome.map((person, personIndex) => {
          const { id, image, imageText, content } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === dictionary.contentHome.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image}  alt={imageText} className={styles.image} />
              <p>{content}</p>
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
    )
}