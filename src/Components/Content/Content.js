import { useState, useContext } from "react";
import { Text, LanguageContext } from "../Context/LanguageContext";

const selectOption = ["option1", "option2", "option3"];

export default function Content() {
    const [clickText, setClickText] = useState();
    const [selectedOption, setSelectedOption] = useState();
    const { dictionary } = useContext(LanguageContext);

    const handleClick = () => {
        setClickText(<Text tid="buttonClicked" />);
    }

    const handleOptionChange = e => {
        setSelectedOption(e.target.value);
    }

    return (
        <div>
            <h1><Text tid="exploreHeader" /></h1>
            <p><Text tid="welcomeDescription" /></p>

            <div>
                <input type="text" placeholder={dictionary.enterText} />
                <button onClick={handleClick}>
                    <Text tid="clickMe" />
                </button>
                <p>{clickText}</p>
            </div>

            <div>
                <select
                    onChange={handleOptionChange}
                    value={selectedOption}
                >
                    {selectOption.map(option => (
                        <option key={option} value={option}>
                            {dictionary[option]}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}