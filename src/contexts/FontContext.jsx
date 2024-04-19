import { createContext, useEffect, useState } from 'react';


const FontContext = createContext();

const FontProvider = ({ children }) => {

    const [font, setFont] = useState('sans-serif');

    useEffect(() => {
        document.body.style.fontFamily = font;
    }, [font]);

    return (
        <FontContext.Provider value={{font, setFont}}>
            {children}
        </FontContext.Provider>
    );
};

export { FontContext, FontProvider };

