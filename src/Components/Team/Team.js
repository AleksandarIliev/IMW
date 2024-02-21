import { LanguageContext } from "../Context/LanguageContext";
import { useContext } from "react";
import { Collapsible } from "./Collapsible";

export const Team = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <div>
            <Collapsible label="Our team">
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </Collapsible>

            <Collapsible label="Certificates">
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
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
        </div>
    )
}