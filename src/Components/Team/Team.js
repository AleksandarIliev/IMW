import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useState, useEffect } from "react";
import { Collapsible } from "./Collapsible";
import "./Team.css";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = dictionary.contentTeam[0].length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        } else if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, dictionary.contentTeam]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => clearInterval(slider);
    }, [index]);

    return (
        <div>
            <Collapsible label={dictionary.contentTeam[0].certificates[0].certificates}>
                <div className="sectionCenter">
                    {dictionary.contentTeam[0].certificates.map((slide, sliderIndex) => {
                        const { image, description } = slide;
                        let position = "nextSlide";
                        if (sliderIndex === index) {
                            position = "activeSlide";
                        }
                        if (
                            sliderIndex === index - 1 || 
                            (index === 0 && sliderIndex === dictionary.contentTeam[0].length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <div key={sliderIndex} className={position}>
                                <img className="img" src={image} alt="" />
                                <div className="bottommiddle">
                                    <span className="text" >{description}</span>
                                </div>
                            </div>
                        );
                    })}
                    <button className="prevBtn" onClick={() => setIndex(index - 1)}>&#10094;</button>
                    <button className="nextBtn" onClick={() => setIndex(index + 1)}>&#10095;</button>
                </div>
            </Collapsible>

            {/* <Collapsible label={dictionary.contentTeam[0].ourTeam}>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[0].areasOfWork}>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[0].software}>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[0].languages}>
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </Collapsible> */}
        </div>
    )
}