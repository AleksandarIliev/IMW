import { LanguageContext } from "../Context/LanguageContext";
import { useContext, useState } from "react";
import { Collapsible } from "./Collapsible";
import "./Team.module.css";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);
    const [index, setIndex] = useState(0);
    const photoLength = dictionary.contentTeam[0].length - 1;
    console.log(dictionary.contentTeam[0]);

    const prev = () => {
        setIndex(index === photoLength ? 0 : index + 1)
    }

    const next = () => {
        setIndex(index === 0 ? photoLength : index - 1)
    }

    return (
        <div>
            <Collapsible label="Certificates">
                <div className="container">
                    <img className="mySlides" src={dictionary.contentTeam[0]} alt="" />
                    <div className="bottommiddle">
                        <div className="w3-left w3-hover-text-khaki" onClick={prev}>&#10094;</div>
                        <div className="w3-right w3-hover-text-khaki" onClick={next}>&#10095;</div>
                        <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick="currentDiv(1)"></span>
                    </div>
                </div>
            </Collapsible>

            <Collapsible label="Our team">
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </Collapsible>

            <Collapsible label="Areas of work">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </Collapsible>

            <Collapsible label="Software">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </Collapsible>
            <Collapsible label="Languages">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </Collapsible>
        </div>
    )
}