import './App.css';
import { Header } from "./Components/Header/Header";
import { Contents } from "./Components/Contents/Contents";
import { Footer } from "./Components/Footer/Footer";

import { useState, useEffect } from "react"; 

function App() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        resizeWidth();
        window.addEventListener("resize", resizeWidth);
        return () => 
        window.removeEventListener("resize", resizeWidth);
    }, [])
    const resizeWidth = () => {
        const width = window.innerWidth
        setWidth(width);
    }

    return (
        <>
            <Header />
            <Contents />
            <p>width: {width}</p>
            <Footer />
        </>
    )
}

export default App;