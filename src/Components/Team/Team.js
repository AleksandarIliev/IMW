import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useState } from "react";
import { Collapsible } from "./Collapsible";
import "./Team.module.css";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);
    const photoLength = dictionary.contentTeam[0].length - 1;
    console.log(dictionary.contentTeam[0].certificates[0].certificates);

    const prev = () => {
        setIndex(index === photoLength ? 0 : index + 1)
    }

    const next = () => {
        setIndex(index === 0 ? photoLength : index - 1)
    }

    return (
        <div>
            <Collapsible label={dictionary.contentTeam[0].certificates[0].certificates}>
                {dictionary.contentTeam[0].certificates.map((slide, slideIndex) => {
                    const { image, text } = slide;
                    return (
                        <div className="container">
                            <img className="img" src={image} alt="" />
                            <div className="bottommiddle">
                                <div className="prevBtn" onClick={prev}>&#10094;</div>
                                <div className="nextBtn" onClick={next}>&#10095;</div>
                                <span className="text" >{text}</span>
                            </div>
                        </div>
                    )
                })}
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