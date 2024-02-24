import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import { Collapsible } from "./Collapsible";
import "./Team.module.css";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <div>
            <Collapsible label="Certificates">
                <div className="container">
                    <img className="mySlides" src="img_nature_wide.jpg" alt="" />
                    <img className="mySlides" src="img_snow_wide.jpg" alt="" />
                    <img className="mySlides" src="img_mountains_wide.jpg" alt="" />
                    <div className="bottommiddle">
                        <div className="w3-left w3-hover-text-khaki" onClick="plusDivs(-1)">&#10094;</div>
                        <div className="w3-right w3-hover-text-khaki" onClick="plusDivs(1)">&#10095;</div>
                        <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick="currentDiv(1)"></span>
                        <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick="currentDiv(2)"></span>
                        <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick="currentDiv(3)"></span>
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