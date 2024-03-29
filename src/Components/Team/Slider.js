import { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { Slide } from "./Slide";

export const Slider = ({ }) => {
    const cert = useContext(LanguageContext);
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

    return (
        <div className="slider">
            <div className="slides">
                {images.map((e, i) => (
                    <Slide key={e.description} {...e} active={i === active} />
                ))}
            </div>
            <div className="nav">
                <div className="navBottom">
                    {images.map((e, i) => (
                        <img 
                            className={`preview ${i === active ? "active" : ""}`}
                            key={e.description}
                            onClick={() => setActive(i)}
                            src={e.image}
                            alt={e.description}
                            style={{width: `${100 / images.length}%`}}
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