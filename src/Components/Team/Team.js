import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useState, useEffect } from "react";
import { Collapsible } from "./Collapsible";
import { Slide } from "./Slide"
import "./Team.css";
import { Slider } from "./Slider";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(1);
    // const [active, setActive] = useState(1);

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
                                <div>
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
                {dictionary.contentTeam[1].ourTeam.map(x => {
                    return (
                        <div className="teamStyle">
                            <span className="personStyle">{x.person + " - "}</span>
                            <span className="sphereStyle">{x.sphere}</span>
                        </div>
                    )
                })}
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

            <Collapsible label={dictionary.contentTeam[0].certificates[0].certificates}>
                <div className="container">
                    <div className="mySlides">
                        <div className="slideNumber">{dictionary.contentTeam[0].certificates[1].id} / {dictionary.contentTeam[0].certificates.length - 1}</div>
                        <div>{dictionary.contentTeam[0].certificates.map((image, index, description) => (<img key={index} src={image} alt={description} />))}</div>
                    </div>
                    <Slide />
                    <Slider />
                </div>
            </Collapsible>
        </div>
    )
}