
import { useState } from "react";


export const Login = () => {
    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {

        }
        alert("Please entre a valid username or password!!!")
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <form onSubmit={handleSubmitEvent}>
            <div className="formControl">
                <label htmlFor="userEmail">Email: </label>
                <input
                    type="email"
                    id="userEmail"
                    name="email"
                    placeholder="example@mail.com"
                    onChange={handleInput}
                />
                <div id="userEmail" className="info">
                    Please enter a valid email address.
                </div>
            </div>

            <div className="formControl">
                <label htmlFor="password">Pass: </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    onChange={handleInput}
                />
                <div id="password" className="info">
                    Password shoud be more then 6 charachter.
                </div>
            </div>
        </form>
    )
}