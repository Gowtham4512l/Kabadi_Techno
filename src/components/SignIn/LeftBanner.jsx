import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

const LeftBanner = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const fullText = `"Be a part of solution, not a part of pollution."`;
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 75);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='banner'>
            <h1>{text}</h1>
            <NavLink to="/signin/signup" className="banner_button">
                Sign Up
            </NavLink>
        </div>
    );
};

export default LeftBanner