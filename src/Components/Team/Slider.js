import { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Slide } from "./Slide";
import "./Slide.css";

export const Slider = () => {
    const dictionary = useContext(LanguageContext);
    const [active, setActive] = useState(1);

    const onNext = () => {
        if (active < dictionary.contentTeam[0].certificates.length - 1) {
            setActive(active + 1);
        }
    }

    const onPrev = () => {
        if (active > 1) {
            setActive(active - 1);
        }
    }

console.log(dictionary.contentTeam.certificates[1].length - 1);

    return (
        <div className="slider">
            <div className="slides">
                {dictionary.contentTeam[0].certificates.map((e, i) => (
                    <Slide key={e.id} {...e} active={i === active} />
                ))}
            </div>
            <div className="nav">
                <div className="navBottom">
                    {dictionary.contentTeam[0].certificates.map((e, i) => (
                        <img 
                            className={`preview ${i === active ? "active" : ""}`}
                            key={e.id}
                            onClick={() => setActive(i)}
                            src={e.image}
                            alt={e.description}
                            style={{width: `${100 / dictionary.contentTeam[0].length}%`}}
                        />
                    ))}
                </div>
            </div>
            <div className="navNextPrev">
                <div className="nextPrev prev" onClick={onPrev}>
                    {" "}
                    &lt;{" "}
                </div>
                <div className="nextPrev next" onClick={onNext}>
                    {" "}
                    &gt;{" "}
                </div>
            </div>
        </div>
    )
}