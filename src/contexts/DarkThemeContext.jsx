import React, { createContext, useState, useEffect } from 'react';

const DarkThemeContext = createContext();

const DarkThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);
    
    useEffect(() => {
        document.body.style.backgroundColor = darkTheme ? 'black' : 'white';
        document.body.style.color = darkTheme ? 'white' : 'black';
    }
    , [darkTheme]);

    return (
        <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        {children}
        </DarkThemeContext.Provider>
    );
};

export { DarkThemeProvider, DarkThemeContext };