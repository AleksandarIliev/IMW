import { Nav } from "../Nav/Nav";

import { useState, useEffect } from 'react';

export const Header = () => {

    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, []);

    return (        
        <Nav windowSize={windowSize[0]}></Nav>
    )
}