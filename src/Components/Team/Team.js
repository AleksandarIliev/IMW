import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useState } from "react";
import { Collapsible } from "./Collapsible";
import "./Team.module.css";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);
    const photoLength = dictionary.contentTeam[0].length - 1;

    const prev = () => {
        setIndex(index === photoLength ? 0 : index + 1)
    }

    const next = () => {
        setIndex(index === 0 ? photoLength : index - 1)
    }

    return (
        <div>
            <Collapsible label={dictionary.contentTeam[0].certificates}>
                <div className="container">
                    <img className="mySlides" src={dictionary.contentTeam[0]} alt="" />
                    <div className="bottommiddle">
                        <div className="prevBtn" onClick={prev}>&#10094;</div>
                        <div className="nextBtn" onClick={next}>&#10095;</div>
                        <span className="i" onClick="currentDiv(1)"></span>
                    </div>
                </div>
            </Collapsible>

            <Collapsible label={dictionary.contentTeam[0].ourTeam}>
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
            </Collapsible>
        </div>
    )
}