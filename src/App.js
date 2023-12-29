import './App.css';
import { Routes, Route } from 'react-router-dom';
import { About } from "./Components/About/About";
import { Team } from "./Components/Team/Team";
import { Products } from "./Components/Products/Products";
import { Contact } from "./Components/Contact/Contact";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Contents } from "./Components/Contents/Contents";

function App() {
    
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/aboutUs" element={<About />} />
                <Route path="/ourTeam" element={<Team />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <Contents />
            <Footer />
        </>
    )
}

export default App;