import './App.css';
import { Header } from "./Components/Header/Header";
import { About } from "./Components/About/About";
import { Team } from "./Components/Team/Team";
import { Products } from "./Components/Products/Products";
import { Contact } from "./Components/Contact/Contact";
import { Register } from "./Components/Register/Register";
import { Login } from "./Components/Login/Login";
import { Logout } from "./Components/Logout/Logout";
import { Footer } from "./Components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';

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
            <Routes window={window.scrollTo(0, 0)}>
                <Route path="/" />
                <Route path="/about" element={<About width={width}/>} />
                <Route path="/team" element={<Team />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;