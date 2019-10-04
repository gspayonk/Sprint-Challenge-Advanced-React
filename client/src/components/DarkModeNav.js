
import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
    };

    return (
    <nav className="navbar">
        <h1>Women's World Cup 🏆</h1>
        <div className="dark-mode__toggle">

        <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
        />

        </div>
    </nav>
    );
};

export default Navigation;