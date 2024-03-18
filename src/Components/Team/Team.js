import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useState, useEffect } from "react";
import { Collapsible } from "./Collapsible";
import "./Team.css";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const lastIndex = dictionary.contentTeam[0].certificates.length - 1;
        if (index < 1) {
            setIndex(lastIndex);
        } else if (index > lastIndex) {
            setIndex(1);
        }
    }, [index, dictionary.contentTeam]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [index]);

    // console.log();

    return (
        <div>
            <Collapsible label={dictionary.contentTeam[0].certificates[0].certificates}>
                <div className="sectionCenter">
                    {dictionary.contentTeam[0].certificates.map((slider, sliderIndex) => {
                        const { image, description } = slider;
                        let position = "nextSlide";
                        if (sliderIndex === index) {
                            position = "activeSlide";
                        }
                        if (
                            sliderIndex === index - 1 || 
                            (index === 0 && sliderIndex === dictionary.contentTeam[0].certificates.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <article key={sliderIndex} className={position}>
                                <img src={image} alt={description} className="img" />
                                <div className="bottommiddle">
                                    <span className="text" >{description}</span>
                                </div>
                            </article>
                        );
                    })}
                    <button className="prevBtn" onClick={() => setIndex(index - 1)}>&#10094;</button>
                    <button className="nextBtn" onClick={() => setIndex(index + 1)}>&#10095;</button>
                </div>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[1].ourTeam[0].ourTeam}>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[2].areasOfWork[0].areasOfWork}>
                <ol className="areasStyles">
                    {dictionary.contentTeam[2].areasOfWork.map(x => <li className="ordnenList">{x.sphere}</li>)}
                </ol>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[3].software[0].software}>
                <div className="softStyle">
                    {dictionary.contentTeam[3].software.map(x => <div className="field">{x.soft}</div>)}
                </div>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[4].languages[0].languages}>
                <div className="langStyle">
                    {dictionary.contentTeam[4].languages.map(x => <div className="round">{x.lang}</div>)}
                </div>
            </Collapsible>
        </div>
    )
}